/* eslint-env node */
'use strict';
const path = require('path');
const fs = require('fs');
const VersionChecker = require('ember-cli-version-checker');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const express = require('express');

const generateDocs = require('./lib/index.js');

let config;

// Configuration is optional, load in a try/catch to handle possible error
try {
  config = require(path.resolve('fountainhead.js'));
} catch(ex) {
  config = {};
}

/**
 * The `Index` class from `index.js` handles addon consumption through Ember CLI.
 * @module EmberFountainhead
 */

/**
 * Addon index export handles all of the behind the scenes Ember magic that sets
 * up Ember Fountainhead consumption in a given app.
 * @class Index
 * @constructor
 */
module.exports = {
  name: 'ember-fountainhead',

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Fountainhead needs the consuming application's locationType for the doc meta.
   * Is pulled in the {{c-l 'config'}} hook.
   * @property locationType
   * @type {string}
   * @protected
   */
  locationType: null,

  // Methods
  // ---------------------------------------------------------------------------
  /**
   * Handle importing required assets on behalf of consuming application. The
   * template compiler is required for the runtime-description component and
   * the styles are automatically included for simpler setup
   * @method _importBrowserDependencies
   * @param {Object} app Consuming application
   */
  _importBrowserDependencies(app) {
    const checker = new VersionChecker(this);

    // Unless `includeVendorStyles` is explicitly set to false, we auto bundle
    // Fountainhead's styles into the vendor.css file here
    if (this.fountainheadConfiguration.includeVendorStyles !== false) {
      app.import(path.join('vendor/ember-fountainhead.css'));
    }

    // We need to import the template compiler to the bundle in order to compile
    // templates at runtime. 2.11+ ember-source moves compiler into vendor folder
    if (checker.forEmber().satisfies('>= 2.11.0')) {
      app.import('vendor/ember/ember-template-compiler.js');
    } else {
      app.import('bower_components/ember/ember-template-compiler.js');
    }
  },

  // Addon Hooks
  // ---------------------------------------------------------------------------
  /**
   * Hash fragment in click to copy headers need to know if the consuming application
   * is using hash or history routing. Although this can be explicitly set in the
   * `fountainhead.js` config file, we try to automatically supply it by checking
   * the `baseConfig` in this addon hook and passing the `locationType` to calls to
   * generate docs, where it's added to the doc's meta.
   * @method config
   * @param {string} env
   * @param {Object} baseConfig Consuming application's base configuration
   */
  config(env, baseConfig) {
    if (env === 'test') { return; } // Ignore test env b/c it uses locationType 'none'
    this.locationType = baseConfig.locationType;
  },
  /**
   * Handle walking addon tree to find consuming application and setting project
   * configs on addon for reference.
   *
   * If in development or addon is configured for inclusion to production build
   * handle addon setup
   * @method included
   */
  included(app, parentAddon) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    const env = process.env.EMBER_ENV || 'development';
    let projectConfiguration = this.project.config(env);
    let appOptions = app.options;

    if (typeof config === 'function') {
      config = config(env);
    }

    this.app = app;
    this.env = env;
    this.projectConfiguration = projectConfiguration;
    this.appOptions = appOptions;
    this.fountainheadConfiguration = config;

    // Pulls in dependencies to /vendor, we always run this b/c the entire addon
    // should be blacklisted if not wanted in production
    this._importBrowserDependencies(app);

    // B/c the `preBuild` hook gets called AFTER `treeForPublic`,
    // we need to generate docs in the `included` hook for prod
    // builds. 😑
    if (this.env === 'production') {
      generateDocs({ env: this.env, locationType: this.locationType });
    }
  },
  /**
   * Generates fountainhead output before a build is run for live editing.
   * Feature is enabled by default and can be disabled by setting `liveEdit` to
   * `false` in your `fountainhead.js` configuration.
   * @method preBuild
   * @return {undefined}
   */
  preBuild() {
    if (this.env === 'development' && this.fountainheadConfiguration.liveEdit !== false) {
      generateDocs({ env: this.env, locationType: this.locationType });
    }
  },
  /**
   * For production builds we need to include the `/docs` directory
   * using a Funnel. We return the default addon tree in non-prod
   * builds b/c docs are served through express middleware mounted
   * in {{cross-link 'serverMiddleware'}}
   * @method treeForPublic
   * @return {Object} Default public addon tree in dev builds. A
   *                  Broccoli merged tree with `/docs` dir for
   *                  prod builds
   */
  treeForPublic() {
    let addonTree = this._super.treeForPublic.apply(this, arguments);
    let trees = [];

    if (addonTree) {
      trees.push(addonTree);
    }

    // In dev include /guides to trigger live reload on change, not needed for prod
    // b/c guide contents are parsed as part of data generation
    if (this.env !== 'production' && fs.existsSync(path.resolve('guides'))) {
      trees.push(new Funnel('guides', {
        destDir: 'guides'
      }));
    }

    // In dev docs is included through `serverMiddleware`, prod must bundle them
    if (this.env === 'production') {
      trees.push(new Funnel('docs', {
        destDir: 'docs'
      }));
    }

    return mergeTrees(trees);
  },
  /**
   * The `serverMiddleware` hook is used for enabled live editing of
   * documentation. We started by generating the data files into the consuming
   * app's `/public` directory so that ember-cli could serve them. H/e this had
   * two issues:
   * - The first time that an app started w/ Fountainhead it would cause an
   *   infinite build loop that required a watchman server shutdown b/c the
   *   `/public` dir is watched for changes and starts a rebuild on change.
   * - Any CSS changes in an app would cause a full reload b/c Fountinhead would
   *   `generateDocs` in the called `preBuild` hook. The newly generated docs
   *   output to the `/public` dir would then cause a full reload.
   *
   * Docs are now default generated to the `/docs` directory in the project root
   * so that file generation doesn't interfere with cli's directory watching.
   * Then we make the data files available for consumption in dev by mounting
   * middleware that sets the `/docs` dir as a static resource for the cli
   * express app.
   *
   * NOTE: In the `package.json` we configure this addon to run before the
   * `proxy-server-middleware` addon. If this addon doesn't run first, any proxy
   * server will hijack ALL ajax requests and this middleware never gets executed.
   * If this stops working at some point, check that CLI didn't change the name
   * of the proxy server addon:
   * https://github.com/ember-cli/ember-cli/blob/master/lib/tasks/server/middleware/proxy-server/package.json
   * @method serverMiddleware
   * @param {object} startOptions     Set of configurations for ember-cli
   * @param {object} startOptions.app Express server instance run by emer-cli
   */
  serverMiddleware(startOptions) {
    startOptions.app.use('/docs', express.static(path.resolve('docs')));
  },
  /**
   * Define cli commands in return object. Check out http://thejsguy.com/2016/07/10/creating-a-custom-ember-cli-command.html for a
   * nice high level intro to defining cli commands.
   * @method includedCommands
   * @return {Object} Object of command definitions according to some spec somewhere
   */
  includedCommands() {
    return {
      // Defines `ember docs` command that generates docs JSON files
      // TODO: Ability to specify config path
      docs: {
        name: 'docs',
        description: 'Generate Fountainhead documentation data and files',
        run(commandOptions, rawArgs) {
          // TODO: process.env?
          generateDocs({ env: 'development' });
        }
      }
      // TODO: Help and init config commands
    };
  }
};

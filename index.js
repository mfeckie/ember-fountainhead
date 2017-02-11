'use strict';
const path = require('path');
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
    if (config.includeVendorStyles !== false) {
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
    let projectOptions = app.options;

    this.app = app;
    this.env = env;
    this.projectConfiguration = projectConfiguration;
    this.projectOptions = projectOptions;

    // Pulls in dependencies to /vendor, we always run this b/c the entire addon
    // should be blacklisted if not wanted in production
    this._importBrowserDependencies(app);

    // B/c the `preBuild` hook gets called AFTER `treeForPublic`,
    // we need to generate docs in the `included` hook for prod
    // builds. 😑
    if (this.env === 'production') { generateDocs({ env: this.env }); }
  },
  /**
   * Generates fountainhead output before a build is run for live editing.
   * Feature is enabled by default and can be disabled by setting `liveEdit` to
   * `false` in your `fountainhead.js` configuration.
   * @method preBuild
   * @return {undefined}
   */
  preBuild() {
    if (this.env === 'development' && config.liveEdit !== false) {
      generateDocs({ env: this.env });
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
    let trees = [];
    let addonTree = this._super.treeForPublic.apply(this, arguments);

    // In dev docs is included through `serverMiddleware`
    if (this.env !== 'production') { return addonTree; }

    if (addonTree) {
      trees.push(addonTree);
    }

    trees.push(new Funnel('docs', {
      destDir: 'docs'
    }));

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
   * @method serverMiddleware
   * @param {object} startOptions     Set of configurations for ember-cli
   * @param {object} startOptions.app Express server instance run by emer-cli
   */
  serverMiddleware(startOptions) {
    startOptions.app.use('/docs', express.static('docs'));
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

'use strict';
const path = require('path');
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
    const vendor = this.treePaths.vendor;

    // Required to compile templates at runtime
    app.import('bower_components/ember/ember-template-compiler.js');
    // Styles
    app.import(`${vendor}/ember-fountainhead.css`);
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

    this.app = app;
    this.projectConfiguration = this.project.config(process.env.EMBER_ENV);

    // Import browser deps only in development, or also in prod when configured
    if (this.projectConfiguration.environment === 'development' || config.includeForProduction) {
      this._importBrowserDependencies(app);
    }
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
          generateDocs();
        }
      }
      // TODO: Help and init config commands
    };
  }
};

'use strict';
const path = require('path');

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
  }
};

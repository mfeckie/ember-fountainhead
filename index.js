'use strict';
// const path = require('path');
// const Funnel = require('broccoli-funnel');

// let config;
//
// // Configuration is optional, load in a try/catch to handle possible error
// try {
//   config = require(path.resolve('fountainhead.js'));
// } catch(ex) {
//   config = {};
// }

// console.log('FOUNTAINHEAD: ', config);

module.exports = {
  name: 'ember-fountainhead',

  // Methods
  // ---------------------------------------------------------------------------

  _importBrowserDependencies(app) {
    // Required to compile templates at runtime
    app.import('bower_components/ember/ember-template-compiler.js');
  },

  // Addon Hooks
  // ---------------------------------------------------------------------------

  /**
   * Handle importing browser dependencies
   * @method included
   */
  included(app, parentAddon) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    // Import Dependencies
    this._importBrowserDependencies(app);
  }
  /**
   * Handle excluding files in prod build unless configured to include.
   * @method postprocessTree
   */
  // postprocessTree(type, tree) {
  //   // We only want to work with the js files
  //   if (type !== 'js') { return tree; }
  //   // If configured for production build, do less
  //   if (config.includeForProduction) { return tree; }
  //   // Use Funnel to exclude components from build
  //   console.log('new funnel time');
  //   return new Funnel(tree, {
  //     exclude: ['components/fountain-head/**/*'],
  //     description: 'Funnel: Remove Fountainhead components for production build'
  //   });
  // }
};

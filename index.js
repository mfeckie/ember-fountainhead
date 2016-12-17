'use strict';
const path = require('path');

let config;

// Configuration is optional, load in a try/catch to handle possible error
try {
  config = require(path.resolve('fountainhead.js'));
} catch(ex) {
  config = {};
}

console.log('FOUNTAINHEAD: ', config);

module.exports = {
  name: 'ember-fountainhead',

  // Methods
  // ---------------------------------------------------------------------------

  _importBrowserDependencies(app) {
    // const vendor = this.treePaths.vendor;

    // Required to compile templates at runtime
    app.import('bower_components/ember/ember-template-compiler.js');

    // Ember Radical Styles
    // @TODO: Make this configurable
    // Not ready for these styles
    // app.import(path.join(vendor, 'ember-radical', 'styles.css'));
  },

  // Addon Hooks
  // ---------------------------------------------------------------------------

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    // Import Dependencies
    this._importBrowserDependencies(app);
  }

  // treeForVendor: function(vendorTree) {
  //   const trees = [];
  //   let radicalPath = path.dirname(require.resolve('ember-radical')); // MAGIC!
  //
  //   // Pull in existing vendor tree
  //   if (vendorTree) {
  //     trees.push(vendorTree);
  //   }
  //
  //   // Pull in ember-radical style files
  //   trees.push(new Funnel(path.resolve(radicalPath, 'vendor'), {
  //     include: [new RegExp(/\.css$/)]
  //   }));
  //
  //   return mergeTrees(trees);
  // }
};

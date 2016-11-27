/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {

    // Disable JSHint by telling ember-cli-qunit not to use the lintTree
    'ember-cli-qunit': {
      useLintTree: false
    },
    sassOptions: {
      extension: 'scss'
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('vendor/ember-fountainhead.scss');

  // Pull public assets from core into the dummy app
   var publicAssets = new Funnel('public/', {
     srcDir: '/',
     include: ['**/*'],
     destDir: '/'
   });

  return mergeTrees([app.toTree(), publicAssets], { overwrite: true });
};

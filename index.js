/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-fountainhead',

  // Include hook used to pull in template compiler
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (app || parentAddon);

    // Required to compile templates at runtime
    target.import('bower_components/ember/ember-template-compiler.js');
  }

  // This appears to get called when the addon is installed, which is causing
  // some weird behavior right now...
  // includedCommands: function() {
  //   return {
  //     'fountainhead-gendocs': require('./lib/index')
  //   };
  // }
};

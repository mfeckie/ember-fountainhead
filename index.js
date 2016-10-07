/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-fountainhead',

  includedCommands: function() {
    return {
      'fountainhead-gendocs': require('./lib/index')
    };
  }
};

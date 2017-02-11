'use strict';
/**
 * When an addon has an `index.js` file under `/blueprints/ADDON_NAME`, Ember
 * CLI will call the hooks defined there. We use this to handle anything that
 * needs to be updated in the consuming application only once during the addon
 * setup.
 * @module Blueprints
 */

/**
 * Fountainhead's blueprint prints a friendly hello after install.
 * @class EmberFountainhead.Index
 * @constructor
 * @extends EmberCLI.Blueprint
 */
module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
  /**
   * Say a quick hello.
   * @method afterInstall
   */
  afterInstall() {
    console.log('Thanks for installing Ember Fountainhead');
    console.log('Run \'ember docs\' to generate you documentation files');
    // this.project.isEmberCLIAddon()
  }
};

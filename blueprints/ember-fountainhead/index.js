'use strict';
const fs = require('fs');
const path = require('path');
const EOL = require('os').EOL;

/**
 * When an addon has an `index.js` file under `/blueprints/ADDON_NAME`, Ember
 * CLI will call the hooks defined there. We use this to handle anything that
 * needs to be updated in the consuming application only once during the addon
 * setup.
 * @module Blueprints
 */

/**
 * Fountainhead index blueprint is used to update the consuming application's
 * `.gitignore` to ignore the auto generated `vendor/feature-flags.js` file
 * created by `ember-radical`. This file is used to create global variables if
 * the consuming application has turned off JSUglify code stripping.
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

  // Add an ignore for generated vendor feature flags
  /**
   * After install of addon read in consuming application's gitignore. If there
   * isn't an entry for `vendor/feature-flags.js`, use node `fs` to append it.
   * @method afterInstall
   * @return {undefined}
   */
  afterInstall() {
    // Read current gitignore
    let gitignore = fs.readFileSync(path.resolve('.gitignore'), { encoding: 'utf8' });

    // If feature-flags has already been added, do less
    if (gitignore.indexOf('vendor/feature-flags.js') !== -1) { return; }

    // Write new entry to gitignore
    fs.writeFileSync(
      path.resolve('.gitignore'),
      `${gitignore}${EOL}# Auto generated ember-radical feature flags${EOL}vendor/feature-flags.js`,
      { encoding: 'utf8' }
    );
  }
};

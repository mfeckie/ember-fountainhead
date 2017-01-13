'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Parses an ember-cli project's .watchmanconfig file and converts to JSON
 * @class readWatchmanConfig
 * @constructor
 * @param {string} watchmanConfigFilepath The filepath for a .watchmanconfig file
 * @return {Object} The .watchmanconfig file converted to JSON
 */
module.exports = function readWatchmanConfig(watchmanConfigFilepath) {
  let watchmanConfig, watchmanConfigText;

  watchmanConfigFilepath = watchmanConfigFilepath || '.watchmanconfig';

  // Read watchman config file and parse as json
  try {
    watchmanConfigText = fs.readFileSync(path.resolve(watchmanConfigFilepath), { encoding: 'utf8' });
    watchmanConfig = JSON.parse(watchmanConfigText);
  } catch(ex) {
    watchmanConfig = {};
    console.warn('Failed to read file: .watchmanconfig');
  }

  return watchmanConfig;
};

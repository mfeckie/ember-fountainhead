'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Parses an ember-cli project's .watchmanconfig file and converts to JSON
 * @class readWatchmanConfig
 * @constructor
 */
module.exports = function readWatchmanConfig(
  packageJSON,
  watchmanConfigFilepath
) {
  let watchmanConfig, watchmanConfigText;

  watchmanConfigFilepath = watchmanConfigFilepath || '.watchmanconfig';

  // Don't update the watchman config file if we're not in an ember addon
  // project because they don't have test dummy app.
  if (packageJSON.keywords &&
    packageJSON.keywords.indexOf('ember-addon') === -1) {
    return;
  }

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

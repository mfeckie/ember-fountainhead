'use strict';
const fs = require('fs');
const path = require('path');

const dummyPublicPath = 'tests/dummy/public';

let outputJson;

/**
 * Adds a new filepath to a ember addon projects .watchmanconfig file to
 * prevent live reload from going into an infinite loop when docs are built
 * into an addon's dummy/public folder.
 * @class updateWatchmanConfig
 * @constructor
 * @param {Object} watchmanConfig The .watchmanconfig file object
 * @param {String} watchmanConfigFilepath The filepath for a .watchmanconfig file
 * @return {undefined}
 */
module.exports = function updateWatchmanConfig(
  watchmanConfig,
  watchmanConfigFilepath
) {
  watchmanConfigFilepath = watchmanConfigFilepath || '.watchmanconfig';

  // Add the dummy app public path to the ignore_dirs property in the config
  if (watchmanConfig.ignore_dirs &&
      watchmanConfig.ignore_dirs.indexOf(dummyPublicPath) === -1) {
    watchmanConfig.ignore_dirs.push(dummyPublicPath);
  } else {
    return;
  }

  // Save the updated config
  try {
    outputJson = JSON.stringify(watchmanConfig);
    fs.writeFileSync(path.resolve(watchmanConfigFilepath), outputJson, { encoding: 'utf8' });
  } catch(ex) {
    console.log('Failed to write file: .watchmanconfig');
  }
};

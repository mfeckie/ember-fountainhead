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
 */
module.exports = function updateWatchmanConfig(
  packageJSON,
  watchmanConfig,
  watchmanConfigFilepath
) {
  watchmanConfigFilepath = watchmanConfigFilepath || '.watchmanconfig';

  // Don't update the watchman config file if we're not in an ember addon
  // project because they don't have test dummy app.
  if (packageJSON.keywords &&
    packageJSON.keywords.indexOf('ember-addon') === -1) {
    return;
  }

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

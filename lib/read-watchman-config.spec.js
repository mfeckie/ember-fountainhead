const assert = require('assert');
const readWatchmanConfig = require('./read-watchman-config');

describe('read-watchman-config', function() {
  it('reads .watchmanconfig file as JSON', () => {
    let packageJSON, watchmanConfig;

    // Test Addon Scenario
    packageJSON = {
      keywords: ['ember-addon']
    };

    watchmanConfig = readWatchmanConfig(packageJSON, './lib/.watchmanconfig.spec');

    assert.deepEqual(watchmanConfig, { ignore_dirs: ['tmp','dist'] });
  });
});

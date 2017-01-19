const path = require('path');
const fs = require('fs');
const assert = require('assert');
const updateWatchmanConfig = require('./update-watchman-config');

describe('update-watchman-config', function() {

  after(function() {
    // Remove test output file after testing
    try {
      fs.unlinkSync(path.resolve('./lib/.watchmanconfig-after.spec'));
    } catch(ex) {
      console.warn('Failed to delete file: .watchmanconfig');
    }
  });

  it('updates .watchmanconfig file ignore_dirs property with new filepath', () => {
    let watchmanConfig, watchmanConfigText;

    watchmanConfig = {
      ignore_dirs: ['tmp', 'dist']
    };

    updateWatchmanConfig(watchmanConfig, './lib/.watchmanconfig-after.spec');

    try {
      watchmanConfigText = fs.readFileSync(path.resolve('./lib/.watchmanconfig-after.spec'), { encoding: 'utf8' });
      watchmanConfig = JSON.parse(watchmanConfigText);
    } catch(ex) {
      watchmanConfig = {};
      console.warn('Failed to read file: .watchmanconfig');
    }

    assert.deepEqual(watchmanConfig, { ignore_dirs: ['tmp','dist', 'tests/dummy/public'] });
  });
});

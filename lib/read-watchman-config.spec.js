const assert = require('assert');
const readWatchmanConfig = require('./read-watchman-config');

describe('read-watchman-config', function() {
  it('reads .watchmanconfig file as JSON', () => {

    let watchmanConfig = readWatchmanConfig('./lib/.watchmanconfig.spec');

    assert.deepEqual(watchmanConfig, { ignore_dirs: ['tmp','dist'] });
  });
});

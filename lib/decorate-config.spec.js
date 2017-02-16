const path = require('path');
const assert = require('assert');
const decorateConfig = require('./decorate-config');

describe('decorate-config', function() {
  it('sets a default entry when undefined', () => {
    let config = {};
    let packageJSON = {};
    assert.equal(decorateConfig(config, packageJSON).entry, 'app',
      'app is default entry for apps');

    // Test Addon Scenario
    packageJSON = {
      keywords: ['ember-addon']
    };
    assert.equal(decorateConfig(config, packageJSON).entry, 'addon',
      'addon is default entry for addons');
  });

  it('sets a default logging level when undefined', () => {
    assert.equal(decorateConfig({}, {}).quiet, false,
      'errors are logged by default');
  });

  it('sets a default guide array when undefined', () => {
    assert.ok(decorateConfig({}, {}).guides instanceof Array,
      'guides array is created if one is not passed');
  });

  it('sets a default output when undefined', () => {
    let config = {};
    let packageJSON = {};
    let expected = { path: path.resolve('public', 'docs'), filename: 'fountainhead-data.json' };
    let actual = decorateConfig(config, packageJSON).output;

    assert.equal(expected.filename, actual.filename, 'output filename has default');
    assert.equal(expected.filename, actual.filename, 'output path has default');

    // Test Addon Scenario
    packageJSON = {
      keywords: ['ember-addon']
    };
    expected = {
      path: path.resolve('tests', 'dummy', 'public', 'docs'),
      filename: 'fountainhead-data.json'
    };
    actual = decorateConfig(config, packageJSON).output;

    assert.equal(expected.filename, actual.filename, 'output filename has default');
    assert.equal(expected.filename, actual.filename, 'output path has default');
  });

  it('uses packageJSON when possible for setting default configs', () => {
    // These are the configs that can be pulled from a package
    const packageJSON = {
      name: 'Test',
      description: 'test test',
      version: '1.0.0',
      repository: {
        type: 'git',
        url: 'test'
      }
    };
    const actual = decorateConfig({}, packageJSON);

    assert.equal(actual.name, 'Test',
      'decorate config uses packageJSON name as default');
    assert.equal(actual.description, 'test test',
      'decorate config uses packageJSON description as default');
    assert.equal(actual.version, '1.0.0',
      'decorate config uses packageJSON version as default');
    assert.equal(actual.repository, 'test',
      'decorate config uses packageJSON git repo as default');
  });

  it('never overrides defined configurations', () => {
    // Set each of the configs that potentially CAN be pulled from package
    const testPackage = {
      name: 'Test',
      description: 'test test',
      version: '1.0.0',
      repository: {
        type: 'git',
        url: 'test'
      }
    };
    // Use a different value than default to check that defaults never override
    // a specified value
    const expected = {
      name: 'Test Docs',
      description: 'The documentation for Fountainhead Docs... how meta',
      version: '2.0.0',
      logo: 'some-log.svg',
      repository: 'some-github-repo',
      quiet: true,
      whiteListTags: ['passed', 'closure', 'action'],
      guides: ['some-guide.md'],
      entry: ['lib/different'],
      output: {
        filename: 'fountainhead-data-uniuqe.json',
        path: 'public/docs/special'
      }
    };
    const actual = decorateConfig(expected, testPackage);

    assert.deepEqual(expected, actual, 'decorate config does not overwrite specified configs');
  });
});

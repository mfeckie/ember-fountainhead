const path = require('path');
const assert = require('assert');
const decorateConfig = require('./decorate-config');

describe('decorate-config', function() {
  it('sets a default entry when undefined', () => {
    let config = {};
    let packageJSON = {};
    assert.equal(decorateConfig(config, packageJSON).entry, 'app', 'app is default entry for apps');

    // Test Addon Scenario
    packageJSON = {
      keywords: ['ember-addon']
    };
    assert.equal(decorateConfig(config, packageJSON).entry, 'addon', 'addon is default entry for addons');
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
    expected = { path: path.resolve('tests', 'dummy', 'public', 'docs'), filename: 'fountainhead-data.json' };
    actual = decorateConfig(config, packageJSON).output;

    assert.equal(expected.filename, actual.filename, 'output filename has default');
    assert.equal(expected.filename, actual.filename, 'output path has default');
  });

  it('never overrides defined configurations', () => {
    const testPackage = {
      name: 'Test',
      description: 'test test',
      version: '1.0.0',
      repository: {
        type: 'git',
        url: 'test'
      }
    };
    const expected = {
      name: 'Test Docs',
      description: 'The documentation for Fountainhead Docs... how meta',
      version: '2.0.0',
      logo: 'some-log.svg',
      repository: 'some-github-repo',
      entry: ['lib'],
      output: {
        filename: 'fountainhead-data.json',
        path: 'public/docs'
      }
    };
    const actual = decorateConfig(expected, testPackage);

    assert.deepEqual(expected, actual, 'decorate config does not overwrite specified configs');
  });

  it('defaults to packageJSON if configs arent set', () => {
    const packageJSON = {
      name: 'Test',
      description: 'test test',
      version: '1.0.0',
      repository: {
        type: 'git',
        url: 'test'
      }
    };
    const config = {};
    const expected = {
      name: 'Test',
      description: 'test test',
      version: '1.0.0',
      entry: ['app'],
      output: {
        filename: 'fountainhead-data.json',
        path: path.resolve('public', 'docs')
      },
      repository: 'test'
    };
    const actual = decorateConfig(config, packageJSON);

    assert.deepEqual(expected, actual, 'decorate config defaults to packageJSON');
  });
});

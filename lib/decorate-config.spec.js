const path = require('path');
const assert = require('assert');
const decorateConfig = require('./decorate-config');

let config = {};
let packageJSON = {};

describe('decorate-config', function() {
  it('sets a default entry if undefined', () => {
    assert.equal(decorateConfig(config, packageJSON).entry, 'app', 'app is specified as default entry');
  });

  it('sets a default output if undefined', () => {
    const expected = { path: path.resolve('public', 'docs'), filename: 'fountainhead-data.json' };
    const actual = decorateConfig(config, packageJSON).output;

    assert.equal(expected.filename, actual.filename, 'output filename has default');
    assert.equal(expected.filename, actual.filename, 'output path has default');
  });

  it('doesnt override default configurations', () => {
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
      entry: 'lib',
      output: {
        filename: 'fountainhead-data.json',
        path: 'public/docs'
      }
    };
    const actual = decorateConfig(expected, testPackage);

    assert.deepEqual(expected, actual, 'decorate config does not overwrite specified configs');
  });
});

const assert = require('assert');
const generateModules = require('../../lib/data-types/generate-modules');

const rawData =  {
  DocumentationGeneration: {
    name: 'DocumentationGeneration',
    submodules: {},
    elements: {},
    classes: {
      'Some.Class.ClassItem': 1,
      'SomeOther.Class.Description': 1
    },
    fors: {},
    namespaces: {},
    tag: 'module',
    file: 'lib/parse-markdown.js',
    line: 4,
    description: '# An H1\nPlus a paragraph'
  },
  CreateDirs: {
    name: 'CreateDirs',
    submodules: {},
    elements: {},
    classes: {
      'Some.Class.ClassItem': 1,
      'SomeOther.Class.Description': 1
    },
    fors: {},
    namespaces: {},
    tag: 'module',
    file: 'lib/create-dirs.js',
    line: 7,
    description: '`some code`'
  }
};

describe('generate-modules', function() {
  it('returns empty arrays if there is no data', () => {
    const actual = generateModules({});

    assert.ok(Array.isArray(actual.modulesMeta), 'returns empty array even if there is no data');
    assert.ok(Array.isArray(actual.modulesDatas), 'returns empty array even if there is no data');
  });

  it('returns an object with meta and data arrays', () => {
    const actual = generateModules(rawData);

    assert.equal(typeof actual, 'object', 'returns an object');
    assert.ok(Array.isArray(actual.modulesMeta), 'returns an modulesMeta array');
    assert.ok(Array.isArray(actual.modulesDatas), 'returns an modulesDatas array');
  });

  it('returns meta data for modules', () => {
    const expected = [
      { id: 'documentation-generation', name: 'DocumentationGeneration', type: 'modules' },
      { id: 'create-dirs', name: 'CreateDirs', type: 'modules' }
    ];
    const actual = generateModules(rawData).modulesMeta;

    assert.deepEqual(actual, expected, 'appropriate meta for modules is returned as modulesMeta');
  });

  it('returns decorated data objects for modules', () => {
    /*
     * Testing for current decoration whcih includes:
     * - creating an array of data objects from object keys
     * - Parsing markdown descriptions
     */
    const actual = generateModules(rawData).modulesDatas;

    assert.equal(actual.length, 2, 'converts each object entry to an array entry');
    assert.equal(actual[0].description, '<h1>An H1</h1>\n<p>Plus a paragraph</p>\n',
      'parses module markdown descriptions to html');
  });
});

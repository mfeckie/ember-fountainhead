const assert = require('assert');
const generateClasses = require('../../lib/data-types/generate-classes');

const rawClasses = {
  someClass: {
    name: 'someClass',
    shortname: 'someClass',
    classitems: [],
    description: '<h1>Some HTML</h1>',
    file: 'some/file/path.js',
    extends: 'Ember.Component'
  },
  anotherClass: {
    name: 'anotherClass',
    shortname: 'anotherClass',
    classitems: [],
    description: '<p>Some HTML</p>',
    file: 'another/file/path.js',
    extends: 'Ember.Component'
  }
};

const rawClassItems = [
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'some `code`',
    itemtype: 'property',
    name: 'itemA',
    type: '{Object}',
    class: 'someClass'
  },
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'some `code`',
    itemtype: 'method',
    name: 'itemB',
    type: '{Object}',
    class: 'someClass'
  },
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'some `code`',
    itemtype: 'event',
    name: 'itemC',
    type: '{Object}',
    class: 'anotherClass'
  }
];

describe('generate-classes', function() {
  it('returns empty arrays if there is no data', () => {
    const actual = generateClasses({}, {});

    assert.ok(Array.isArray(actual.classesMeta), 'returns empty array even if there is no data');
    assert.ok(Array.isArray(actual.classesDatas), 'returns empty array even if there is no data');
  });

  it('it adds all class items to their parent class', () => {
    const actual = generateClasses(rawClasses, rawClassItems);
    const someClass = actual.classesDatas.filter(klass => klass.name === 'someClass')[0];
    const anotherClass = actual.classesDatas.filter(klass => klass.name === 'anotherClass')[0];

    assert.ok(Array.isArray(actual.classesMeta), 'returns array of class meta');
    assert.ok(Array.isArray(actual.classesDatas), 'returns array of class objects');

    assert.ok(someClass, 'returns class someClass in results');
    assert.ok(anotherClass, 'returns class anotherClass in results');

    assert.equal(someClass.classitems.length, 2, 'all classitems for someClass are attached');
    assert.equal(anotherClass.classitems.length, 1, 'all classitems for anotherClass are attached');

    assert.ok(Array.isArray(someClass.methods), 'methods array is added to classes');
    assert.ok(Array.isArray(someClass.properties), 'properties array is added to classes');
    assert.ok(Array.isArray(someClass.events), 'events array is added to classes');

    assert.equal(someClass.methods.length, 1, 'method class item was attached to correct class');
    assert.equal(someClass.properties.length, 1, 'properties class item was attached to correct class');
    assert.equal(someClass.events.length, 0, 'no event class items returns empty array for class');

    assert.equal(anotherClass.methods.length, 0, 'no method class items returns empty array for class');
    assert.equal(anotherClass.properties.length, 0, 'no property class items returns empty array for class');
    assert.equal(anotherClass.events.length, 1, 'events class item was attached to correct class');
  });
});

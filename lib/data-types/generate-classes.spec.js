const assert = require('assert');
const generateClasses = require('./generate-classes');

const classes = {
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
  },
  'lonely.Class': {
    name: 'lonely.Class',
    shortname: 'lonely.Class',
    classitems: [],
    description: '<p>Some HTML</p>',
    file: 'another/lonely/path.js',
    extends: 'Ember.Component'
  }
};

const classItems = [
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'some `code`',
    itemtype: 'method',
    name: 'itemC',
    type: '{Object}',
    class: 'someClass'
  },
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'some `code`',
    itemtype: 'property',
    name: 'itemB',
    type: '{Object}',
    class: 'someClass'
  },
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'This itemB should be used b/c its declared last',
    itemtype: 'property',
    name: 'itemB',
    type: '{Object}',
    class: 'someClass'
  },
  {
    file: 'some/file/path.js',
    line: 15,
    description: 'Should end in the beginning',
    itemtype: 'property',
    name: 'itemA',
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
    const actual = generateClasses({}, []);

    assert.ok(Array.isArray(actual.classesMeta), 'returns empty array even if there is no data');
    assert.ok(Array.isArray(actual.classesDatas), 'returns empty array even if there is no data');
  });

  it('returns meta data for classes', () => {
    const testClasses = JSON.parse(JSON.stringify(classes));
    const testClassItems = JSON.parse(JSON.stringify(classItems));
    const expected = [
      { name: 'anotherClass', type: 'classes' },
      { name: 'lonely.Class', type: 'classes' },
      { name: 'someClass', type: 'classes' }
    ];
    const actual = generateClasses(testClasses, testClassItems).classesMeta;

    assert.deepEqual(actual, expected, 'appropriate meta for modules is returned as modulesMeta');
  });

  it('it adds all class items to their parent class', () => {
    const testClasses = JSON.parse(JSON.stringify(classes));
    const testClassItems = JSON.parse(JSON.stringify(classItems));
    const actual = generateClasses(testClasses, testClassItems);
    const someClass = actual.classesDatas.filter(klass => klass.name === 'someClass')[0];
    const anotherClass = actual.classesDatas.filter(klass => klass.name === 'anotherClass')[0];
    const lonelyClass = actual.classesDatas.filter(klass => klass.name === 'lonely.Class')[0];

    assert.ok(Array.isArray(actual.classesMeta), 'returns array of class meta');
    assert.ok(Array.isArray(actual.classesDatas), 'returns array of class objects');

    assert.ok(someClass, 'returns class someClass in results');
    assert.ok(anotherClass, 'returns class anotherClass in results');
    assert.ok(lonelyClass, 'returns class lonely.Class in results');

    assert.equal(someClass.classitems.length, 3, 'someClass should have only 3 classes after deduping');
    assert.equal(anotherClass.classitems.length, 1, 'all classitems for anotherClass are attached');
    assert.equal(lonelyClass.classitems.length, 0, 'lonelyClass has no class items');

    assert.ok(Array.isArray(someClass.method), 'method array is added to classes');
    assert.ok(Array.isArray(someClass.property), 'property array is added to classes');
    assert.ok(Array.isArray(someClass.event), 'event array is added to classes');

    assert.equal(someClass.method.length, 1, 'method class item was attached to correct class');
    assert.equal(someClass.property.length, 2, 'property class item was attached to correct class');
    assert.equal(someClass.event.length, 0, 'no event class items returns empty array for class');

    assert.equal(someClass.property[0].name, 'itemA', 'class items are sorted alphabetically');
    assert.equal(someClass.property[1].description,
      '<p>This itemB should be used b/c its declared last</p>\n',
      'duplicate itemB should pick up last declared item');

    assert.equal(anotherClass.method.length, 0, 'no method class items returns empty array for class');
    assert.equal(anotherClass.property.length, 0, 'no property class items returns empty array for class');
    assert.equal(anotherClass.event.length, 1, 'events class item was attached to correct class');
  });
});

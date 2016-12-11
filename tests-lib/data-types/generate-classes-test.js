const assert = require('assert');
const generateClasses = require('../../lib/data-types/generate-classes');

describe('generate-classes', function() {
  it('returns empty arrays if there is no data', () => {
    const actual = generateClasses({});

    assert.ok(Array.isArray(actual.classesMeta), 'returns empty array even if there is no data');
    assert.ok(Array.isArray(actual.classesDatas), 'returns empty array even if there is no data');
  });

  // TODO: I need some tests!
});

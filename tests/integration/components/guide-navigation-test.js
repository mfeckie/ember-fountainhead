import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import meta from '../../fixtures/meta';

moduleForComponent('guide-navigation', 'Integration | Component | guide navigation', {
  integration: true
});

test('it renders links for each guide item', function(assert) {
  this.set('meta', meta);
  this.render(hbs`{{guide-navigation meta=meta}}`);

  // Meta fixture has 3 guide elements of 'Test 1', 'Test 2', 'Test 3'
  // Guide should also have links for Home and API
  const anchors = this.$('a');
  assert.equal(anchors.length, 5, 'renders link for each guide');
  assert.ok(this.$(anchors[1]).text().includes('Test 1'),
    'Guide linkLabel is rendered as anchor text');
});

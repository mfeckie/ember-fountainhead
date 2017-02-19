import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('api-navigation/search-bar', 'Integration | Component | api navigation/search bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{api-navigation/search-bar}}`);

  assert.equal(this.$().text().trim(), '');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/sidebar', 'Integration | Component | sidebar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/sidebar}}`);

  assert.equal(this.$().text().trim(), 'Search');
});

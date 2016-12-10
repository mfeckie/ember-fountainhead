import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/sidebar/item-group', 'Integration | Component | sidebar/item group', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/sidebar/item-group}}`);

  assert.equal(this.$().text().trim(), 'Give me some items to display!');
});

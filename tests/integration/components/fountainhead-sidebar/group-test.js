import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/sidebar/item-group', 'Integration | Component | fountain head/docs/sidebar/item group', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-sidebar/group}}`);

  assert.equal(this.$().text().trim(), 'Give me some items to display!');
});

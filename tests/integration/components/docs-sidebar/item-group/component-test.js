import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-sidebar/item-group', 'Integration | Component | docs sidebar/item group', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{docs-sidebar/item-group}}`);

  assert.equal(this.$().text().trim(), 'Give me some items to display!');
});

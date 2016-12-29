import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/class/header', 'Integration | Component | fountain head/docs/class/header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/docs/class/header}}`);

  assert.ok(this.$().text().includes('[source]'));
});

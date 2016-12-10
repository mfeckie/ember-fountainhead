import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/class/header', 'Integration | Component | class/header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/class/header}}`);

  assert.ok(this.$().text().includes('[source]'));
});

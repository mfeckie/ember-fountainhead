import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-class/header', 'Integration | Component | fountainhead class//header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-class/header}}`);

  assert.ok(this.$().text().includes('[source]'));
});

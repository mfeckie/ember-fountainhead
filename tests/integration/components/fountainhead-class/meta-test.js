import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/class/meta', 'Integration | Component | foutnain head/docs/class/meta', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-class/meta}}`);

  assert.equal(this.$().text().trim(), '');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/class/meta', 'Integration | Component | class/meta', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/class/meta}}`);

  assert.equal(this.$().text().trim(), '');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/class/class-item', 'Integration | Component | class/class item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/class/class-item}}`);

  assert.equal(this.$().text().trim(), '');
});

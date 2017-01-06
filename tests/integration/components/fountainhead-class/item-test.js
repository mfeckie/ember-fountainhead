import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/class/class-item', 'Integration | Component | fountain head/docs/class/class item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-class/item}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ''), '()');
});

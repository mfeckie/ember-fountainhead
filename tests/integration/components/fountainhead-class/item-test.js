import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-class/item', 'Integration | Component | fountainhead class/item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-class/item}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ''), '()');
});

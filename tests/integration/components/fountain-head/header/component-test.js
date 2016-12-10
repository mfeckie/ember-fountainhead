import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/header', 'Integration | Component | header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/header}}`);

  assert.equal(this.$().text().trim(), '');
});

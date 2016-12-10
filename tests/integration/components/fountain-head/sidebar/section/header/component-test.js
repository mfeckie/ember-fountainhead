import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-sidebar/section/header', 'Integration | Component | sidebar/section/header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/sidebar/section/header}}`);

  assert.equal(this.$().text().trim(), '');
});

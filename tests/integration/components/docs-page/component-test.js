import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-page', 'Integration | Component | docs page', {
  integration: true
});

const docClass = {
  value: {}
};

test('it renders', function(assert) {
  // Docs page REQUIRES content
  this.set('content', docClass);

  this.render(hbs`{{docs-page content=content}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '), '[source] Defined In: undefined:undefined');
});

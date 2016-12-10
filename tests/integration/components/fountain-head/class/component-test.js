import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/class', 'Integration | Component | class', {
  integration: true
});

const docClass = {
  value: {}
};

test('it renders', function(assert) {
  // Docs page REQUIRES content
  this.set('content', docClass);

  this.render(hbs`{{fountain-head/class class=content}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '), 'Class [source]');
});

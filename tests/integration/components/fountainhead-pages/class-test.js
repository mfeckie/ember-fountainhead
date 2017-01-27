import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-pages/class', 'Integration | Component | fountainhead pages/class', {
  integration: true
});

const docClass = {
  value: {}
};

test('it renders', function(assert) {
  // Docs page REQUIRES content
  this.set('content', docClass);

  this.render(hbs`{{fountainhead-pages/class class=content}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '), 'Class [source]');
});

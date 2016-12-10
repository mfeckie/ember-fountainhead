import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/sidebar/search-bar', 'Integration | Component | sidebar/search bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/sidebar/search-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fountain-head/sidebar/search-bar}}
      template block text
    {{/fountain-head/sidebar/search-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

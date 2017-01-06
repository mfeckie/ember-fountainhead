import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/sidebar/search-bar', 'Integration | Component | fountain head/docs/sidebar/search bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-sidebar/search-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fountainhead-sidebar/search-bar}}
      template block text
    {{/fountainhead-sidebar/search-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

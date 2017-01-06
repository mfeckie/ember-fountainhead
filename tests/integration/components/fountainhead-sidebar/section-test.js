import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/sidebar/section', 'Integration | Component | fountain head/docs/sidebar/section', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-sidebar/section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fountainhead-sidebar/section}}
      template block text
    {{/fountainhead-sidebar/section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

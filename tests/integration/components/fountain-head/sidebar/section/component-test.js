import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/sidebar/section', 'Integration | Component | sidebar/section', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/sidebar/section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fountain-head/sidebar/section}}
      template block text
    {{/fountain-head/sidebar/section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

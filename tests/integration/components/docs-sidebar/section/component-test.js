import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-sidebar/section', 'Integration | Component | docs sidebar/section', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{docs-sidebar/section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#docs-sidebar/section}}
      template block text
    {{/docs-sidebar/section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

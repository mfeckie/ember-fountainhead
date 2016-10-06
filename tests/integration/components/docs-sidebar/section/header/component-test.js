import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-sidebar/section/header', 'Integration | Component | docs sidebar/section/header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{docs-sidebar/section/header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#docs-sidebar/section/header}}
      template block text
    {{/docs-sidebar/section/header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

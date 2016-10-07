import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('real-boy-component', 'Integration | Component | real boy component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{real-boy-component}}`);

  assert.equal(this.$().text().trim(), 'I\'M A REAL BOY!!');

  // Template block usage:
  this.render(hbs`
    {{#real-boy-component}}
      template block text
    {{/real-boy-component}}
  `);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '), 'I\'M A REAL BOY!! template block text');
});

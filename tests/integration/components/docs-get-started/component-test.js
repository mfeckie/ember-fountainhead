import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-get-started', 'Integration | Component | docs get started', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{docs-get-started}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '),
    'Welcome to Ember Fountainhead!\nIt looks like you haven\'t generated your app\'s documentation yet. To get started, run ember fountainhead-gendocs.');
});

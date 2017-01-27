import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-welcome', 'Integration | Component | fountainhead welcome', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-welcome}}`);

  assert.ok(this.$().text().includes('Browse to a module or class using the sidebar'),
    'renders included welcome message');
});

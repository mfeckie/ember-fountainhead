import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-welcome', 'Integration | Component | docs welcome', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{docs-welcome}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '),
    'Welcome Browse to a module or class using the sidebar to view its API documentation. Keyboard Shortcuts Press s to focus the API search box. Use Up and Down to navigate search results. Use Enter to select a search result.');
});

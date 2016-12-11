import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/landing/welcome-message', 'Integration | Component | landing/welcome message', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/landing/welcome-message}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '),
    'Welcome Browse to a module or class using the sidebar to view its API documentation. Keyboard Shortcuts Press s to focus the API search box. Use Up and Down to navigate search results. Use Enter to select a search result.');
});
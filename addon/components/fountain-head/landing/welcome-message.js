import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Welcome message displayed when there are documentation classes available to
 * load
 * @class Landing.WelcomeMessage
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  layout: hbs`
    <h1>Welcome</h1>

    <p>Browse to a module or class using the sidebar to view its API documentation.</p>

    <h4>Keyboard Shortcuts</h4>
    <ul>
      <li>Press s to focus the API search box.</li>
      <li>Use Up and Down to navigate search results.</li>
      <li>Use Enter to select a search result.</li>
    </ul>
  `
});

import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Component determines the 'Welcome' message displayed to consumers that have
 * successfuly generated documentation data.
 * @class FountainheadWelcome
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class='fh-welcome' data-test='welcome-message'>
      <h1 class="text-center">Welcome</h1>
      <p>Browse to a module or class using the sidebar to view its API documentation.</p>
      <h4>Keyboard Shortcuts</h4>
      <ul>
        <li>Press s to focus the API search box.</li>
        <li>Use Up and Down to navigate search results.</li>
        <li>Use Enter to select a search result.</li>
      </ul>
    </div>
  `
});

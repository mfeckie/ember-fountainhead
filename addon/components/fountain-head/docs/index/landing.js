import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * The landing message is rendered on the `/docs/index` route and shows either a
 * helpful getting started or docs related message depending on if the user has
 * generated docs or not. We know by passing in the meta information in the
 * `/docs/index` template
 * @class FountainHead.Header
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-landing']
   */
  classNames: ['fh-landing'],

  layout: hbs`
    {{! --------------------------------------------------------------------- }}
    {{! Addon Docs Landing Page
    {{! If meta isn't found then we know the user hasn't run the doc scripts yet.
    {{! --------------------------------------------------------------------- }}
    {{#if meta}}
      <h1 class="align-center">Welcome</h1>
      <p>Browse to a module or class using the sidebar to view its API documentation.</p>
      <h4>Keyboard Shortcuts</h4>
      <ul>
        <li>Press s to focus the API search box.</li>
        <li>Use Up and Down to navigate search results.</li>
        <li>Use Enter to select a search result.</li>
      </ul>
    {{else}}
      <h1>Welcome to Ember Fountainhead!</h1>
      <p>It looks like you haven't generated your app's documentation yet. To get started, run <code>ember fountainhead-gendocs</code>.</p>
    {{/if}}
  `
});

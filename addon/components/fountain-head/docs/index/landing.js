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
      <p>It looks like you haven't generated your app's documentation yet. There are two ways to get stated.</p>
      <h4>Call Ember Fountainhead Directly</h4>
      <p>You can directly call the Ember Fountainhead entry through your
        <code>node_modules/bin</code> directory by executing
        <code>./node_modules/bin/ember-fountainhead</code> from the command line
      </p>

      <h4><strong>[Preferred]</strong> Create a <code>package.json</code> Script</h4>
      <p>Instead of directly calling the <code>ember-fountainhead</code> command file by path, we can use a <code>package.json</code> script entry (which automatically checks for a command in the <code>node_modules/bin</code> directory first.</p>

<pre>
<code>// package.json
{
  "scripts": {
    // your scripts
    "docs": "ember-fountainhead"
  }
}</code>
</pre>

      <p>After adding the docs key to your scripts, you can generate docs by running:<br/><code>npm run docs</code></p>
    {{/if}}
  `
});

import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Component determines the 'Getting Started' message displayed to consumers
 * that don't have documentation meta available.
 * @class FountainheadGetStarted
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-get-started']
   */
  classNames: ['fh-get-started'],

 // Layout
 // ---------------------------------------------------------------------------
  layout: hbs`
    <h1>Welcome to Ember Fountainhead!</h1>
    <p>It looks like you haven't generated your app's documentation yet. You can
    run <code>ember docs</code> to generate you app's documentation data.</p>
  `
});

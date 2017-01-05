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
   * @default ['fh-welcome']
   */
  classNames: ['fh-welcome'],

  layout: hbs`
    <h1>Welcome to Ember Fountainhead!</h1>
    <p>It looks like you haven't generated your app's documentation yet. You can
    run <code>ember docs</code> to generate you app's documentation data.</p>
  `
});

import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * How to get started message shown when there are no documentation classes
 * available.
 * @class Landing.GetStarted
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  layout: hbs`
    <h1>Welcome to Ember Fountainhead!</h1>
    <p>It looks like you haven't generated your app's documentation yet. To get started, run <code>ember fountainhead-gendocs</code>.</p>
  `
});

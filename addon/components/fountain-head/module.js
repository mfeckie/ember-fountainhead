import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/doc/module` page component
 * There's nothing here yet.
 * @class FountainHead.Module
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  /**
   * Module model content
   * @property module
   * @type {string}
   * @default ''
   */
  module: '',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <h1>Module</h1>
  `
});

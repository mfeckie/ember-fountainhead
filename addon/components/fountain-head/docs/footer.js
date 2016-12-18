import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * @class FountainHead.Footer
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-footer']
   */
  classNames: ['fh-footer'],
  /**
   * @property tagName
   * @type {string}
   * @default 'footer'
   */
  tagName: 'footer',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <p class="align-right">Made with love by HealthSparq Open Source Labs</p>
  `
});

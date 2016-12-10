import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Addon Footer
 *
 * @class FountainHead.Footer
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * Bind `docs-footer` class
   * @property classNames
   * @type {Array}
   */
  classNames: ['docs-footer'],
  /**
   * Use `<footer>` element
   * @property tagName
   * @type {string}
   */
  tagName: 'footer',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="copyright align-right">Made with love by HealthSparq Open Source Labs</div>
  `
});

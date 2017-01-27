/* Source: https://github.com/healthsparq/ember-radical/blob/master/addon/components/core-button/component.js */

import Component from 'ember-component';
import computed from 'ember-computed';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead button component pulled from `ember-radical` addon.
 * TODO: One day use nested addons, _trepidation_
 *
 * Here, this is a button:
 *
 * ```glimmer
 * {{#fountainhead-button}}Check me out{{/fountainhead-button}}
 * ```
 *
 * This button will not get auto-rendered, as it is just an example:
 *
 * ```handlebars
 * {{#fountainhead-button}}NO DICE, HOMBRE{{/fountainhead-button}}
 * ```
 *
 * @class FountainheadButton
 * @constructor
 * @extends Ember.Component
 */

export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Pass a brand to have `btn-${brand}` class applied
   * @property brand
   * @type {string}
   * @default ''
   */
  brand: '',
  /**
   * Pass true to create a button that looks and behaves like a link. This is
   * useful for creating accessible interaction targets.
   * @property link
   * @type {Boolean}
   * @default false
   */
  link: false,

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * Computed css class bound to component. Handled by component to allow for
   * flexibility in future updates to branding class names
   * @property brandClass
   * @type {string}
   * @param 'brand'
   */
  brandClass: computed('brand', function() {
    return this.get('brand') ? `btn-${this.get('brand')}` : null;
  }),

  // Ember Props
  // ---------------------------------------------------------------------------

  /**
   * ALLLLLLLLLLL the attributes you might need.
   * NOTE: `role` should not be bound here. You can set the role of a button
   * by passing an [ariaRole](http://emberjs.com/api/classes/Ember.Component.html#property_ariaRole) prop.
   * @property attributeBindings
   * @type {Array}
   */
  attributeBindings: [
    'aria-controls',
    'aria-describedby',
    'aria-expanded',
    'aria-hidden',
    'aria-label',
    'aria-labelledby',
    'data-test',
    'disabled',
    'type'
  ],
  /**
   * Bind standard core classname for component: `core-button`
   * @property classNames
   * @type {Array}
   */
  classNames: [
    'core-button',
    'btn'
  ],
  /**
   * Handle binding brand and link related css class names
   * @property classNameBindings
   * @type {Array}
   */
  classNameBindings: [
    'brandClass',
    'link:btn-link'
  ],
  /**
   * Button DOM element
   * @property tagName
   * @type {string}
   * @default 'button'
   */
  tagName: 'button',
  /**
   * Include type button for usability.
   * @property type
   * @type {string}
   * @default 'button'
   */
  type: 'button',

  // Events
  // ---------------------------------------------------------------------------

  /**
   * The `mouseDown` event is used for some utility/housekeeping methods because
   * we use the `click` event to pass in actions.
   *
   * Handle setting the outline on this element to `none` because we know this
   * event is only triggered by actual mouse clicks. Keyboard events don't trigger
   * it, which is a convenient way to know we're good to hide the outline and
   * maintain usability for keyboard users. A++ accessibility!
   *
   * Handle checking for a tagging category and if one exists, fire a tag.
   *
   * If you need to override this event, be sure to call `this._super();`
   * @event mouseDown
   * @return {undefined}
   */
  mouseDown() {
    // Hide outline b/c this was a legit mouse click
    // On blur, remove outline style in case the user switches to keyboard
    this.$().css({ outline: 'none' });
    this.$().on('blur', () => {
      // If this button instance is destroying/destroyed, don't bother
      // (This is an issue with instances of `{{fountainhead-alert}}`)
      if (this.get('isDestroying') || this.get('isDestroyed')) { return; }
      this.$().off('blur').css('outline', '');
    });
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`{{{yield}}}`
});

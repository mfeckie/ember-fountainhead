import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

const { Component, computed } = Ember;

/**
 * Multi-use alerts for in-page error messaging, pop-up alerts, notifications,
 * and more. Foundation-free™ since 2015.
 *
 * #### Sample Usage:
 *
 * You can place just about any content you like inside of a `{{core-alert}}`.
 *
 * ```handlebars
 * {{#uicore-alert brand="warning" icon="warning-sign" size="small"}}
 *   <p>You have smelly body parts? Smelly under your arms? In the armpits? Just… just put some vinegar on it! Why didn’t you think of that?</p>
 *   <p>If you’re raking the leaves and it gets all over your driveway, just hose it off dummy.</p>
 * {{/uicore-alert}}
 * ```
 *
 * #### Configuration Properties
 *
 * _See individual properties below for details. Options include:_
 *
 * - `canDismiss`: Pass false to make alert impossible to get rid of
 * - `brand`: Pass brand
 * - `icon`: Pass an id for `{{core-svg}}` to render an icon
 * - `size`: Adds a class to root element for font size changes. **DEPRECATED** Values include:
 *    - `small`
 *    - `tiny`
 *
 * @class Component.CoreAlert
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Specify brand, component handles assigning correct css class
   * @property brand
   * @type {string}
   */
  brand: null,
  /**
   * Whether this alert can be dismissed via the close button in the upper right
   * corner. Defaults to true. Adds an interactive close button to the alert.
   *
   * **Usage:**
   * Override by passing `false` into this param in your handlebars template:
   *
   * ```handlebars
   * {{#core-alert canDismiss=false}}
   *   {{! Standard template content goes here }}
   * {{/core-alert}}
   * ```
   *
   * @property canDismiss
   * @type {boolean}
   * @default true
   * @public
   */
  canDismiss: true,
  /**
   * Adds an icon to the left side of the component, and in doing so widens the
   * colored strip. Pass the id of an svg for the `core-svg` component to render
   *
   * Adds a class of `alert-icon` to the root element of the component, and an
   * accompanying class matching the name of the icon you specified.
   *
   * **Usage:**
   * Pass a value into this param in your handlebars template:
   *
   * ```handlebars
   * {{#core-alert icon='info-ital'}}
   *   {{! Standard template content goes here }}
   * {{/core-alert}}
   * ```
   *
   * @property iconName
   * @type {string}
   * @default ''
   * @public
   */
  iconName: '',
  /**
   * Contains optional action that is executed when the UIAlert is dismissed.
   * This action will be executed before the alert is destroyed.
   * @property method
   * @type {function}
   * @default function() {}
   */
  onDismiss: function() {},
  /**
   * Affects the font size of the content in the alert. Accepts a string
   * representing one of the following values:
   *
   * - `'small'`
   * - `'tiny'`
   *
   * Adds a class to the root element of the component corresponding to the
   * value you specified.
   *
   * **Usage:**
   * Pass a value into this param in your handlebars template:
   *
   * ```handlebars
   * {{#core-alert size='small'}}
   *   {{! Standard template content goes here }}
   * {{/core-alert}}
   * ```
   *
   * @property size
   * @type {string}
   * @default ''
   * @deprecated
   * @public
   */
  size: '',

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Computed css class bound to component. Handled by component to allow for
   * flexibility in future updates to branding class names
   * @property brandClass
   * @type {string}
   * @param 'brand'
   */
  brandClass: computed('brand', function() { return this.get('brand') ? `${this.get('brand')}-bg`: null; }),
  /**
   * Static class names applied to the component that must always exist. This
   * really should not need to be overridden or extended.
   *
   * DEPRECATED: 'uicore-alert'
   *
   * @property classNames
   * @type {Array}
   * @private
   */
  classNames: ['core-alert'],
  /**
   * A set of dynamic classes whose output is bound to the associated values
   * on the component.
   *
   * @property classNameBindings
   * @type {Array}
   * @private
   */
  classNameBindings: [
    'iconName:alert-icon',
    'brand:branded',
    'size'],
  /**
   * Reference to the component's template file in the add-ons folder
   *
   * @property layout
   * @type {Object}
   * @private
   */
  layout: hbs`
    {{#if brand}}
      <div class="brand-chip {{brandClass}}"></div>
    {{/if}}
    {{#if iconName}}
      {{core-svg iconName=iconName classNames="alert-icon"}}
    {{/if}}
    <div class="alert-content-container">
      {{yield}}
    </div>
    {{#if canDismiss}}
      {{#core-button click=(action "dismiss") classNames="alert-close basic-b" aria-label="close"}}&times;{{/core-button}}
    {{/if}}
  `,

  // Methods
  // ---------------------------------------------------------------------------

  /**
   * Override of the click event to stop propagating events behind the uicore alert.
   * Necessary for uicore-alerts inside of elements that have actions already
   * defined to a click event.
   * (eg. dropdowns that close when you click anywhere in the viewport)
   *
   * @method click
   * @param  {object} event        The type of event
   * @return {undefined}
   */
  click(evt) {
    // @TODO: Is this really needed?
    event.stopPropagation();
  },
  /**
   * Allows for quick and easy dismissal of the alert. The alert is faded from
   * view, then totally removed from the DOM and the component instance is
   * destroyed.
   *
   * @method _selfDestruct
   * @return {undefined}
   */
  _selfDestruct() {

    // Fade the element out
    this.$().animate({ opacity: 0}, 300, () => {
      // When the animation is complete, destroy the component
      this.destroy();
    });
  },

  // Actions
  // ---------------------------------------------------------------------------
  /**
   * Actions hash
   * @property actions
   * @type {Object}
   */
  actions: {
    /**
     * A proxy action for the selfDestruct method
     *
     * @method dismiss
     * @return {undefined}
     */
    dismiss() {
      // check if a dismiss action was passed into the component
      this.onDismiss();
      // Internal method to handle all the destruction
      this._selfDestruct();
    }
  }
});

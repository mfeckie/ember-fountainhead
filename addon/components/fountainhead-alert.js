import Component from 'ember-component';
import computed from 'ember-computed';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead Alert Component copied from Radical
 * @class FountainheadAlert
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Specify brand, component handles assigning correct css class
   * @property brand
   * @default ''
   * @type {string}
   * @public
   */
  brand: '',
  /**
   * Whether this alert can be dismissed via the close button in the upper right
   * corner. Defaults to true. Adds an interactive close button to the alert.
   *
   * **Usage:**
   * Override by passing `false` into this param in your handlebars template:
   *
   * ```handlebars
   * {{#fountainhead-alert canDismiss=false}}
   *   {{! Standard template content goes here }}
   * {{/fountainhead-alert}}
   * ```
   *
   * @property canDismiss
   * @type {boolean}
   * @default true
   * @public
   */
  canDismiss: true,
  /**
   * Contains optional action that is executed when the alert is dismissed.
   * This action will be executed before the alert is destroyed.
   * @property onDismiss
   * @type {function}
   * @default () => {}
   * @public
   */
  onDismiss: () => {},

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Computed css class bound to component. Handled by component to allow for
   * flexibility in future updates to branding class names
   * @property brandClass
   * @type {string}
   * @param 'brand'
   * @private
   */
  brandClass: computed('brand', function() {
    return this.get('brand') ? `alert-${this.get('brand')}` : null;
  }),

  // Ember Properties
  // ---------------------------------------------------------------------------
  /**
   * @property attributeBindings
   * @type {Array}
   * @default ['role']
   */
  attributeBindings: ['role'],
  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-alert']
   */
  classNames: ['fh-alert'],
  /**
   * @property classNameBindings
   * @type {Array}
   * @default ['brandClass', 'canDismiss:alert-dismissible']
   */
  classNameBindings: [
    'brandClass',
    'canDismiss:alert-dismissible'
  ],
  /**
   * A++ accessibility. Tells a screen this component is an alert.
   * @property role
   * @type {string}
   * @default 'alert'
   */
  role: 'alert',

  // Methods
  // ---------------------------------------------------------------------------
  /**
   * Allows for quick and easy dismissal of the alert. The alert is faded from
   * view, then totally removed from the DOM and the component instance is
   * destroyed.
   * @method _selfDestruct
   * @return {undefined}
   */
  _selfDestruct() {
    // Fade the element out
    this.$().animate({ opacity: 0 }, 300, () => {
      // When the animation is complete, destroy the component
      if (!this.get('isDestroyed')) {
        this.$().remove();
      }
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
     * @method dismiss
     * @return {undefined}
     */
    dismiss() {
      // check if a dismiss action was passed into the component
      this.onDismiss();
      // Internal method to handle all the destruction
      this._selfDestruct();
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{yield}}

    {{#if canDismiss}}
      {{#fountainhead-button
        class="close"
        click=(action "dismiss")
        link=true
        aria-label="close"}}
        {{fountainhead-svg svgId="x"}}
      {{/fountainhead-button}}
    {{/if}}
  `
});

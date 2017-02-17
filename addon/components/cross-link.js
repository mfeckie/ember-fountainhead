import Component from 'ember-component';
import getOwner from 'ember-owner/get';
import hbs from 'htmlbars-inline-precompile';

/**
 * The `{{cross-link}}` component lets you easily reference other classes,
 * modules, properties and methods in your documentation.
 *
 * #### Example
 * ```glimmer
 * Check out {{cross-link class='FountainheadClass.Meta' item='access'}}
 * ```
 * When used as an inline component, the rendered link-to's text will be the
 * ID of the module or class along with any passed query params. If you want
 * different link text you can use the component in block form.
 *
 * ```glimmer
 * {{#cross-link class='FountainheadClass.Meta' item='access'}}
 *   Check out the FountainheadClass.Meta components access property
 * {{/cross-link}}
 * ```
 *
 * #### Positional Params
 * The component can also be used with positional parameters when referencing a
 * property or method on the same class.
 * ```glimmer
 * Check out this components init method: {{cross-link 'init'}}
 * ```
 *
 * #### Alternate Invocation
 * For _maximum_ terseness Fountainhead also exports the cross link component as
 * `{{c-l}}`
 * ```glimmer
 * Check out this components init method: {{c-l 'init'}}
 * ```
 *
 * Property | Description
 * --- | ---
 * `class` | Documentation class to link to
 * `module` | Documentation module to link to
 * `item` | Specific documentation item to link to, appended as a query param
 *
 * {{! --------------------------------------------------------------------- }}
 * {{! TEST CASES: B/c Ember Integration Tests + link-to === 💣              }}
 * {{! Uncomment cases below and check in browser                            }}
 * {{! --------------------------------------------------------------------- }}
 * {{! Postional Params }}
 * {{!-- {{c-l 'init'}}<br> --}}
 * {{!-- {{#c-l 'init'}}BLOCK TEXT{{/c-l}}<br> --}}
 * {{! Passed Item }}
 * {{!-- {{c-l item='init'}}<br> --}}
 * {{!-- {{#c-l item='init'}}BLOCK TEXT{{/c-l}}<br> --}}
 * {{! Passed Module }}
 * {{!-- {{c-l module='Addon'}}<br> --}}
 * {{!-- {{#c-l module='Addon'}}ADDON MODULE{{/c-l}}<br> --}}
 * {{! Passed Class }}
 * {{!-- {{c-l class='CrossLink' item='init'}} <br> --}}
 * {{!-- {{#c-l class='CrossLink' item='init'}}BLOCK TEXT{{/c-l}}<br> --}}
 * {{!-- {{c-l class='FountainheadWelcome'}}<br> --}}
 * {{!-- {{c-l class='FountainheadWelcome' item='classNames'}}<br> --}}
 * {{!-- {{#c-l class='FountainheadWelcome' item='classNames'}}BLOCK TEXT{{/c-l}}<br> --}}
 *
 * @class CrossLink
 * @constructor
 * @extends Ember.Component
 */
const CrossLink = Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Documentation Class to crosslink to.
   * @property class
   * @type {?string}
   * @passed
   */
  class: null,
  /**
   * Optionally specify an item (property/method) to cross link to on a class.
   * @property item
   * @type {?string}
   * @passed
   */
  item: null,
  /**
   * Documentation module to crosslink to.
   * @property module
   * @type {?string}
   * @passed
   */
  module: null,

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Computed route passed to rendered `link-to` defined in {{c-l 'init'}}
   * @property _route
   * @type {?string}
   * @private
   */
  _route: null,
  /**
   * Computed model ID passed to rendered `link-to` defined in {{c-l 'init'}}
   * @property _modelID
   * @type {?string}
   * @private
   */
  _modelID: null,
  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * Handle picking the link to route and model id based on presence of passed
   * properties. If a module or class is not passed look up the current route
   * and model id on the router.
   * @method init
   */
  init() {
    this._super(...arguments);
    let currentRouteName, currentModelId, text;
    const { item, module, class: _class } = this.getProperties('item', 'module', 'class');

    // Handle assigning internal route and model id props based on presence of
    // passed attributes. Lookup on router if not passed
    if (module || _class) {
      this.setProperties({
        _route: `api.${module ? 'modules' : 'classes'}`,
        _model: module || _class
      });
    } else {
      currentRouteName = getOwner(this).lookup('router:main').get('currentRouteName');
      currentModelId = getOwner(this).lookup(`route:${currentRouteName}`).get('currentModel.name');

      this.setProperties({
        _route: currentRouteName,
        _model: currentModelId
      });
    }

    // Handle assigning anchor text in case block params weren't used
    text = module || _class || currentModelId;
    if (item) { text += `:${item}`; }

    this.set('text', text);
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#link-to _route _model (query-params item=item)}}
      {{#if hasBlock}}
        {{yield}}
      {{else}}
        {{text}}
      {{/if}}
    {{/link-to}}
  `
});

// SOME SWEET MAGIC TO ALLOW US TO USE POSITIONAL PARAMS WITH COMPONENT
CrossLink.reopenClass({
  positionalParams: ['item']
});

export default CrossLink;

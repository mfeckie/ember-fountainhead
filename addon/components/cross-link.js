import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Use a `cross-link` component to handle cross referencing another documentation
 * item in your application. Internally the component handles creating a `link-to`
 * using the passed properties.
 *
 * Property | Description
 * --- | ---
 * `text` | Inner HTML for link
 * `class` | Documentation class to link to
 * `module` | Documentation module to link to
 * `item` | Specific documentation item to link to, appended as a query param
 *
 * #### Examples:
 * Generate a link to module 'YourModule'
 * ```glimmer
 * {{cross-link module='YourModule'}}
 * ```
 *
 * Generate a link to class 'YourClass'
 * ```glimmer
 * {{cross-link class='YourClass'}}
 * ```
 *
 * Generate a link to 'someMethod' on 'YourClass'
 * ```glimmer
 * {{cross-link class='YourClass' item='someMethod'}}
 * ```
 *
 * *NOTE* Component requires either a `class` or `module` passed in.
 * An `item` may be passed to link to a specific class item.
 * @class CrossLink
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Documentation Class to crosslink to.
   * @property class
   * @type {string}
   * @required
   * @passed
   */
  class: '',
  /**
   * Class item to cross link to.
   * as well.
   * @property item
   * @type {string}
   * @passed
   */
  item: '',
  /**
   * Documentation module to crosslink to.
   * @property module
   * @type {string}
   * @required
   * @passed
   */
  module: '',
  /**
   * Anchor text for generated `link-to`. You can pass specific text if needed,
   * otherwise default text is generated:
   *
   * #### Defaults:
   * - if module: _MODULE_NAME Module_
   * - if class: _CLASS_NAME Class_
   * - if class && item: _CLASS_NAME:ITEM_NAME Class_
   * @property text
   * @type {string}
   * @passed
   */
  text: '',

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Validate passed properties during init and warn if they're invalid. This
   * prevents the component from creating an invalid `link-to`.
   *
   * Checks for a passed
   * {{cross-link class='Crosslink' item='text'}} and sets default
   * text if unspecified
   * @method init
   */
  init() {
    this._super(...arguments);
    const { item, module } = this.getProperties('item', 'module', 'type');
    const klass = this.get('class');

    if (!klass && !module) { console.warn('Crosslink requires a class or module'); }

    // Set default anchor text if it wasn't specified in component creation
    if (!this.get('text')) {
      let text;

      if (module) { text = `${module} Module`; }
      if (klass && item) { text = `${klass}:${item}`; }
      if (klass && !item) { text = `${klass} Class`; }
      this.set('text', text);
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{! Only output link-to if data was passed }}
    {{#if module}}
      {{link-to text 'api.modules' module}}
    {{else if class}}
      {{#if item}}
        {{link-to text 'api.classes' class (query-params item=item type=type)}}
      {{else}}
        {{link-to text 'api.classes' class}}
      {{/if}}
    {{/if}}
  `
});

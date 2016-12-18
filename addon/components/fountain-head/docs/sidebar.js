import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import computed from 'ember-computed';

/**
 * Wrapper component for the sidebar components. Expects the entire docs meta
 * object.
 *
 * @class FountainHead.Sidebar
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Fountainhead meta passed from service. Used to calculate `stringForAriaHidden`
   * to hide sidebar when there is no data.
   * @property meta
   * @type {?Object}
   * @default null
   */
  meta: null,

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property attributeBindings
   * @type {Array}
   * @default ['stringForAriaHidden:aria-hidden']
   */
  attributeBindings: ['stringForAriaHidden:aria-hidden'],
  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-sidebar']
   */
  classNames: ['fh-sidebar'],
  /**
   * @property tagName
   * @type {string}
   * @default 'div'
   */
  tagName: 'div',

  // Computeds
  // ---------------------------------------------------------------------------

  /**
   * Fountainhead meta is passed into the sidebar. When there is no data, then
   * we haven't run the documentation scripts yet, so we need to hide the sidebar
   * using aria-hidden. Convert presence of meta data to string of boolean that
   * can be used for aria-hidden
   * @property stringForAriaHidden
   * @param {Object} meta Fountainhead meta passed from service
   * @type {string}
   * @return {string} Returns either string of `true` or `false` dependent on
   *                  presence of meta
   */
  stringForAriaHidden: computed('meta', function() {
    return this.get('meta') ? 'false' : 'true';
  }),

  // Actions
  // ---------------------------------------------------------------------------

  actions: {
    /**
     * Method to filter on doc elements for search.
     * @method doFilter
     * @param {string} query The search query to filter on
     * @return {undefined}
     */
    doFilter(query) {
      // @TODO make this do a thing
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#fountain-head/docs/sidebar/section title='Search'}}
      {{fountain-head/docs/sidebar/search-bar onUpdate=(action 'doFilter')}}
    {{/fountain-head/docs/sidebar/section}}

    {{#if meta.version}}
      {{fountain-head/docs/sidebar/section title=(concat 'tag:' meta.version)}}
    {{/if}}

    {{#if meta.modules}}
      {{#fountain-head/docs/sidebar/section title='Modules'}}
        {{fountain-head/docs/sidebar/item-group items=meta.modules}}
      {{/fountain-head/docs/sidebar/section}}
    {{/if}}

    {{#if meta.classes}}
      {{#fountain-head/docs/sidebar/section title='Classes'}}
        {{fountain-head/docs/sidebar/item-group items=meta.classes}}
      {{/fountain-head/docs/sidebar/section}}
    {{/if}}
  `
});

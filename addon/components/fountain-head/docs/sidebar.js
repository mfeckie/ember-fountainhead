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

  stringForAriaHidden: computed('meta', function() {
    return this.get('meta') ? 'false' : 'true';
  }),
  attributeBindings: ['stringForAriaHidden:aria-hidden'],
  classNames: ['docs-sidebar'],
  tagName: 'div',

  // Actions
  // ---------------------------------------------------------------------------

  /**
   * Actions hash
   * @property actions
   * @type {Object}
   */
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
    {{log 'META: ' meta}}
    {{#fountain-head/docs/sidebar/section sectionTitle='Search'}}
      {{fountain-head/docs/sidebar/search-bar docsItems=meta onUpdate=(action 'doFilter')}}
    {{/fountain-head/docs/sidebar/section}}

    {{#if meta.version}}
      {{fountain-head/docs/sidebar/section sectionTitle=(concat 'tag:' meta.version)}}
    {{/if}}

    {{#if meta.modules}}
      {{#fountain-head/docs/sidebar/section sectionTitle='Modules'}}
        {{fountain-head/docs/sidebar/item-group items=meta.modules}}
      {{/fountain-head/docs/sidebar/section}}
    {{/if}}

    {{#if meta.classes}}
      {{#fountain-head/docs/sidebar/section sectionTitle='Classes'}}
        {{fountain-head/docs/sidebar/item-group items=meta.classes}}
      {{/fountain-head/docs/sidebar/section}}
    {{/if}}
  `
});

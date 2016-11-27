import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Wrapper component for the sidebar components. Expects the entire docs meta
 * object.
 *
 * @class Component.DocsSidebar
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'div',
  classNames: ['docs-sidebar'],

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
    {{#fountain-head.sidebar.section sectionTitle="Search"}}
      {{fountain-head.sidebar.search-bar docsItems=docsMeta onUpdate=(action "doFilter")}}
    {{/fountain-head.sidebar.section}}

    {{#if docsMeta.version}}
      {{fountain-head.sidebar.section sectionTitle=(concat 'tag:' docsMeta.version)}}
    {{/if}}

    {{#if docsMeta.modules}}
      {{#fountain-head.sidebar.section sectionTitle="Modules"}}
        {{fountain-head.sidebar.item-group items=docsMeta.modules}}
      {{/fountain-head.sidebar.section}}
    {{/if}}

    {{#if docsMeta.classes}}
      {{#fountain-head.sidebar.section sectionTitle="Classes"}}
        {{fountain-head.sidebar.item-group items=docsMeta.classes}}
      {{/fountain-head.sidebar.section}}
    {{/if}}
  `
});

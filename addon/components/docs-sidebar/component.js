import Ember from 'ember';
import layout from './template';

/**
 * Wrapper component for the sidebar components. Expects the entire docs meta
 * object.
 *
 * @class Component.DocsSidebar
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,
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
  }
});

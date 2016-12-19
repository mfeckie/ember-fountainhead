import Route from 'ember-route';
import $ from 'jquery';

/**
 * Route to be created for handling modules
 * @class Docs.Modules
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  /**
   * Modules route model fetches modules JSON saved in `/docs/modules`.
   * @method model
   * @param {Object} params
   * @param {string} params.module_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`/docs/modules/${params.module_id}.json`);
  },

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * Reset page scroll on any transition. Note that Fountainhead is inside of
     * a fake page, so we scroll that instead of the body
     * @event didTransition
     */
    didTransition() {
      $('.fh-page-in-page-wrapper').scrollTop(0);
    }
  }
});

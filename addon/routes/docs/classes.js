import Route from 'ember-route';
import $ from 'jquery';

/**
 * This route handles fetching the data for an individual class using the id.
 * @class Docs.Classes
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  /**
   * Classes route model fetches classes JSON saved in `/docs/classes`.
   * @method model
   * @param {Object} params
   * @param {string} params.class_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`/docs/classes/${params.class_id}.json`);
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

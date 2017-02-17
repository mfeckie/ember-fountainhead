import Route from 'ember-route';
import inject from 'ember-service/inject';
import $ from 'jquery';

/**
 * Route handles fetching data for a source file.
 * @class API.Files
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  fountainhead: inject(),

  /**
   * Fetches file's JSON at: `${this.get('fountainhead.apiNamespace')}/files/${params.file_id}.json`
   * @method model
   * @param {Object} params
   * @param {string} params.file_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`${this.get('fountainhead.apiNamespace')}/files/${params.file_id}.json`);
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

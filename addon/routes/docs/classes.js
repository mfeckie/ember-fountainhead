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
   * Classes route model fetches classes JSON saved in `/docs/classes`. Note
   * that because we're using the actual class name that can contain `.`
   * characters we need to end the path with a `/` (which forces correct
   * parsing of entire path) and set the dataType fo the request (because we
   * have effectively hidden the data type with the trailing slash)
   * @method model
   * @param {Object} params
   * @param {string} params.class_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`/docs/classes/${params.class_id}.json/`, { dataType: 'json' });
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

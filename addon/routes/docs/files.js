import Route from 'ember-route';
import $ from 'jquery';

/**
 * This route handles fetching the data for an individual class using the id.
 * @class Docs.Files
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    return $.ajax(`/docs/files/${params.file_id}.json`);
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

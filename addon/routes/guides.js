import Route from 'ember-route';
import inject from 'ember-service/inject';
import $ from 'jquery';

/**
 * Fountainhead guides route.
 * @class Guides
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  fountainhead: inject(),

  /**
   * We check for and fetch meta data if needed in the parent routes of
   * Fountainhead. This lets consumers overwrite the `apiNamespace` if they
   * need before we request the meta data that drives Fountainhead.
   *
   * NOTE: We only fetch meta data if it isn't present yet.
   * @method beforeModel
   * @return {Promise|true}
   */
  beforeModel() {
    if (!this.get('fountainhead.meta')) {
      return this.get('fountainhead').fetchMeta();
    }

    return true;
  },
  /**
   * Fetches modules's JSON at: `${this.get('fountainhead.apiNamespace')}/modules/${params.file_id}.json`
   * @method model
   * @param {Object} params
   * @param {string} params.guide_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    let guideModel = this.get('fountainhead.meta.guides').filter(
      guide => guide.id === params.guide_id
    );

    if (!guideModel.length) { return new Error('Guide not found'); }
    let id = guideModel[0].id;

    return $.ajax(`${this.get('fountainhead.apiNamespace')}/guides/${id}.json`);
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

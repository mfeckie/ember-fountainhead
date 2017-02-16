import Route from 'ember-route';
import inject from 'ember-service/inject';
import $ from 'jquery';

/**
 * The docs route is the parent route for module and class documentation.
 * @class Docs
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

import BaseRoute from './base-route';

/**
 * The `/api` route is the parent route for module and class documentation.
 * @class API
 * @constructor
 * @extends Ember.Route
 */
export default BaseRoute.extend({

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * When in Fountainhead we need to pass down id query param OR the hash depending
   * on LocationType. Kick off hash tracking on activate.
   * @method activate
   */
  activate() {
    this.get('fountainhead').send('trackHash');
  },
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
  }
});

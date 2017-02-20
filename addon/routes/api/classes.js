import Route from 'ember-route';
import inject from 'ember-service/inject';
import $ from 'jquery';

/**
 * Route handles fetching data for an individual class.
 * @class API.Classes
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  fountainhead: inject(),

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * Fetches class' JSON at: `${this.get('fountainhead.apiNamespace')}/classes/${params.class_id}.json`
   * @method model
   * @param {Object} params
   * @param {string} params.class_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`${this.get('fountainhead.apiNamespace')}/classes/${params.class_id}.json`);
  },
  /**
   * We don't want the class `item` query param to be sticky. If it is, then you
   * can end up pre-scrolled to some previously crosslinked item when returning
   * to a class.
   *
   * The `resetController` hook is called anytime a route's model changes or the
   * route is exited, and is the recommended time to reset query param values on
   * a controller.
   * @method resetController
   * @param {Object}  controller
   * @param {Boolean} isExiting
   * @param {Object}  transition
   */
  resetController(controller, isExiting, transition) {
    controller.set('item', null);
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

import Route from 'ember-route';
import inject from 'ember-service/inject';
import { scheduleOnce } from 'ember-runloop';
import $ from 'jquery';

/**
 * The Fountainhead base route class contains handlers for targeted scrolling
 * including {{c-l 'resetController'}} (to clear sticky parameters),
 * {{c-l 'crossLinkFragmentOverride'}} (for History consumers using a cross link),
 * and {{c-l 'didTransition'}} (to update application hash tracker).
 * @class BaseRoute
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  fountainhead: inject(),

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Required for History consumers when cross linking to a different class _(Ember
   * strips hash from the {{c-l class='FHHref'}} component)_. When a cross link with
   * a property is clicked, the cross link will set this property to notify the route
   * that there is a fragment that should be observed on transition.
   * @property crossLinkFragmentOverride
   * @type {?string}
   * @protected
   * @default null
   */
  crossLinkFragmentOverride: null,

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * We don't want the `id` query param to be sticky. If it is, then if you
   * have an `id` scroll target for a class, navigate elsewhere and then click that
   * class again in the `api-nav`, the sticky query param will set the `id` to the
   * previous scroll target, 😣.
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
    controller.set('id', null);
  },

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * On transition, handle resetting scroll position as well as updating
     * {{c-l class='Fountainhead'}} service that a transition has occurred so that
     * the new location can be checked for a scroll target hash.
     * @event didTransition
     */
    didTransition() {
      const crossLinkFragmentOverride = this.get('crossLinkFragmentOverride');
      // For all transitions, first scroll back to top, this handles when a user scrolls
      // down th page and then transitions without making any hash changes. If the url
      // includes a scroll target it will be passed to a page component and trigger a
      // scroll event
      $('.fh-page-in-page-wrapper').scrollTop(0);

      const sendFragment = () => {
        this.get('fountainhead').send('setFragmentId', location.hash.slice(1) || '');
      };

      const overrideHash = () => {
        history.replaceState(null, null, `${location.href}#${crossLinkFragmentOverride}`);
        sendFragment();
      };

      if (crossLinkFragmentOverride) {
        // A cross link was used with a scroll target hash. Ember will strip this
        // target from the URL. After render, handle overriding hash back to the
        // original target
        scheduleOnce('render', this, overrideHash);
        // Clear out override now that it has been handled
        this.set('crossLinkFragmentOverride', null);
      } else {
        // hashChange event does not fire on transitions, after render the URL will
        // be updated to new location. Send update to Fountainhead service notifying
        // change event
        scheduleOnce('render', this, sendFragment);
      }
    }
  }
});

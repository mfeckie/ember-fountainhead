import $ from 'jquery';
import Component from 'ember-component';
import inject from 'ember-service/inject';
import { scheduleOnce } from 'ember-runloop';

/**
 * Base component that pages with targeted routing extend. Each page is passed a
 * {{c-l 'fragmentId'}} of the route scroll target. A copy of this property is stored
 * as {{c-l 'previousFragmentID'}} and used in {{c-l 'didReceiveAttrs'}} to check for
 * a change in the route target. When it changes, the page is scrolled to the new
 * target.
 * @class FountainheadPages.BasePage
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  fountainhead: inject(),

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Route target of either the hash fragment id or the id query param. Whenever the
   * target changes it will trigger a {{c-l 'didReceiveAttrs'}} that handles
   * scrolling the page to the new target (or back to top if the target changes to
   * empty).
   * @property fragmentId
   * @passed
   * @type {?string}
   * @default null
   */
  fragmentId: null,

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Internal tracker for previous {{c-l 'fragmentId'}}. Needed to check if the
   * scroll target has changed in the {{c-l 'didReceiveAttrs'}} hook.
   * @property previousFragmentID
   * @protected
   * @type {?string}
   * @default null
   */
  previousFragmentID: null,
  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * Anytime the model or the fragmentId changes send a scroll event to
   * {{c-l class='Fountainhead'}} service. This handles auto-scrolling to ids that
   * are not in DOM when the page loads and handles scrolling to ids when the browser
   * back button is clicked.
   * @event didReceiveAttrs
   */
  didReceiveAttrs() {
    const {
      fragmentId,
      previousFragmentID
    } = this.getProperties(['fragmentId', 'previousFragmentID']);

    function scrollTo() {
      const target = document.getElementById(fragmentId);
      if (target) { target.scrollIntoView(); }
    }

    if (fragmentId !== previousFragmentID) {
      if (!fragmentId) {
        // If the current fragment id is falsey (''), it means scroll to page top
        $('.fh-page-in-page-wrapper').scrollTop(0);
      } else {
        scheduleOnce('afterRender', this, scrollTo);
      }
    }

    this.set('previousFragmentID', fragmentId);
  }
});

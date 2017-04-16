import Ember from 'ember';
import Service from 'ember-service';
import $ from 'jquery';
const { ActionHandler } = Ember;

/**
 * This is the primary service backing Fountianhead and handles configurations,
 * addon methods and storage of the generated documentation meta data. Important
 * members include:
 * - {{c-l 'apiNamespace'}}: Configures fetch service namespace
 * - {{c-l 'meta'}}: Generated documentation metadata
 * - {{c-l 'fetchMeta'}}: Public method called in the `beforeModel` of either the
 *   `api` or `guides` route and fetches documentation meta data
 * - {{c-l 'checkScrollToSection'}}: Action called when checking for auto scroll
 *   target
 * @class Fountainhead
 * @constructor
 * @extends Ember.Service
 */
export default Service.extend(ActionHandler, {

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * All Fountainhead API requests are prefixed with this namespace. If you
   * export your docs JSON files to a non-default location, or your application
   * is served under a url namespace, you can overwrite this property to match your
   * endpoint's root url namespace.
   * @property apiNamespace
   * @type {string}
   * @public
   * @default '/docs'
   */
  apiNamespace: '/docs',
  /**
   * When using the History Location type, this will match the hash fragment that is
   * used for linking to specific documentation headers/properties. Ember Router
   * doesn't seem to notice these changes? so we track them and pass them down to the
   * page components where they trigger page scrolls when the back button is used.
   * @property fragmentId
   * @protected
   * @type {string}
   * @default ''
   */
  fragmentId: '',
  /**
   * Documentation meta fetched from `/meta.json`. Contains high level map
   * of modules, classes and guides available in documentation. Is generated in
   * {{c-l module='Lib'}}.
   *
   * ```javascript
   * // meta.json Object Shape:
   * {
   *   classes: [],
   *   description: '',
   *   guides: [],
   *   hashRouting: boolean
   *   modules: [],
   *   name: '',
   *   parser: '',
   *   repository: '',
   *   version: ''
   * }
   * ```
   *
   * ## `hashRouting` and Page Load Scrolling With Fragment Ids
   * Fountainhead has automatic scrolling on page load for links with a target id in
   * them. For consuming applications using history location we use fragments ids for
   * the target:
   * `https://yourdocs.com/guides/your-guide#scroll-target`
   *
   * For consuming applications using hash location, the meta response will have
   * property `hashRouting` set to true. This flags Fountainhead to use a query
   * parameter for the scroll target:
   * `https://yourdocs.com/#/guides/your-guide?id=scroll-target`
   *
   * Although this requires generating different link text and handling scrolling
   * targets two different ways, it allows us to have clean urls with fragments for
   * apps that have updated to history location while still supporting apps
   * with hash location routing.
   *
   * This property is used throughout Fountainhead when checking which routing the
   * consuming app is using.
   * @property meta
   * @type {?Object}
   * @default null
   */
  meta: null,
  /**
   * Set to true if the call for documentation meta data fails. Almost always this
   * means the user has not generated documentation yet, so the {{c-l class='Route.API'}}
   * route uses this to show getting started instructions when there is an error.
   * @property metaError
   * @type {Boolean}
   * @public
   * @default false
   */
  metaError: false,

  // Methods
  // ---------------------------------------------------------------------------
  /**
   * Fires request for documentation meta data and returns the promise. This
   * method is called in the `beforeModel` of either the `docs` or `guides`
   * route, whichever is entered first.
   *
   * {{#fountainhead-alert brand='info' dismiss=false}}
   *   {{fountainhead-svg svgId='info'}} If the request fails {{cross-link item='metaError'}} will be set to `true`.
   * {{/fountainhead-alert}}
   * @method fetchMeta
   * @public
   * @return {Promise}
   */
  fetchMeta() {
    return $.get(`${this.get('apiNamespace')}/meta.json`).then(
      meta => this.set('meta', meta),
      error => this.set('metaError', true)
    );
  },

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * Reset the tracked fragment. Should be called when leaving routes b/c a hash
     * change event will not fire fire for the new clicked
     * @method setFragmentId
     */
    setFragmentId(id='') {
      this.set('fragmentId', id);
    },
    /**
     * Begins tracking the `location.hash` to pass down to page components. See
     * {{c-l 'fragmentId'}} for details.
     * @method trackHash
     * @public
     * @action
     */
    trackHash() {
      // event only fires on change, synchronize current hash with service fragmentId
      this.set('fragmentId', location.hash.slice(1) || '');

      // With same type and function, `addEventListener` should discard duplicated
      // listener calls
      const hashChange = () => {
        this.set('fragmentId', location.hash.slice(1));
      };
      window.addEventListener('hashchange', hashChange, false);
    }
  }
});

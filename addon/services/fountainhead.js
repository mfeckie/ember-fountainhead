import Ember from 'ember';
import Service from 'ember-service';
import $ from 'jquery';
const { ActionHandler } = Ember;

/**
 * The Fountainhead service handles fetching the meta data for Fountainhead.
 * This is triggered in the `beforeModel` of either the `docs` or `guides`
 * route.
 *
 * The namespace that all API request fire with is defined as `apiNamespace`.
 * If you need to route requests under a different namespace it can be udpated.
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
   * is served under a namespace you can overwrite this property to match your
   * endpoint's root url namespace.
   * @property apiNamespace
   * @type {string}
   * @public
   * @default '/docs'
   */
  apiNamespace: '/docs',
  /**
   * Documentation meta fetched from `/meta.json`. Contains high level map
   * of modules and classes available in documentation. Used for sidebar and
   * mapping item and return types.
   * This property is initialized to null so that the sidebar has an explicit
   * value to bind aria-hidden to. When there is no meta, there is no sidebar.
   * @property meta
   * @type {?Object}
   * @default null
   */
  meta: null,
  /**
   * Flag used by docs route to show getting started instructions if the call for
   * documentation meta fails.
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
   * NOTE: If the request fails service property {{cross-link item='metaError'}}
   * will be set to `true`.
   * @method fetchMeta
   * @protected
   * @return {Promise}
   */
  fetchMeta() {
    return $.get(`${this.get('apiNamespace')}/meta.json`).then(
      meta => this.set('meta', meta),
      err => this.set('metaError', true)
    );
  }
});

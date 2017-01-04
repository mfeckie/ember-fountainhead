import Ember from 'ember';
import Service from 'ember-service';
import { next } from 'ember-runloop';
import $ from 'jquery';
const { ActionHandler } = Ember;

/**
 * Fountainhead application service.
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
   * @default false
   */
  metaError: false,

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * When this service is loaded, handle fetching documentation meta data that
   * drives the sidebar && header. If there is an error we know tha we haven't
   * generated documentation yet. The docs template will pick up the error and
   * display the getting started instructions.
   *
   * NOTE: the meta request needs to be wrapped in a `run.next` so that if a
   * consuming application needs to override the `apiNamespace` the meta call
   * is made with the new namespace. Without the run loop, attempting to set
   * the namespace will initialize this service and call for meta before the
   * namespace update is complete and the request will use the default `/docs`
   * namespace.
   * @method init
   */
  init() {
    next(() => {
      $.get(`${this.get('apiNamespace')}/meta.json`).then(
        meta => this.set('meta', meta),
        err => this.set('metaError', true)
      );
    });
  }
});

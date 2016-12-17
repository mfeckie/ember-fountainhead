import Ember from 'ember';
import Service from 'ember-service';
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
   * Documentation meta fetched from `/docs/meta.json`. Contains high level map
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
   * @method init
   */
  init() {
    $.get('/docs/meta.json').then(
      meta => this.set('meta', meta),
      err => this.set('metaError', true)
    );
  }
});

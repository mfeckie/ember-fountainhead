import Ember from 'ember';
import Route from 'ember-route';

/**
 * Fountainhead `docs` route that handles automagically fetching documentation
 * data from `/docs/meta.json`. This is used as the model for the docs landing
 * page
 * @class Docs
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * Fetch documentation meta data for docs model
   * @method model
   * @return {Promise}
   */
  model() {
    return Ember.$.ajax('/docs/meta.json');
  }
});

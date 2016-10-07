import Ember from 'ember';
const { $, Route } = Ember;

/**
 * Fountainhead `docs` route that handles automagically fetching documentation
 * data from `/docs/meta.json`. This is used as the model for the docs landing
 * page
 * @class Route.Docs
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
    return $.ajax('/docs/index.json').then(
      res => res,
      ex => ({ error: true, message: 'Meta fetch failed' })
    );
  }
});

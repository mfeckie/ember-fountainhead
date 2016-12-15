import Route from 'ember-route';

/**
 * Route to be created for handling modules
 * @class Docs.Modules
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    console.log('module route hit', params.module_id);
  }
});

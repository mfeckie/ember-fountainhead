import Route from 'ember-route';
import $ from 'jquery';

/**
 * Route to be created for handling modules
 * @class Docs.Modules
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    return $.ajax(`/docs/modules/${params.module_id}.json`);
  }
});

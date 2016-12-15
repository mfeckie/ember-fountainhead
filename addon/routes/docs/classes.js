import Route from 'ember-route';
import $ from 'jquery';

/**
 * This route handles fetching the data for an individual class using the id.
 * @class Docs.Classes
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    return $.ajax(`/docs/classes/${params.class_id}.json`);
  }
});

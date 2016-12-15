import Route from 'ember-route';
import $ from 'jquery';

/**
 * This route handles fetching the data for an individual class using the id.
 * @class Docs.Files
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    return $.ajax(`/docs/files/${params.file_id}.json`);
  }
});

import Ember from 'ember';
import Route from 'ember-route';

/**
 * This route handles fetching the data for an individual class using the id.
 * @class Docs.Files
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    console.log('file ', params);
    return Ember.$.ajax(`/docs/files/${params.file_id}.json`);
  }
});

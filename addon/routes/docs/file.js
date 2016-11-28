import Ember from 'ember';
import Route from 'ember-route';

/**
 * This route handles fetching the data for an individual class using the id.
 * @class Docs.File
 * @constructor
 * @extends Ember.Route
 */
export default Route.extend({
  model(params) {
    return Ember.$.ajax(`/docs/files/${params.fileId}.json`);
  }
});

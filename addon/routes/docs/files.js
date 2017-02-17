import Route from 'ember-route';

/**
 * Docs route for files
 * @class Docs.Files
 * @constructor
 * @extends Ember.Route
 * @deprecated
 */
export default Route.extend({
  model(params) {
    return { file_id: params.file_id };
  },
  redirect(model) {
    console.log('The `/docs` route is deprecated and will be removed in Ember Fountainhead 4.0.0, please use `/api`');
    this.transitionTo('api.files', model.file_id);
  }
});

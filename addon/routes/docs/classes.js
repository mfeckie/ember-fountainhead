import Route from 'ember-route';

/**
 * Docs route for classes
 * @class Docs.Classes
 * @constructor
 * @extends Ember.Route
 * @deprecated
 */
export default Route.extend({
  model(params) {
    return { class_id: params.class_id };
  },
  redirect(model) {
    console.log('The `/docs` route is deprecated and will be removed in Ember Fountainhead 4.0.0, please use `/api`');
    this.transitionTo('api.files', model.class_id);
  }
});

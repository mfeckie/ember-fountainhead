import Route from 'ember-route';
import {Logger} from 'ember';

/**
 * Docs Route for modules
 * @class Docs.Modules
 * @constructor
 * @extends Ember.Route
 * @deprecated
 */
export default Route.extend({
  model(params) {
    return { module_id: params.module_id };
  },
  redirect(model) {
    Logger.warn('The `/docs` route is deprecated and will be removed in Ember Fountainhead 4.0.0, please use `/api`');
    this.transitionTo('api.modules', model.module_id);
  }
});

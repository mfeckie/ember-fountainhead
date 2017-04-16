import $ from 'jquery';
import BaseRoute from '../base-route';

/**
 * Route to be created for handling modules
 * @class API.Modules
 * @constructor
 * @extends Ember.Route
 */
export default BaseRoute.extend({
  /**
   * Fetches modules's JSON at: `${this.get('fountainhead.apiNamespace')}/modules/${params.file_id}.json`
   * @method model
   * @param {Object} params
   * @param {string} params.module_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`${this.get('fountainhead.apiNamespace')}/modules/${params.module_id}.json`);
  }
});

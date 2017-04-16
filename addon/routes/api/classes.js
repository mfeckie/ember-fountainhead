import $ from 'jquery';
import BaseRoute from '../base-route';

/**
 * Route handles fetching data for an individual class.
 * @class API.Classes
 * @constructor
 * @extends Ember.Route
 */
export default BaseRoute.extend({
  /**
   * Fetches class' JSON at: `${this.get('fountainhead.apiNamespace')}/classes/${params.class_id}.json`
   * @method model
   * @param {Object} params
   * @param {string} params.class_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`${this.get('fountainhead.apiNamespace')}/classes/${params.class_id}.json`);
  }
});

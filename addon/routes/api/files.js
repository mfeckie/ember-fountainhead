import $ from 'jquery';
import BaseRoute from '../base-route';

/**
 * Route handles fetching data for a source file.
 * @class API.Files
 * @constructor
 * @extends Ember.Route
 */
export default BaseRoute.extend({
  /**
   * Fetches file's JSON at: `${this.get('fountainhead.apiNamespace')}/files/${params.file_id}.json`
   * @method model
   * @param {Object} params
   * @param {string} params.file_id Name of this class, use to fetch data
   * @return {Promise} jQuery ajax promise
   */
  model(params) {
    return $.ajax(`${this.get('fountainhead.apiNamespace')}/files/${params.file_id}.json`);
  }
});

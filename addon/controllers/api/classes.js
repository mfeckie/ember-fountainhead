import Controller from 'ember-controller';

/**
 * Classes controller is required to pass `item` query param to the page
 * component.
 * @class API.Classes
 * @constructor
 * @extends Ember.Controller
 */
export default Controller.extend({
  /**
   * @property queryParams
   * @type {Array}
   * @default ['item']
   */
  queryParams: ['item'],
  /**
   * Item query param is available for scrolling to a doc item.
   * @property item
   * @type {?string}
   * @default null
   */
  item: null
});

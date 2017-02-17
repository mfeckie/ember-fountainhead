import Controller from 'ember-controller';

/**
 * Due to an edge case with Ember query params
 * _([github](https://github.com/emberjs/ember.js/issues/4570#issuecomment-138824708))_,
 * we need to define the `item` query param in this controller otherwise the
 * `cross-link` component will render `?item=null` when used to cross link to an
 * module.
 * @class API.Modules
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
   * @property item
   * @type {?string}
   * @default null
   */
  item: null
});

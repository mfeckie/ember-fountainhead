import Controller from 'ember-controller';
import inject from 'ember-service/inject';

/**
 * Due to an edge case with Ember query params
 * _([github](https://github.com/emberjs/ember.js/issues/4570#issuecomment-138824708))_,
 * we need to define the `id` query param controllers otherwise the
 * `cross-link` component will render `?item=null` when used to cross link to other
 * routes.
 * @class BaseController
 * @constructor
 * @extends Ember.Controller
 */
export default Controller.extend({
  fountainhead: inject(),

  /**
   * @property queryParams
   * @type {Array}
   * @default ['item']
   */
  queryParams: ['id'],
  /**
   * @property id
   * @type {?string}
   * @default null
   */
  id: null
});

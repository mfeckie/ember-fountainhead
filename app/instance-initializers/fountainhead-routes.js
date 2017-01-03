import Router from '../router';

/**
 * Automagically mount Fountainhead routes through an `instance-initializer`.
 *
 * NOTE: this initializer needs to be in the `/app` directory so that the the
 * @class FountainheadRoutes
 * @constructor
 */

/**
 * Initialize route that is called by consuming Ember application
 * `Router` instance from the consuming application can directly mapped.
 * @method initialize
 * @return {undefined}
 */
export function initialize(/* appInstance */) {
  Router.map(function() {
    this.route('docs', function() {
      this.route('classes', { path: '/classes/:class_id'});
      this.route('modules', { path: '/modules/:module_id'});
      this.route('files', { path: '/files/:file_id'});
    });
  });
}

export default {
  name: 'fountainhead-routes',
  initialize
};

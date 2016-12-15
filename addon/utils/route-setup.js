/**
 * Router setup utility for addon that can be imported into a consuming
 * application for automagic route creation:
 *
 * ```javascript
 * // your-router.js
 * import fountainheadRoutes from 'ember-fountainhead/utils/route-setup';
 *
 * Router.map(function() {
 *   // your routes...
 *
 *   fountainheadRoutes(this);
 * })
 * ```
 * @class routeSetup
 * @constructor
 * @param {Object} self Consuming application to mount routes to
 */
export default function routeSetup(self) {
  self.route('docs', function() {
    this.route('classes', { path: '/classes/:class_id'});
    this.route('modules', { path: '/modules/:module_id'});
    this.route('files', { path: '/files/:file_id'});
  });
}

import Ember from 'ember';
import config from './config/environment';
// import fountainheadRoutes from 'ember-fountainhead/utils/route-setup';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // fountainheadRoutes(this);

  this.route('docs', function() {
    this.route('classes', { path: '/classes/:itemId'});
    this.route('modules', { path: '/modules/:itemId'});
    this.route('file', { path: '/file/:fileId'});
  });
});

export default Router;

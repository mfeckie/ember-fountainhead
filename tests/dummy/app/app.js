import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import FountainheadSVG from 'ember-fountainhead/components/fountainhead-svg';
import Fountainhead from 'ember-fountainhead/services/fountainhead';

let apiNamespace = `${config.rootURL}docs`;
let filePath = '/ember-fountainhead/svg/symbol-defs.svg';
if (config.environment === 'production') {
  filePath = '/ember-fountainhead' + filePath;
}

/*
 * Handle setting the apiBase for Fountainhead API calls to match the
 * app's `config.rootURL`. This is required b/c the production demo app served
 * by github is under the namespace `ember-fountainhead`.
 *
 * In dev the `rootURL` is `/`, so the default `/docs` namespace is preserved
 */
Fountainhead.reopen({ apiNamespace });
FountainheadSVG.reopen({ filePath });

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

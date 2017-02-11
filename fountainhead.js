/*
 * This file drives the configuration for you Fountainhead instance.
 * TODO: Document config options in demo app
 */

// Common configs for all environments
const common = {
  liveEdit: true, // Generate fountainhead docs before a build is run for live reloading
  includeVendorStyles: false, // We directly import styles for dev hot reloading
  quiet: false, // Supresses error logging
  whiteListTags: ['passed', 'action'], // Whitelist unknown tags
  entry: [
    'addon', 'app', 'blueprints', 'lib'
  ],
  output: {
    filename: 'fountainhead-data.json',
    path: 'docs'
  },
  external: {
    data: [
      {
        base: 'http://emberjs.com/api/',
        json: 'http://builds.emberjs.com/release/ember-docs.json'
      }
    ]
  }
};

// Production only configs
const production = {
  // The demo app is a gh-pages app that is served from `/ember-fountainhead/`
  logo: '/ember-fountainhead/ember-fountainhead/img/ember-logo.png'
};

if (process.env.NODE_ENV === 'production') {
  Object.assign(common, production);
}

module.exports = common;

/*
 * This file drives the configuration for you Fountainhead instance.
 * TODO: Document config options in demo app
 */
module.exports = {
  includeVendorStyles: false, // We directly import styles for dev hot reloading
  entry: [
    'addon', 'app', 'blueprints', 'lib'
  ],
  output: {
    filename: 'fountainhead-data.json',
    path: 'tests/dummy/public/docs'
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

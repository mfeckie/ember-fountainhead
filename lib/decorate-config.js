'use strict';
const path = require('path');

/**
 * Handle adding default values to config and validating required properties
 * are present
 * @class decorateConfig
 * @constructor
 * @param {Object} config      Project configuration file
 * @param {Object} packageJSON Project package.json file
 * @param {Object} buildConfig Configs passed to build function call
 * @return {Object} Fully decorated and validated project configuration file
 */
module.exports = function decorateConfig(config, packageJSON, buildConfig) {
  // ========================================================
  // Setup Default Configs
  // ========================================================
  buildConfig = buildConfig || {};
  /**
   * Fountianhead default configurations are targeted at Ember applications and
   * include a sane default for every option with the goal of being able to
   * install and use the addon with zero configuration for simple/standard Ember
   * apps.
   * TODO: Document defaults
   * @property defaultConfigurations
   * @type {Object}
   */
  let defaultConfigurations = {
    name: '',
    description: '',
    entry: ['app'],
    quiet: false,
    whiteListTags: ['passed', 'closure', 'action'],
    guides: [],
    output: {
      filename: 'fountainhead-data.json',
      path: path.resolve('docs')
    }
  };

  // If consuming application is an addon, change entry to `/addon` dir
  // Addons should have the entry 'ember-addon' in their package keywords
  if (packageJSON.keywords && packageJSON.keywords.indexOf('ember-addon') !== -1) {
    defaultConfigurations.entry = ['addon'];
  }


  // ========================================================
  // Merge Defaults with Consumer Defined Configs
  // ========================================================

  // Use .assign to set defaults for any missing configs
  config = Object.assign(defaultConfigurations, config);

  // YUIDoc expects an array of entries, Wrap single entry in an array
  config.entry = config.entry instanceof Array ? config.entry : [config.entry];

  // Validate config repository
  if (!config.repository && packageJSON.repository) {
    config.repository = typeof packageJSON.repository === 'string'
      ? packageJSON.repository
      : packageJSON.repository.url;
  }

  // Populate with package data where possible
  config.name = config.name || packageJSON.name;
  config.description = config.description || packageJSON.description;
  config.version = config.version || packageJSON.version;

  // hashRouting determines if query params or hash fragments are used for links,
  // users can set this explicitly, but shouldn't have to. If the buildConfig has
  // locationType hash, set hashRouting to true (unless user has explicitly
  // configured)
  if (config.hashRouting === undefined && buildConfig.locationType === 'hash') {
    config.hashRouting = true;
  }

  return config;
};

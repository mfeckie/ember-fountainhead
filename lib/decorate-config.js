'use strict';

const path = require('path');

/**
 * Handle adding default values to config and validating required properties
 * are present
 * @class decorateConfig
 * @constructor
 * @param {Object} config      Project configuration file
 * @param {Object} packageJSON Project package.json file
 * @return {Object} Fully decorated and validated project configuration file
 */
module.exports = function decorateConfig(config, packageJSON) {
  let defaultConfigurations = {
    name: '',
    description: '',
    entry: 'app',
    output: {
      filename: 'fountainhead-data.json',
      path: path.resolve('public', 'docs')
    }
  };

  // Use .assign to set defaults for any missing configs
  config = Object.assign(defaultConfigurations, config);

  // Construct paths for multiple entry points
  if (config.entry instanceof Array) {
    config.entry = config.entry.join(' '); // Join entry paths for using in command line
  }

  // Validate config repository
  // ---------------------------------------------------------------------------
  if (!config.repository && packageJSON.repository) {
    config.repository =
      typeof packageJSON.repository === 'string' ? packageJSON.repository : packageJSON.repository.url;
  }

  // Populate package data if it's missing
  // ---------------------------------------------------------------------------
  config.name = config.name || packageJSON.name;
  config.description = config.description || packageJSON.description;
  config.version = config.version || packageJSON.version;

  return config;
};

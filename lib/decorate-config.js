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
  let output = config.output || {}; // Make sure output object exists

  // Validate and resolve output configurations
  // ---------------------------------------------------------------------------
  output.path = output.path ? path.resolve(output.path) : path.resolve('public', 'docs');
  output.filename = output.filename || 'docs-data.json';
  config.output = output;

  // Validate config entry
  // ---------------------------------------------------------------------------
  let entry = config.entry || 'app';

  // Construct paths for multiple entry points
  if (entry instanceof Array) {
    entry = entry.join(' '); // Join entry paths for using in command line
  }
  config.entry = entry;

  // Validate config repository
  // ---------------------------------------------------------------------------
  if (!config.repository) {
    if (packageJSON.repository && typeof packageJSON.repository === 'string') { config.repository = packageJSON.repository; }
    if (packageJSON.repository && typeof packageJSON.repository === 'object') { config.repository = packageJSON.repository.url; }
  }

  config.name = config.name || packageJSON.name;
  config.description = config.description || packageJSON.description;
  config.version = config.version || packageJSON.version;
  config.repository = config.repository || null;
  config.logo = config.logo || null;

  return config;
};

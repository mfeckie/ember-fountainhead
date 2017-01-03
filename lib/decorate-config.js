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
  // ========================================================
  // Setup Default Configs
  // ========================================================

  // Define default configurations for entry && output based on if consumer is
  // an addon or application

  /**
   * Configuration entry should be an array of directory paths (YUIDoc can't
   * parse individual files unfortunately). The default entry is `app` when the
   * consumer is an application and `addon` when the consumer is an addon.
   * @property entry
   * @type {Array}
   * @default ['app'] | ['addon']
   */
  /**
   * Configuration output path should be a directory path. The default is `public/docs`
   * when the consumer is an application and `tests/dummy/public/docs` when the
   * consumer is an addon (Outputting the docs to `/public` in an addon signals
   * Ember CLI to bundle your docs into any consuming applications `/public` dir
   * which is not the default behavior we want).
   * @property outputPath
   * @type {string}
   * @default 'public/docs' | 'tests/dummy/public/docs'
   */
  let entry, outputPath;


  // Addons should have the entry 'ember-addon' in their package keywords
  if (packageJSON.keywords && packageJSON.keywords.indexOf('ember-addon') !== -1) {
    entry = ['addon'];
    outputPath = path.resolve('tests', 'dummy', 'public', 'docs');
  } else {
    entry = ['app'];
    outputPath = path.resolve('public', 'docs');
  }

  let defaultConfigurations = {
    name: '',
    description: '',
    entry: entry,
    output: {
      filename: 'fountainhead-data.json',
      path: outputPath
    }
  };


  // ========================================================
  // Merge Defaults with Consumer Defined Configs
  // ========================================================

  // Use .assign to set defaults for any missing configs
  config = Object.assign(defaultConfigurations, config);

  // YUIDoc expects an array of entries, Wrap single entry in an array
  config.entry = config.entry instanceof Array ? config.entry : [config.entry];

  // Validate config repository
  if (!config.repository && packageJSON.repository) {
    config.repository =
      typeof packageJSON.repository === 'string' ? packageJSON.repository : packageJSON.repository.url;
  }

  // Populate with package data where possible
  config.name = config.name || packageJSON.name;
  config.description = config.description || packageJSON.description;
  config.version = config.version || packageJSON.version;

  // TODO: Logging to console if some basic configs aren't set

  return config;
};

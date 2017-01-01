'use strict';
const path = require('path');
const Y = require('yuidocjs');

const decorateConfig = require('./decorate-config');
const createDirs = require('./create-dirs');
const generateFountainheadData = require('./generate-fountainhead-data');


/**
 * Fountainhead documentation data generation lib entry. Configuration is set
 * through `fountainhead.js` file. (TODO: Add default configs to decorate-config)
 * class and link.
 *
 * The entry handles:
 * 1. Safe require of `package.json` && `fountainhead.js` files for configs
 * 2. Decoration && validation of project configs
 * 3. Generation of raw YUIDoc JSON through YUIDoc module directly
 * 4. Decoration of raw data in `generate-fountainhead-data` module.
 *
 * The primary module is the `generate-fountainhead-data` which handles all of
 * the decoration and file creation required for Fountainhead.
 * @class Index
 * @constructor
 * @uses decorateConfig
 * @uses createDirs
 * @uses generateFountainheadData
 */
module.exports = function() {

  // ========================================================
  // Pre Docs Generation Validation
  // ========================================================
  /**
   * Optional configs pulled from `fountainhead.js`
   * @property fountainheadConfig
   * @type {Object}
   */
  /**
   * Package JSON for project. Used to populate project description if not
   * defined in `fountainhead.js` config.
   * @property packageJSON
   * @type {Object}
   */

  let fountainheadConfig, packageJSON;

  // You never know.
  try {
    fountainheadConfig = require(path.resolve('fountainhead.js'));
    packageJSON = require(path.resolve('package.json'));
  } catch(ex) {
    fountainheadConfig = {};
  }

  // Validate config output
  fountainheadConfig = decorateConfig(fountainheadConfig, packageJSON);


  // ========================================================
  // Exec Docs Generation
  // ========================================================

  /**
   * Raw YUIDoc JSON data generated using constructor exported by `yuidocjs`.
   * Call new with options from config to pass configs to YUIDoc and call `run`
   * to generate JSON
   * @property yuidocJSON
   * @type {Object}
   */
  const yuidocJSON = (new Y.YUIDoc({
    paths: fountainheadConfig.entry,
    outdir: fountainheadConfig.output.path
  })).run();

  /*
   * When YUIDoc executes it will ensure that an empty direcotry is created at
   * the output destination. Before we can generate the Fountainhead data, we
   * need to create the directories the data will be saved in.
   */
  createDirs(fountainheadConfig.output);

  /*
   * Generate fountainhead json data using project configuration and yuidoc
   * generated raw data
   */
  return generateFountainheadData(fountainheadConfig, yuidocJSON);
};

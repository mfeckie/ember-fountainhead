#!/usr/bin/env node

'use strict';
const fs = require('fs');
const path = require('path');
const execSync = require('child_process').exec;

const decorateConfig = require('./decorate-config');
const createDirs = require('./create-dirs');
const generateFountainheadData = require('./generate-fountainhead-data');


// ========================================================
// Pre Docs Generation Validation
// ========================================================

let config;
let packageJSON = require(path.resolve('package.json'));

// Configuration is optional, load in a try/catch to handle possible error
try {
  config = require(path.resolve('fountainhead.js'));
} catch(ex) {
  config = {};
}

// Validate config output
config = decorateConfig(config, packageJSON);

// ========================================================
// Exec Docs Generation
// ========================================================

/*
 * YUIDoc is a dependency of this package, so it will get installed, but b/c it
 * is not a direct dependency of a consuming application, it will not get added
 * to the bin for the consuming app. So we first we resolve the module and then
 * target the cli file (for the bin) instead of the index file listed as the
 * module's main entry.
 */
const yuidocBinPath = require.resolve('yuidocjs').replace('index.js', 'cli.js');

/*
 * Run yuidoc cli to generate raw data.json. Handle reading && parsing output in
 * callback and passing to `generateFountainheadData` to handle generating the
 * JSON files for addon.
 */
execSync(`${yuidocBinPath} ${config.entry} --parse-only --outdir ${config.output.path}`,
  err => {
    if (err !== null) { return console.warn('exec error: ' + err); }

    /*
     * When YUIDoc executes it will ensure that an empty direcotry is created at
     * the output destination. Before we can generate the Fountainhead data, we
     * need to create the directories the data will be saved in.
     */
    createDirs(config.output);

    // Attempt to read and parse yuidoc generated json
    let yuidocGeneratedData;
    try {
      yuidocGeneratedData = fs.readFileSync(
        path.join(config.output.path, 'data.json'), { encoding: 'utf8' }
      );
      yuidocGeneratedData = JSON.parse(yuidocGeneratedData);
    } catch(ex) {
      return console.warn('Unable to parse docs JSON');
    }

    // Generate fountainhead json data using project configuration and yuidoc generated raw data
    generateFountainheadData(config, yuidocGeneratedData);
  }
);

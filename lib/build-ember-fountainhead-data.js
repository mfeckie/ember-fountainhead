// ========================================================
// This file is for development of Fountainhead. It pulls
// the raw ember json from /tests-lib and runs it through
// Fountainhead so we can compare feature parity
// ========================================================

'use strict';
const fs = require('fs');
const path = require('path');

const createDirs = require('./create-dirs');
const generateFountainheadData = require('./generate-fountainhead-data');


// ========================================================
// Exec Docs Generation
// ========================================================
createDirs({
  filename: 'fountainhead-data.json',
  path: 'public/docs'
});

// Attempt to read and parse yuidoc generated json
let yuidocGeneratedData = fs.readFileSync(
  path.resolve('tests-lib', 'raw-ember-source.json'), { encoding: 'utf8' }
);
yuidocGeneratedData = JSON.parse(yuidocGeneratedData);


// Generate fountainhead json data using project configuration and yuidoc generated raw data
generateFountainheadData({
    name: 'Ember Source Docs',
    description: 'Ember source for parity comparison',
    version: '1.0.0',
    repository: null,
    logo: null,
    entry: [
      'addon', 'lib'
    ],
    output: {
      filename: 'fountainhead-data.json',
      path: 'public/docs'
    },
    external: {
      data: [
        {
          base: 'http://emberjs.com/api/',
          json: 'http://builds.emberjs.com/release/ember-docs.json'
        }
      ]
    }
  },
  yuidocGeneratedData
);

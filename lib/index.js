'use strict';
const fs = require('fs');
const path = require('path');
const execSync = require('child_process').exec;

const parseMarkdown = require('./parse-markdown');

const config = require('../fountainhead');
const packageJSON = require('../package');


// ========================================================
// Define Parameters
// ========================================================

const output = config.output || { path: path.join('public', 'docs'), filename: 'docs-data.json' };
let entry = config.entry || 'app';

// If config doesn't have a version, use the packagejson
if (!config.version) {
  config.version = packageJSON.version;
}

entry = entry.join(' ');


// ========================================================
// Do some pre-cleaning
// ========================================================

// Make sure an output folder directory exists
// @TODO this doesn't work for nested directories
try {
  fs.statSync(output.path);
} catch(ex) {
  fs.mkdir(output.path);
}

// Make sure a tmp dir exists in the output directory
try {
  fs.statSync(path.join(output.path, 'tmp'));
} catch(ex) {
  fs.mkdir(path.join(output.path, 'tmp'));
}

// If a data file already exists, nuke it
try {
  fs.lstatSync(path.join(output.path, output.filename));
  fs.unlink(path.join(output.path, output.filename));
} catch (ex) {
  // do less
}


// ========================================================
// Define decoration
// ========================================================

// Decorate && write to outdir
function decorateData(data) {
  const docClasses = data.classes;

  for (let docClass in docClasses) {
    if (!docClasses.hasOwnProperty(docClass)) { return; }

    if (docClasses[docClass].description) {
      docClasses[docClass].description = parseMarkdown(docClasses[docClass].description);
    }
  }

  try {
    data = JSON.stringify(data, null, 2);
    fs.writeFileSync(path.join(output.path, output.filename), data, {encoding: 'utf8'});
    fs.unlink(path.join(output.path, 'tmp', 'data.json'));
    fs.rmdir(path.join(output.path, 'tmp'));
  } catch(ex) {
    console.warn('Unable to decorate docs JSON');
  }
}


// ========================================================
// Exec doc generation
// ========================================================

// Generate yuidoc data.json file
execSync(`./node_modules/.bin/yuidoc ${entry} --parse-only --quiet --outdir ${output.path}/tmp`, function(error, stdout, stderr) {
    if (error !== null) { return console.warn('exec error: ' + error); }

    // decorate data.json
    let docsData;

    try {
      docsData = fs.readFileSync(path.join(__dirname, '..', output.path, 'tmp', 'data.json'), { encoding: 'utf8' });
      docsData = JSON.parse(docsData);
    } catch(ex) {
      console.warn('Unable to parse docs JSON');
    }

    decorateData(docsData);
});

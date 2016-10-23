'use strict';
const fs = require('fs');
const path = require('path');
const execSync = require('child_process').exec;
const caseMagic = require('case');

const parseMarkdown = require('./parse-markdown');

const config = require('../fountainhead') || {};
const packageJSON = require('../package');


// ========================================================
// Define Parameters
// ========================================================

let docsMeta;
let output = config.output;
let entry = config.entry;

// Construct output path
output = output || { path: path.join(__dirname, '..', 'public', 'docs'), filename: 'docs-data.json' };

// Construct paths for entry points
if (entry instanceof Array) {
  entry = entry.map(function(enter) {
    return path.join(__dirname, '..', enter);
  });

  entry = entry.join(' '); // Join entry paths for using in command line
} else {
  entry = path.join(__dirname, '..', 'app');
}

// Check package json for defaults if not in configuration
if (!config.version) { config.version = packageJSON.version; }
if (!config.name) { config.name = packageJSON.name; }
if (!config.description) { config.description = packageJSON.description; }
if (!config.repository) {
  if (packageJSON.repository && typeof packageJSON.repository === 'string') { config.repository = packageJSON.repository; }
  if (packageJSON.repository && typeof packageJSON.repository === 'object') { config.repository = packageJSON.repository.url; }
}

// Create meta object for docs that gets saved as `meta.json`
docsMeta = {
  modules: [],
  classes: [],
  namespaces: [],
  name: config.name,
  description: config.description,
  version: config.version,
  repository: config.repository,
  logo: config.logo
};


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
  const classItems = data.classitems;

  for (let classItem in classItems) {
    if (!classItems.hasOwnProperty(classItem)) { return; }
    let classData = classItems[classItem];

    // Parse description if it exists
    if (classData.description) {
      classData.description = parseMarkdown(classData.description);
    }

    // Attach to the right parent class
    if (classData.class) {
      docClasses[classData.class].classitems.push(classData);
    }
  }

  for (let docClass in docClasses) {
    if (!docClasses.hasOwnProperty(docClass)) { return; }
    let docData = docClasses[docClass];
    let docSaveName = `${caseMagic.kebab(docData.name)}.json`;

    // Update meta w/ class
    docsMeta.classes.push({
      id: caseMagic.kebab(docData.name),
      name: docData.name,
      type: 'classes'
    });

    if (docData.description) {
      docData.description = parseMarkdown(docData.description);
    }

    try {
      docData = JSON.stringify(docData, null, 2);
      fs.writeFileSync(path.join(output.path, docSaveName), docData, {encoding: 'utf8'});
    } catch(ex) {
      console.warn('Unable to save class JSON');
    }
  }

  try {
    data = JSON.stringify(data, null, 2);
    docsMeta = JSON.stringify(docsMeta, null, 2);
    fs.writeFileSync(path.join(output.path, output.filename), data, {encoding: 'utf8'});
    fs.writeFileSync(path.join(output.path, 'meta.json'), docsMeta, {encoding: 'utf8'});
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
execSync(`./node_modules/.bin/yuidoc ${entry} --parse-only --quiet --outdir ${output.path}/tmp`, function(err, stdout, stderr) {
  if (err !== null) { return console.warn('exec error: ' + err); }

  // decorate data.json
  let docsData;

  try {
    docsData = fs.readFileSync(path.join(output.path, 'tmp', 'data.json'), { encoding: 'utf8' });
    docsData = JSON.parse(docsData);
  } catch(ex) {
    console.warn('Unable to parse docs JSON');
  }

  decorateData(docsData);
});

module.exports = {
  name: 'fountainhead-gendocs',
  description: 'Generate json from your YUIDoc code comment blocks',

  run: function() {
    // no-op
    console.log('do something here or something.');
  }
};

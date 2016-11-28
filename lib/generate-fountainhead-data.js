'use strict';
const fs = require('fs');
const path = require('path');
const caseMagic = require('case');

const parseMarkdown = require('./parse-markdown');
const generateFile = require('./generate-file');

/**
 * Handle parsing/decorating generated yuidoc data.
 * @class generateFountainheadData
 * @constructor
 * @param {Object} config Project configuration file
 * @param {Object} data   Raw yuidoc generated documentation data
 * @return {undefined}
 */
module.exports = function generateFountainheadData(config, data) {
  const docClasses = data.classes;
  const classItems = data.classitems;
  const output = config.output;

  // Create meta object for docs that gets saved as `meta.json`
  let docsMeta = {
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
  // Parse Class Items
  // ========================================================

  /*
   * For each entry in the class items documentation object, handle decoration
   * Then attach the individual entry to its owning class
   */
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


  // ========================================================
  // Parse and Save Documentation Classes
  // ========================================================

  /*
   * Now that all of the documentation class items have been parsed and attached
   * to their parent class, handle decorating and saving individual class files
   */
  for (let docClass in docClasses) {
    // @TODO: move into a separate module
    if (!docClasses.hasOwnProperty(docClass)) { return; }
    let docData = docClasses[docClass];
    let kebabbedDoc = caseMagic.kebab(docData.name);
    let docSaveName = `${kebabbedDoc}.json`;

    // Update meta w/ class
    docsMeta.classes.push({
      id: kebabbedDoc,
      name: docData.name,
      type: 'classes'
    });

    // Add file snake path reference
    docData.fileJSON = `${docData.file.replace(/\/|\\/g, '_')}`;

    // Parse class markdown description
    if (docData.description) {
      docData.description = parseMarkdown(docData.description);
    }

    // Pass file path to utility that reads/highlights and saves a version of the file
    generateFile(docData.file, output.path, docData.fileJSON);

    // Attempt to stringify and save documentation class file
    try {
      docData = JSON.stringify(docData, null, 2);
      fs.writeFileSync(path.join(output.path, 'classes', docSaveName), docData, {encoding: 'utf8'});
    } catch(ex) {
      console.warn('Unable to save class JSON');
    }
  }


  // ========================================================
  // Save Fountainhead Master and Meta Data Files
  // ========================================================

  /*
   * SHABANGLE!!! Documentation classes have been generated and saved. Finish
   * generating fountainhead data by saving master data file and documentation
   * meta file
   */
  try {
    data = JSON.stringify(data, null, 2);
    docsMeta = JSON.stringify(docsMeta, null, 2);
    fs.writeFileSync(path.join(output.path, output.filename), data, {encoding: 'utf8'});
    fs.writeFileSync(path.join(output.path, 'meta.json'), docsMeta, {encoding: 'utf8'});
  } catch(ex) {
    console.warn('Unable to decorate docs JSON');
  }
};

'use strict';
const fs = require('fs');
const path = require('path');
const caseMagic = require('case');

const parseMarkdown = require('./parse-markdown');

const generateModules = require('./data-types/generate-modules');
const generateSrcFile = require('./data-types/generate-src-file');

/*
 * Use to save JS objects to files. Accepts a path and raw data to parse
 */
function saveObjectToJSON(filePath, data) {
  // Stringify before saving
  try {
    data = JSON.stringify(data, null, 2);
  } catch(ex) {
    console.warn('Unable to save class JSON');
  }

  fs.writeFile(filePath, data, err => {
    if (err) { console.warn(`Unable to save ${filePath}`); }
  });
}

/**
 * Handle parsing/decorating generated yuidoc data.
 * @class generateFountainheadData
 * @constructor
 * @param {Object} config Project configuration file
 * @param {Object} data   Raw yuidoc generated documentation data
 * @return {undefined}
 */
module.exports = function generateFountainheadData(config, data) {
  const classes = data.classes;
  const classItems = data.classitems;
  const output = config.output;

  // Create meta object for docs that gets saved as `meta.json`
  let docsMeta = {
    classes: [],
    namespaces: [],
    name: config.name,
    description: config.description,
    version: config.version,
    repository: config.repository,
    logo: config.logo
  };

  // ========================================================
  // Parse Modules
  // ========================================================
  const modulesData = generateModules(data.modules);
  // Update addon meta
  docsMeta.modules = modulesData.modulesMeta;
  // Save each module
  modulesData.modulesDatas.forEach(moduleData => {
    saveObjectToJSON(path.join(output.path, 'modules', `${moduleData.id}.json`), moduleData);
  });


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
      classes[classData.class].classitems.push(classData);
    }
  }


  // ========================================================
  // Parse and Save Documentation Classes
  // ========================================================

  /*
   * Now that all of the documentation class items have been parsed and attached
   * to their parent class, handle decorating and saving individual class files
   */
  for (let docClass in classes) {
    // @TODO: move into a separate module
    if (!classes.hasOwnProperty(docClass)) { return; }
    let docData = classes[docClass];
    let kebabbedDoc = caseMagic.kebab(docData.name);
    let docSaveName = `${kebabbedDoc}.json`;
    let srcFileId = docData.file.replace(/\/|\\/g, '_');
    let srcFileName = `${srcFileId}.json`;

    // Update meta w/ class
    docsMeta.classes.push({
      id: kebabbedDoc,
      name: docData.name,
      type: 'classes'
    });

    // Add file snake path reference
    // @TODO: Deprecate and start using srcFileId in addon
    docData.fileJSON = `${docData.file.replace(/\/|\\/g, '_')}`;
    docData.srcFileId = srcFileId;

    // Parse class markdown description
    if (docData.description) {
      docData.description = parseMarkdown(docData.description);
    }

    // Class object is fully decorated and ready to be saved
    saveObjectToJSON(
      path.join(output.path, 'classes', docSaveName),
      docData
    );

    // ========================================================
    // Generate Prism Highlighted Src File for Class
    // ========================================================

    // Read file contents and apply syntax highlighting
    fs.readFile(path.resolve(docData.file), { encoding: 'utf8' }, (err, fileContents) => {
      if (err) { return console.warn(`Unable to save file: ${docData.file}`); }

      saveObjectToJSON(
        path.join(output.path, 'files', srcFileName),
        { file: docData.file, content: generateSrcFile(fileContents) }
      );
    });
  }


  // ========================================================
  // Save Fountainhead Master and Meta Data Files
  // ========================================================

  /*
   * SHABANGLE!!! Documentation classes have been generated and saved. Finish
   * generating fountainhead data by saving master data file and documentation
   * meta file
   */
  saveObjectToJSON(
    path.join(output.path, output.filename),
    data
  );
  saveObjectToJSON(
    path.join(output.path, 'meta.json'),
    docsMeta
  );
};

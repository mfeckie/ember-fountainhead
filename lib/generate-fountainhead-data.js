'use strict';
const fs = require('fs');
const path = require('path');

const generateClasses = require('./data-types/generate-classes');
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
 * This module handles coordinating parsing/reading/saving all of the individual
 * Fountainhead data files after the configs have been validated and the raw
 * YUIDoc data has been generated.
 *
 * Module should:
 * - create and populate `docsMeta` that will be saved as `meta.json`
 * - generate decorated modules files
 * - generate decorated class files
 * - generate decorated src file files
 *
 * @class generateFountainheadData
 * @constructor
 * @uses DataTypes.GenerateModules
 * @uses DataTypes.GenerateClasses
 * @uses DataTypes.GenerateSrcFile
 * @param {Object} config Project configuration file
 * @param {Object} data   Raw yuidoc generated documentation data
 * @return {undefined}
 */
module.exports = function generateFountainheadData(config, data) {
  const output = config.output;

  // Create meta object for docs that gets saved as `meta.json`
  let docsMeta = {
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
    saveObjectToJSON(
      path.join(output.path, 'modules', `${moduleData.id}.json`),
      moduleData
    );
  });

  // ========================================================
  // Parse Classes and Class Items
  // ========================================================
  const classesData = generateClasses(data.classes, data.classitems);
  // Update addon meta
  docsMeta.classes = classesData.classesMeta;
  // Save each class && save class' source file
  classesData.classesDatas.forEach(classData => {
    saveObjectToJSON(
      path.join(output.path, 'classes', `${classData.id}.json`),
      classData
    );

    // If a class doesn't have a file somehow don't attempt to read the src
    if (!classData.file) { return; }

    // Read file contents and apply syntax highlighting
    fs.readFile(path.resolve(classData.file), { encoding: 'utf8' }, (err, fileContents) => {
      if (err) { return console.warn(`Unable to save file: ${classData.file}`); }

      saveObjectToJSON(
        path.join(output.path, 'files', `${classData.srcFileId}.json`),
        { file: classData.file, content: generateSrcFile(fileContents) }
      );
    });
  });


  // ========================================================
  // Save Fountainhead Master and Meta Data Files
  // ========================================================

  /*
   * SHABANGLE!!! Documentation files have been generated and saved. Finish
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

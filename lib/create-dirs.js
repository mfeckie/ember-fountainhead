'use strict';
const fs = require('fs');
const path = require('path');
const pathSep = require('path').sep;
const CWD = process.cwd();

/**
 * Handle creating output directories for Fountainhead data.
 * @class createDirs
 * @constructor
 * @param {Object} output Project output configurations
 * @return {undefined}
 */
module.exports = function createDirs(output) {
  const classesPath = path.resolve(output.path, 'classes');
  const filesPath = path.resolve(output.path, 'files');
  const modulesPath = path.resolve(output.path, 'modules');

  /**
   * Synchronous mkdir that handles creating a potentially nested directory
   * @method mkdirSync
   * @param {string} dirPath Directory path to create, can be nested
   * @return {undefined}
   */
  function mkdirSync(dirPath) {
    // Get relative path to output
    const relativePath = dirPath.replace(`${CWD}${pathSep}`, '');
  	const dirs = relativePath.split(pathSep);
  	let currentDir = CWD;

    // Check if each dir exists, and if not, create it
    dirs.forEach(dir => {
      currentDir = path.resolve(currentDir, dir);
      if(!fs.existsSync(currentDir)) {
        fs.mkdirSync(currentDir);
      }
    });
  }

  // Make sure required documentation output folders exist
  [classesPath, filesPath, modulesPath].forEach(dirPath => mkdirSync(dirPath));
};

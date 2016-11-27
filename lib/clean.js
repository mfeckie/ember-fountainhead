'use strict';

const fs = require('fs');
const path = require('path');
const pathSep = require('path').sep;
const CWD = process.cwd();

/*
 * Synchronous mkdir that handles creating a potentially nested directory
 * @param {string outputPath Project configuration output path
 * @return {undefined}
 */
function mkdirSync(outputPath) {
  // Get relative path to output
  const relativePath = outputPath.replace(`${CWD}${pathSep}`, '');
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

/**
 * Handle validating existence of output directory and creating directory if
 * needed. If any files exist inside output directory, delete them.
 * @class clean
 * @constructor
 * @param {Object} output Project output configurations
 * @return {undefined}
 */
module.exports = function clean(output) {
  let outputFiles;
  const tmpPath = path.resolve(output.path, 'tmp');
  const classesPath = path.resolve(output.path, 'classes');
  const filesPath = path.resolve(output.path, 'files');
  const modulesPath = path.resolve(output.path, 'modules');

  // Make sure an output folder directory exists, if not make one
  try {
    fs.statSync(output.path);
  } catch(ex) {
    mkdirSync(output.path);
  }

  // Make sure required documentation output folders exist
  [tmpPath, classesPath, filesPath, modulesPath].forEach(function(dirPath) {
    try {
      fs.statSync(dirPath);
    } catch(ex) {
      mkdirSync(dirPath);
    }
  });

  // Delete all files in output directory
  outputFiles = fs.readdirSync(output.path);

  outputFiles.forEach(file => {
    let filePath = path.resolve(output.path, file);
    let fileStats = fs.statSync(filePath);

    if (fileStats.isFile()) {
      fs.unlinkSync(path.resolve(filePath));
    }
  });
};

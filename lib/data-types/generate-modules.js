'use strict';
const caseMagic = require('case');

const parseMarkdown = require('../parse-markdown');

/**
 * Handle parsing/decorating raw YUIDoc modules data including:
 * - Generate meta objects for each module that can be used for the sidebar nav
 * - Create an array of modules from YUIDoc object of modules for standard lib format
 * - Parse module markdown description to HTML
 *
 * @class DataTypes.GenerateModules
 * @param {Object} modules YUIDoc raw modules object
 * @return {Object} Returns object: `{ modulesMeta, modulesDatas }` for saving
 */
module.exports = function generateModules(modules) {
  let modulesMeta = [];
  let modulesDatas = [];


  for (let module in modules) {
    if (!modules.hasOwnProperty(module)) { return; }
    let moduleData = modules[module];
    const id = caseMagic.kebab(moduleData.name);

    // Add module meta
    modulesMeta.push({
      name: moduleData.name,
      type: 'modules',
      id
    });

    // Handle converting markdown to html
    if (moduleData.description) {
      moduleData.description = parseMarkdown(moduleData.description);
      moduleData.id = id;
    }

    // Add module object that will be saved as individual file
    modulesDatas.push(moduleData);
  }

  return {
    modulesMeta: modulesMeta,
    modulesDatas: modulesDatas
  };
};

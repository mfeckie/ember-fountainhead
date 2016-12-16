'use strict';
// const caseMagic = require('case');

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


  for (let moduleKey in modules) {
    if (!modules.hasOwnProperty(moduleKey)) { return; }

    const module = modules[moduleKey];
    // const id = caseMagic.kebab(module.name);
    // module.id = id;

    // Add module meta
    modulesMeta.push({
      name: module.name,
      type: 'modules'
    });

    // Handle converting markdown to html
    if (module.description) {
      module.description = parseMarkdown(module.description);
    }

    // Add module object that will be saved as individual file
    modulesDatas.push(module);
  }

  // Alphabetize meta for sidebar display
  modulesMeta.sort((a, b) => a.name < b.name ? -1 : 1);

  return {
    modulesMeta: modulesMeta,
    modulesDatas: modulesDatas
  };
};

'use strict';
const caseMagic = require('case');

const parseMarkdown = require('../parse-markdown');

/**
 * Module handles decorating and compiling classes and their class items including:
 * - Compiling each class item to its class
 * - Creating an id for class and class src file
 * - Parsing class and class item descriptions markdown to HTML
 * @class DataTypes.GenerateClasses
 * @constructor
 * @param {Object} classes    Object of raw YUIDoc classes
 * @param {Object} classItems Object of raw YUIDoc classItems
 * @return {Object} Returns object: `{ classesMeta, classesDatas }` for saving
 */
module.exports = function generateClass(classes, classItems) {
  let classesMeta = [];
  let classesDatas = [];

  // Prep class by adding arrays for methods/properties/events
  for (let classKey in classes) {
    if (!classes.hasOwnProperty(classKey)) { return; }
    Object.assign(classes[classKey], { methods: [], properties: [], events: [] });
  }

  /*
   * For each entry in the classItems documentation object, handle decoration
   * Then attach the individual entry to its owning class, and to namespaced
   * class item array
   */
  for (let classItemKey in classItems) {
    if (!classItems.hasOwnProperty(classItemKey)) { return; }

    let classItem = classItems[classItemKey];

    // Parse description if it exists
    if (classItem.description) {
      classItem.description = parseMarkdown(classItem.description);
    }

    // Attach to the right parent class
    if (classItem.class) {
      classes[classItem.class].classitems.push(classItem);
    }

    // Push to type array on parent class as well
    switch(classItem.itemtype) {
      case 'property':
        classes[classItem.class].properties.push(classItem);
        break;
      case 'method':
        classes[classItem.class].methods.push(classItem);
        break;
      case 'event':
        classes[classItem.class].events.push(classItem);
        break;
    }
  }


  for (let classKey in classes) {
    if (!classes.hasOwnProperty(classKey)) { return; }

    const klass = classes[classKey];
    const id = caseMagic.kebab(klass.name);
    klass.id = id;

    // Add class meta
    classesMeta.push({
      name: klass.name,
      type: 'classes',
      id
    });

    // Add src file id for reference
    klass.srcFileId = klass.file.replace(/\/|\\/g, '_');

    // Parse class markdown description
    if (klass.description) {
      klass.description = parseMarkdown(klass.description);
    }

    // Add class object that will be saved as individual file
    classesDatas.push(klass);
  }

  return {
    classesMeta: classesMeta,
    classesDatas: classesDatas
  };
};

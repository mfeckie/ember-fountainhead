'use strict';
const frontMatter = require('front-matter');

const parseMarkdown = require('../parse-markdown');

/**
 * Handle syntax highlighting and creating meta information for a src file
 * @class DataTypes.GenerateSrcFile
 * @constructor
 * @param {Object} guideOptions Options for generating guide data
 * @param {string} guideOptions.fileContents Contents of the guide in a string
 * @param {string} guideOptions.guidePath    File path to guide src
 * @return {Object} Return an object with guide data in the form of:
 *                  `{ attributes, body }`
 *                  With the body parsed for markdown and glimmer contents
 */
module.exports = function generateGuide(guideOptions) {
  let guideContents = guideOptions.fileContents;
  let guidePath = guideOptions.guidePath;

  if (!guideContents) { return console.error('Cannot generate guide with no guide contents'); }

  // Use front-matter to pull guide meta data out and get guide contents
  const guideData = frontMatter(guideContents);
  // Fallback to the guide file path if an id isn't declared
  guideData.id = guideData.attributes.id || guidePath.replace(/\\|\//g, '_');
  guideData.body = parseMarkdown(guideData.body);

  return guideData;
};

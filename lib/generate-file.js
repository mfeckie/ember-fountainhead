'use strict';

const path = require('path');
const fs = require('fs');

const Prism = require('prismjs');
require('prismjs/components/prism-handlebars');

/**
 * Attempt to read and syntax highlight a passed filepath and then save to the
 * `${output}/files` filepath
 * @class generateFile
 * @constructor
 * @param {string} filePath File filepath from class definition
 */
module.exports = function generateFile(filePath, outputPath, fileName) {
  let fileJSON = { file: filePath, content: '' };
  fileName = `${fileName}.json`;
  filePath = path.resolve(filePath);

  // Attempt to read file contents and apply syntax highlighting
  fs.readFile(filePath, { encoding: 'utf8' }, function(err, fileContents) {
    if (err) { return console.warn(`Unable to save file: ${fileName}`); }

    try {
      // fileContents = `<pre class=\"language-javascript line-numbers\"><code class=\"language-javascript}\">${fileContents}</code></pre>`;
      fileJSON.content = `<pre class=\"language-javascript line-numbers\"><code class=\"language-javascript}\">${Prism.highlight(fileContents, Prism.languages.javascript)}</code></pre>`;

      // Making some line numbers for now
      let fileLines = fileJSON.content.match(/\n(?!$)/g);

      fileLines = fileLines ? fileLines.length + 1 : 1;

      let linesSpan = new Array(fileLines);
      linesSpan = linesSpan.join('<span></span>');

      fileJSON.content = fileJSON.content.replace(
        /<code\s\S*>/, `<code class=\"language-javascript}\"><span aria-hidden=\"true\" class=\"line-numbers-rows\">${linesSpan}</span>`
      );

      fileJSON = JSON.stringify(fileJSON, null, 2);
    } catch(ex) {
      return console.warn(`Failed parsing file: ${fileName}`, ex);
    }

    fs.writeFile(path.join(outputPath, 'files', fileName), fileJSON, {encoding: 'utf8'}, function(ex) {
      if (ex) { console.warn(`Unable to save file: ${fileName}`); }
    });
  });
};

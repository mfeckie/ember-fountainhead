'use strict';
const Prism = require('prismjs');
require('prismjs/components/prism-handlebars');

/**
 * Handle syntax highlighting and creating meta information for a src file
 * @class DataTypes.GenerateSrcFile
 * @constructor
 * @param {string} filePath File filepath from class definition
 */
module.exports = function generateFile(srcFile) {
  try {
    srcFile =
    `<pre class=\"language-javascript line-numbers\"><code class=\"language-javascript}\">${Prism.highlight(
      srcFile, Prism.languages.javascript
    )}</code></pre>`;
  } catch(ex) {
    return console.warn('Failed parsing file src file', ex);
  }

  // Making some line numbers for now b/c Prism line numbers doesn't support Node
  let fileLines = srcFile.match(/\n(?!$)/g);

  fileLines = fileLines ? fileLines.length + 1 : 1;

  let linesSpan = new Array(fileLines);
  linesSpan = linesSpan.join('<span></span>');

  srcFile = srcFile.replace(/<code\s\S*>/,
    `<code class=\"language-javascript}\"><span aria-hidden=\"true\" class=\"line-numbers-rows\">${linesSpan}</span>`
  );

  return srcFile;
};

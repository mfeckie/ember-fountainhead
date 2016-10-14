'use strict';

const hljs = require('highlight.js');
const md = require('markdown-it')({
  html: true, // Allow html tags
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs ${lang}"><code>` +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (ex) {
        console.warn('Failed parsing language: ', ex);
      }
    }

    return ''; // use external default escaping
  }
});

// Run markdown on each class description
module.exports = description => {
  // Parse description markdown
  description = md.render(description);

  // Check for codeblocks, we need to escape double curlies b/c these are code examples
  let codeBlocks = description.match(/<code([\s\S]*?)<\/code/g);

  if (codeBlocks) {
    // If there are code blocks in this description, sanitize them for templates
    codeBlocks.forEach(function(codeBlock) {
      if (codeBlock.indexOf('{{') === -1 ) { return; } // If there's not a double curly do less

      var sanitizedBlock = codeBlock.replace(/{{/g, '\\{{'); // Prep sanitized block version
      description = description.replace(codeBlock, sanitizedBlock); // Replace block in description w/ sanitized version
    });
  }

  // Replace weird “ that markdown inserts b/c it breaks the template compiler
  description = description.replace(/[“”]/g, '\"');
  description = description.replace(/&quot;/g, '\'');

  return description;
};

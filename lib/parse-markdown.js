'use strict';
const Prism = require('prismjs');
// Prism will attach required modules through some globals majic spells
require('prismjs/components/prism-handlebars');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-diff');
require('prismjs/components/prism-json');
require('prismjs/components/prism-scss');

/**
 * Handle parsing markdown using [Prism](http://prismjs.com/)
 * @class parseMarkdown
 * @constructor
 * @param {string} description Markdown string to parse
 * @return {string} HTML string parsed from passed markdown
 */

const md = require('markdown-it')({
  html: true, // Allow html tags
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    // We support flagging code blocks with `glimmer` or `htmlbars`, but Prism
    // only recognizes 'handlebars'
    if (lang === 'glimmer' || lang === 'htmlbars' ) { lang = 'handlebars'; }

    if (lang && Prism.languages[lang]) {
      try {
        return `<pre class=\"language-${lang}\"><code class=\"language-${lang}\">` +
          Prism.highlight(str, Prism.languages.javascript) +
          '</code></pre>';
      } catch(ex) {
        console.warn('Failed parsing language: ', ex);
        return '';
      }
    }

    return ''; // use external default escaping
  }
});

/**
 * Scans the description text for instances of markdown code blocks flagged
 * as `"glimmer"` syntax. If any such instances are found, they are copied,
 * stripped of their triple backticks and re-inserted into the
 * `templateString` immediately after the original declaration. This allows
 * for functional copies of your code examples to be automatically rendered
 * into the description, without having to duplicate the code block itself.
 *
 * If your functional code needs to have different setup to work correctly in
 * the Fountainhead context (for example, if you need to use `core-state` to
 * set up sandboxed state and controls), simply use `"handlebars"` or no
 * syntax flag, and manually add the code block you want Fountainhead to
 * render after your example. Neato!
 *
 * @method _renderCodeBlocks
 * @param {String} description The description text to scan for code blocks
 * @return {String}
 */
const renderCodeBlocks = function(description) {
  // Look for triple backtick code blocks flagged as `glimmer`;
  // define end of block as triple backticks followed by a newline
  let matches = description.match(/(```glimmer)(.|\n)*?```\n/gi);

  if (matches && matches.length) {
    matches.map(codeBlock => {
      let blockEnd = codeBlock.length + description.indexOf(codeBlock);
      let plainCode = codeBlock.replace(/(```glimmer|```)/gi, '');
      description = `${description.slice(0, (blockEnd))}${plainCode}${ description.slice(blockEnd)}`;
    });
  }

  return description;
};

// Export parse function
module.exports = function parseMarkdown(description) {

  // Check for glimmer code blocks and make them REAL BOYS AND GIRLS
  description = renderCodeBlocks(description);

  // Parse description markdown
  description = md.render(description);

  // Check for codeblocks, we need to escape double curlies b/c these are code examples
  let codeBlocks = description.match(/<code([\s\S]*?)<\/code/g);

  if (codeBlocks) {
    // If there are code blocks in this description, sanitize them for templates
    codeBlocks.forEach(function(codeBlock) {
      if (codeBlock.indexOf('{{') === -1 ) { return; } // If there's not a double curly do less

      var sanitizedBlock = codeBlock.replace(/{{/g, '\\{{'); // Prep sanitized block version
      // Replace block in description w/ sanitized version
      description = description.replace(codeBlock, sanitizedBlock);
    });
  }

  // Markdown-it replaces single and double quotes with fancy characters which
  // break the runtime template compiler. Handle sanitizing them here.
  description = description.replace(/[“”]/g, '\"'); // Double quotes
  description = description.replace(/&quot;|‘|’/g, '\''); // Single quotes

  return description;
};

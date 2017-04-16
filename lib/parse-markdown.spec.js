const assert = require('assert');
const parseMarkdown = require('./parse-markdown');
const rawMarkdown = require('./test-fixtures/raw-markdown');
const parsedMarkdown = require('./test-fixtures/parsed-markdown');

/*
 * Test:
 * - Markdown is actually parsed
 * - Prism is called on code blocks
 * - Glimmer blocks are escaped in inline code blocks
 * - Glimmer blocks are escaped in code blocks
 * - Typogaphic quotes are NOT returne in glimmer expressions
 * - for ```glimmer code blocks, the contents are copied after the code block
 */


describe('parse-markdown', () => {
  it('parses any passed string to html', () => {
    let content = 'Plain string';
    let expected = '<p>Plain string</p>\n';
    assert.equal(parseMarkdown(content), expected, 'parses strings to html');
  });

  it('highlights code blocks', () => {
    let content = '```javascript\nlet x = true;\n```';
    let expected = '<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre>\n';

    assert.equal(parseMarkdown(content), expected, 'highlights code blocks');
  });

  // it('attaches markdown-it-attrs to blocks', () => {
  //   let content = '# H1 with attr {.test-mode}';
  //   let expected = '<h1 class="test-mode">H1 with attr</h1>\n';
  //   assert.equal(parseMarkdown(content), expected, 'attaches attrs to block token');
  // });

  // it('attaches markdown-it-attrs after glimmer blocks', () => {
  //   let content = '{{some-component}}\n\n# H1 with attr {.test-mode}';
  //   let expected = '{{some-component}}\n<h1 class="test-mode">H1 with attr</h1>\n';
  //   assert.equal(parseMarkdown(content), expected, 'attaches attrs to block token');
  // });

  // it('markdown-it-attrs doesnt change internal component content', () => {
  //   let content = '{{#some-component}}\n  Internal content {{someProp}}\n{{/some-component}\n\n# H1 with attr {.test-mode}';
  //   let expected = '{{#some-component}}\n  Interntal content {{someProp}}\n{{/some-component}\n<h1 class="test-mode">H1 with attr</h1>\n';
  //   assert.equal(parseMarkdown(content), expected, 'attaches attrs to block token');
  // });

  it('escapes glimmer expressions in inline code blocks', () => {
    let content = '`{{some-component}}`';
    let expected = '<p><code>\\{{some-component}}</code></p>\n';
    assert.equal(parseMarkdown(content), expected,
      'escapes glimmer components in inline code block');
  });

  it('escapes glimmer expressions in code blocks', () => {
    let content = '```\n{{some-component}}\n```';
    let expected = '<pre><code>\\{{some-component}}\n</code></pre>\n';
    assert.equal(parseMarkdown(content), expected,
      'escapes glimmer components in code blocks');
  });

  it('typographic quotes are no used inside of glimmer expressions', () => {
    let content = '{{some-component someProp="uses quotes"}}';
    let expected = '<p>{{some-component someProp="uses quotes"}}</p>\n';
    assert.equal(parseMarkdown(content), expected, 'sanitizes double quotes');

    content = '{{some-component someProp=\'uses quotes\'}}';
    expected = '<p>{{some-component someProp=\'uses quotes\'}}</p>\n';
    assert.equal(parseMarkdown(content), expected, 'sanitizes single quotes');
  });

  it('creates an intance of glimmer code blocks immediately after', () => {
    let content = '```glimmer\n{{component-example}}\n```\n';
    let expected = '<pre class="language-handlebars"><code class="language-handlebars"><span class="token punctuation">{</span><span class="token punctuation">{</span>component<span class="token operator">-</span>example<span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n<p>{{component-example}}</p>\n';

    assert.equal(parseMarkdown(content), expected,
      'injects glimmer expression after example code block');
  });

  // Validate assumptions from libraries
  // ---------------------------------------------------------------------------
  it('typographic quotes not added inside of html blocks', () => {
    let content = '<div>{{some-component prop="safe"}}</div>';
    let expected = '<div>{{some-component prop="safe"}}</div>';
    assert.equal(parseMarkdown(content), expected,
      'safe quotes are returned in html blocks');
  });

  // Test fixtures
  // ---------------------------------------------------------------------------
  it('parses all expected markdown from fixture data', () => {
    assert.equal(parseMarkdown(rawMarkdown), parsedMarkdown,
      'all examples in rawMarkdown are parsed as expected');
  });
});

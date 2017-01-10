const assert = require('assert');
const parseMarkdown = require('./parse-markdown');

describe('parse-markdown', () => {
  it('parses any passed string to html', () => {
    let content = 'Plain string';
    let expected = '<p>Plain string</p>\n';
    assert.equal(parseMarkdown(content), expected, 'parses strings to html');
  });

  it('escapes curlies in code blocks', () => {
    let content = '```{{some-component}}```';
    let expected = '<p><code>\\{{some-component}}</code></p>\n';
    assert.equal(parseMarkdown(content), expected, 'escapes glimmer components');
  });

  it('sanitizes apostrophes', () => {
    let content = '{{some-component someProp="uses quotes"}}';
    let expected = '<p>{{some-component someProp="uses quotes"}}</p>\n';
    assert.equal(parseMarkdown(content), expected, 'sanitizes double quotes');

    content = '{{some-component someProp=\'uses quotes\'}}';
    expected = '<p>{{some-component someProp=\'uses quotes\'}}</p>\n';
    assert.equal(parseMarkdown(content), expected, 'sanitizes single quotes');
  });
});

module.exports =
`{{#fountainhead-header tagName="h1" elementId="test-markdown-fixture"}}Test Markdown Fixture{{/fountainhead-header}}
<p>This is the raw markdown fixture for testing markdown parsing rules against
expected results. When you add new rules to the markdown-it or change pre
filters, add applicable test cases here!</p>
{{#fountainhead-header tagName="h2" elementId="headers-should-be-components"}}Headers Should Be Components{{/fountainhead-header}}
<p>All headers in markdown should be converted into <code>\\{{ember-fountainhead}}</code>
components.</p>
<p>Any glimmer component in an inline code block should have the opening double curlies
escaped: <code>\\{{your-component}}</code></p>
`;

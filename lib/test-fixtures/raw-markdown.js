module.exports =
`# Test Markdown Fixture
This is the raw markdown fixture for testing markdown parsing rules against
expected results. When you add new rules to the markdown-it or change pre
filters, add applicable test cases here!

## Headers Should Be Components
All headers in markdown should be converted into \`{{ember-fountainhead}}\`
components.

Any glimmer component in an inline code block should have the opening double curlies
escaped: \`{{your-component}}\`
`;

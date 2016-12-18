const assert = require('assert');
const generateSrcFile = require('./generate-src-file');

const rawData =
`function mkdirSync(outputPath) {
  // Get relative path to output
  const relativePath = outputPath.replace('CWD', '');
	const dirs = relativePath.split(pathSep);
	let currentDir = CWD;

  // Check if each dir exists, and if not, create it
  dirs.forEach(dir => {
    currentDir = path.resolve(currentDir, dir);
    if(!fs.existsSync(currentDir)) {
      fs.mkdirSync(currentDir);
    }
  });
}`;

describe('generate-src-file', function() {
  it('highlights src file with Prism and injects line numbers span', () => {
    const actual = generateSrcFile(rawData);

    // Currently generate-scr-file only highlights and injects line numbers
    assert.equal(typeof actual, 'string', 'src file should remain a string');
    assert.ok(actual.includes(
      '<pre class="language-javascript line-numbers"><code class="language-javascript}">'),
      'prepends pre and code tags');
    assert.ok(actual.match(/<span aria-hidden="true" role="presentation" class="line-numbers-rows">/g),
      'injects line numbers wrapping span');
  });
});

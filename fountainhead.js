module.exports = {
  name: 'Fountainhead Docs',
  description: 'The documentation for Fountainhead Docs... how meta',
  version: '1.0.0',
  repository: null,
  logo: null,
  entry: [
    'addon', 'lib'
  ],
  output: {
    filename: 'fountainhead-data.json',
    path: 'public/docs'
  },
  external: {
    data: [
      {
        base: 'http://emberjs.com/api/',
        json: 'http://builds.emberjs.com/release/ember-docs.json'
      }
    ]
  }
};

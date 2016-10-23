module.exports = {
  name: 'Fountainhead Docs',
  description: 'The documentation for Fountainhead Docs... how meta',
  entry: [
    'addon'
  ],
  external: {
    data: [
      {
        base: 'http://emberjs.com/api/',
        json: 'http://builds.emberjs.com/release/ember-docs.json'
      }
    ]
  }
};

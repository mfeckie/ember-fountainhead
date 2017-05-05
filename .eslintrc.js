'use strict';
const eloquence = require('@dhedgecock/eloquence');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    qunit: true,
    embertest: true,
    mocha: true
  },
  rules: eloquence.core
}

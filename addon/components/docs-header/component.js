import Ember from 'ember';
import layout from './template';

/**
 * Documents Header
 *
 * Contains neat stuff for the top of the page.
 * @class Component.DocsHeader
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Project name used as docs `<h1>`
   * @property projectName
   * @type {string}
   */
  name: '',
  /**
   * Project url, pulled from repository in `fountainhead.js` config or `package.json`
   * @property projectUrl
   * @type {string}
   */
  repository: '',
  /**
   * Project logo, pulled from configs
   * @property logo
   * @type {string}
   */
  logo: '',

  // Properties
  // ---------------------------------------------------------------------------

  layout,
  classNames: ['docs-header'],
  tagName: 'header'
});

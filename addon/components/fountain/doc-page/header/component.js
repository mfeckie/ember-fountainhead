import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Documentation generated `name` property
   * @property name
   * @type {string}
   */
  name: '',
  /**
   * Documentation generated `defined-in` property
   * @property file
   * @type {string}
   */
  file: '',

  // Properties
  // ---------------------------------------------------------------------------
  tagName: 'h2',
  classNames: ['fountain-doc-header'],

  // Layout
  // ---------------------------------------------------------------------------
  layout
});

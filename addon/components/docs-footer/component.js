import Ember from 'ember';
import layout from './template';

/**
 * Docs Footer
 *
 * Bottom stuff to know
 * @class Component.DocsFooter
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({

  // Properties
  // ---------------------------------------------------------------------------

  layout,
  /**
   * Bind `docs-footer` class
   * @property classNames
   * @type {Array}
   */
  classNames: ['docs-footer'],
  /**
   * Use `<footer>` element
   * @property tagName
   * @type {string}
   */
  tagName: 'footer',
  /**
   * Copyright year
   * @TODO: Make this dynamic (moment? prob not)
   * @property year
   * @type {number}
   * @default 2016
   */
  year: 2016
});

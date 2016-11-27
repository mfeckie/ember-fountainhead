import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Docs Footer
 *
 * Bottom stuff to know
 * @class Component.DocsFooter
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Properties
  // ---------------------------------------------------------------------------

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
  year: 2016,

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="copyright align-right">&copy; {{year}} HealthSparq Open Source Labs</div>
  `
});

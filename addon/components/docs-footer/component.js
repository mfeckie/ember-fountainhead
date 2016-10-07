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

  classNames: ['docs-footer'],
  tagName: 'footer',

  // @TODO: Make this dynamic (moment? prob not)
  year: '2016'
});

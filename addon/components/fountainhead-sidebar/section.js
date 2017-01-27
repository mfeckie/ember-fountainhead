import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Section Component for {{crosslink class='FountainheadSidebar.Sidebar'}}
 * @class FountainheadSidebar.Section
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  title: '',

  // Properties
  // ---------------------------------------------------------------------------

  classNames: ['sidebar-section'],

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <h4 class='section-header fh-element'>{{title}}</h4>
    {{yield}}
  `
});

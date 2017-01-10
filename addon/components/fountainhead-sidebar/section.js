import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

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

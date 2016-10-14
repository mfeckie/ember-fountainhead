import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';


export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  sectionTitle: '',

  // Properties
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{docs-sidebar.section.header sectionTitle=sectionTitle}}
    {{yield}}
  `
});

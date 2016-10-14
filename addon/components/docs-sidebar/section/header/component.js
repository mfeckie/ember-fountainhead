import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  sectionTitle: '',

  // Properties
  // ---------------------------------------------------------------------------

  classNames: ['section-header'],

  layout: hbs`{{sectionTitle}}`
});

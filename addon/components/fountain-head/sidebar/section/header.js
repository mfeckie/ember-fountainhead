import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  sectionTitle: '',

  // Properties
  // ---------------------------------------------------------------------------

  classNames: ['section-header'],

  layout: hbs`{{sectionTitle}}`
});

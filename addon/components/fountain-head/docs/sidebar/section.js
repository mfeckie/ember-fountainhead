import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  sectionTitle: '',

  // Properties
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="fh-section-header">{{sectionTitle}}</div>
    {{yield}}
  `
});

import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  title: '',

  // Properties
  // ---------------------------------------------------------------------------
  layout: hbs`
    <h4 class="section-header">{{title}}</h4>
    {{yield}}
  `
});

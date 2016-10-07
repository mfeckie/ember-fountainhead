import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  projectName: '',

  projectUrl: '',

  // Properties
  // ---------------------------------------------------------------------------

  layout,

  tagName: 'header'
});

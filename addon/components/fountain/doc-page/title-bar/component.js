import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  title: '',

  // Properties
  // ---------------------------------------------------------------------------

  classUrl: '',

  layout,

  tagName: 'h2',
  classNames: ['fountain-doc-title-bar']
});
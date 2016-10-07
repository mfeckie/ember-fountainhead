import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  items: [],

  // Properties
  // ---------------------------------------------------------------------------

  classNames: ['item-group'],

  layout,

  tagName: 'ul'
});

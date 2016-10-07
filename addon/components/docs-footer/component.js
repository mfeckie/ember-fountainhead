import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  // Properties
  // ---------------------------------------------------------------------------

  layout,

  tagName: 'footer',

  // @TODO: Make this dynamic (moment? prob not)
  thisYear: '2016'
});

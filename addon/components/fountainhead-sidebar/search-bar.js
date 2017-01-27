import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Not operational sidebar search component
 * @class FountainheadSidebar.SearchBar
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  layout: hbs`
    {{yield}}
  `
});

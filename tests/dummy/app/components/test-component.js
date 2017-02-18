import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Addon Test Component (Acceptance Testing)
 * @class TestComponent
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  layout: hbs`
    Test Component
    {{yield}}
  `
});

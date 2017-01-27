import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import inject from 'ember-service/inject';

/**
 * Fountainhead `/doc/index` page component
 * @class FountainheadPages.DocsIndex
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  fountainhead: inject(),

  layout: hbs`
    {{#if fountainhead.meta}}
      {{fountainhead-welcome}}
    {{else}}
      {{fountainhead-get-started}}
    {{/if}}
  `
});

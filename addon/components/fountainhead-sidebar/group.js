import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Group Component for {{crosslink class='FountainheadSidebar.Sidebar'}}
 * @class FountainheadSidebar.Group
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  items: [],

  // Properties
  // ---------------------------------------------------------------------------

  classNames: ['item-group'],
  tagName: 'ul',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#each items as |item|}}
      <li class='item-group-item'>
        {{link-to
          item.name
          (concat 'api.' item.type)
          item.name
          classNames='item-link fh-element'}}
        {{#if item.subItems}}
          {{fountainhead/sidebar/group items=item.subItems}}
        {{/if}}
      </li>
    {{else}}
      <li class='item-group-item'>Give me some items to display!</li>
    {{/each}}

  `
});

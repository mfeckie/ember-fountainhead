import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

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
      <li class="item-group-item">
        {{link-to item.name item.type item.id classNames="item-link"}}
        {{#if item.subItems}}
          {{fountain-head.sidebar.item-group items=item.subItems}}
        {{/if}}
      </li>
    {{else}}
      <li class="item-group-item">Give me some items to display!</li>
    {{/each}}

  `
});

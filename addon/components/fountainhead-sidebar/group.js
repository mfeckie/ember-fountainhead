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
      <li class='item-group-item'>
        {{link-to item.name (concat 'docs.' item.type) item.name classNames='item-link fh-element'}}
        {{#if item.subItems}}
          {{fountainhead/sidebar/group items=item.subItems}}
        {{/if}}
      </li>
    {{else}}
      <li class='item-group-item'>Give me some items to display!</li>
    {{/each}}

  `
});

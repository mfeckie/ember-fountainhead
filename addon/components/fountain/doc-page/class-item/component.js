import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Individual class property or method documentation item
 * @class Fountain.DocPage.ClassItem
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Documentation generated `classitem` property
   * @property classItem
   * @type {Object}
   */
  classItem: {},

  // Properties
  // ---------------------------------------------------------------------------
  classNames: ['class-item'],

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <h4>
      {{classItem.name}}
      <span class="item-type">{{classItem.type}}</span>
      {{#if classItem.params}}
        <span>(
          {{#each classItem.params as |param index|}}
            {{if index ', '}}{{param.name}}
          {{/each}}
          )</span>
      {{/if}}
      {{#if classItem.access}}
        <span class="item-access access-{{classItem.access}}">{{classItem.access}}</span>
      {{/if}}
    </h4>

    {{#if classItem.inherited}}
      <p class="small">Inherited from {{classItem.inherited}}</p>
    {{/if}}

    {{#if classItem.description}}
      {{fountain.doc-page.description description=classItem.description}}
    {{/if}}

    {{#if classItem.params}}
      <h5>Parameters</h5>
      <ul>
      {{#each classItem.params as |param|}}
        <li>
          <strong>{{param.name}} {{#if param.type}}- <span>{{param.type}}</span>{{/if}}</strong><br />
          {{param.description}}
        </li>
      {{/each}}
      </ul>
    {{/if}}

    {{#if classItem.default}}
      <p><strong>Default: </strong> <code>{{item.default}}</code></p>
    {{/if}}
  `
});

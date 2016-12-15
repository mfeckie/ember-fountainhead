import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Individual class property or method documentation item
 * @class FountainHead.Class.ClassItem
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Model backing this class item, generated by YUIDoc.
   * TODO: Document props of classItem and how they get used in template
   * @property classItem
   * @type {Object}
   */
  classItem: {},

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * Class names: `class-item`
   * @type {Array}
   */
  classNames: ['class-item'],

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Set the unique id that the `class-items-container` expects for each class
   * item in init. Id is the `itemtype_name` and is used to scroll to the
   * item when the name is clicked in the index list panel.
   * @method init
   */
  init() {
    this._super(...arguments);
    // Set a unique anchor for this element using type and name
    this.set('elementId', `${this.get('classItem.itemtype')}_${this.get('classItem.name')}`);
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <h4>
      {{classItem.name}}
      <span class="item-type">{{classItem.itemtype}}</span>
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
      {{fountain-head/runtime-description description=classItem.description}}
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
      <p><strong>Default: </strong> <code>{{classItem.default}}</code></p>
    {{/if}}
  `
});

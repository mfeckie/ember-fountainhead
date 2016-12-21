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
   * @property classNames
   * @type {Array}
   * @default ['fh-classitem']
   */
  classNames: ['fh-classitem'],

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
    {{! --------------------------------------------------------------------- }}
    {{! Item Header
    {{! --------------------------------------------------------------------- }}
    <h4 class="fh-header">
      {{classItem.name}}
      {{!-- <span class="item-type">{{classItem.itemtype}}</span> --}}
      {{#if classItem.params}}
        <span class="header-params">(
          {{#each classItem.params as |param index|}}
            {{if index ', '}}{{param.name}}
          {{/each}}
          )</span>
      {{else}}
        <span class="header-params">(&nbsp;&nbsp;&nbsp;)</span>
      {{/if}}
      {{#if classItem.return.type}}
        <span class="return-type">{{classItem.return.type}}</span>
      {{/if}}
      {{! Show type for props only }}
      {{#if (eq classItem.itemtype 'property')}}
        {{#if classItem.type}}
          <span class="item-type">{{classItem.type}}</span>
        {{/if}}
      {{/if}}
      {{! Begin Info Badges (access, static, deprecated) }}
      {{#if classItem.access}}
        <span class="item-access {{if (eq classItem.access 'public') 'fh-success' 'fh-alert'}}">
          {{classItem.access}}
        </span>
      {{/if}}
      {{#if classItem.static}}
        <span class="item-static fh-info">Static</span>
      {{/if}}
      {{#if classItem.deprecated}}
        <span class="item-static fh-alert">Deprecated</span>
      {{/if}}
    </h4>

    {{! --------------------------------------------------------------------- }}
    {{! Classitem Meta
    {{! --------------------------------------------------------------------- }}
    <div class="fh-meta">
      {{#if classItem.file}}
        <small class="fh-defined">Defined in:
          {{#link-to 'docs.files' classItem.srcFileId (query-params line=classItem.line)}}
            {{classItem.file}}:{{classItem.line}}
          {{/link-to}}
        </small>
      {{/if}}

      {{! TODO: Where is this coming from? }}
      {{! CHECKING INHERITED PROPS! TODO MAKE THIS WORK }}
      {{#if classItem.inherited}}
        <small class="fh-inherited">Inherited from: {{classItem.inherited}}</small>
      {{/if}}

      {{#if classItem.since}}
        <small class="fh-since">Available since: {{classItem.since}}</small>
      {{/if}}

      {{#if classItem.default}}
        <p class="fh-default"><span class="uppercase">Default: </span> <code>{{classItem.default}}</code></p>
      {{/if}}
    </div>

    {{! --------------------------------------------------------------------- }}
    {{! Deprecation Warning
    {{! --------------------------------------------------------------------- }}
    {{#if classItem.deprecated}}
      <div class="fh-deprecation-container">
        <h4 class="fh-deprecation-header">This {{classItem.itemtype}} is deprecated</h4>
        <div class="fh-deprecation-message">{{{classItem.deprecationMessage}}}</div>
      </div>
    {{/if}}

    {{! --------------------------------------------------------------------- }}
    {{! Special runtime description for classitem descriptions (components allowed)
    {{! --------------------------------------------------------------------- }}
    {{#if classItem.description}}
      {{fountain-head/shared/runtime-description description=classItem.description}}
    {{/if}}

    {{! --------------------------------------------------------------------- }}
    {{! Classitem Params
    {{! --------------------------------------------------------------------- }}
    {{#if classItem.params}}
      <h4 class="fh-item-header">Parameters</h4>
      <ul class="fh-params">
        {{#each classItem.params as |param|}}
          <li class="fh-classitem-params">
            <span class="param-meta">
              <strong>
                {{! Surround optional params with brackets to denote they're optional}}
                {{! TODO: Visual flag for optional? }}
                {{#if param.optional}}
                  [{{param.name}}]
                {{else}}
                  {{param.name}}
                {{/if}}
              </strong>
              {{#if param.type}}<span class="param-type">{{param.type}}</span>{{/if}}
            </span>
            {{#if param.props.length}}
              <ul class="fh-params">
                {{#each param.props as |prop|}}
                  <li class="fh-classitem-params">
                    <span class="param-meta">
                      <strong>
                        {{! Surround optional params with brackets to denote they're optional}}
                        {{! TODO: Visual flag for optional? }}
                        {{#if param.optional}}
                          [{{prop.name}}]
                        {{else}}
                          {{prop.name}}
                        {{/if}}
                      </strong>
                      {{#if param.type}}<span class="param-type">{{param.type}}</span>{{/if}}
                    </span>
                    <span class="param-description">
                      {{{prop.description}}}
                    </span>
                  </li>
                {{/each}}
              </ul>
            {{/if}}
            <span class="param-description">
              {{{param.description}}}
            </span>
          </li>
        {{/each}}
      </ul>
    {{/if}}

    {{#if classItem.return}}
      <h4 class="fh-item-header">Returns:</h4>
      {{#if classItem.return.description}}
        <p class="fh-return-description">{{classItem.return.description}}</p>
      {{/if}}
      {{#if classItem.return.type}}
        <p class="fh-return-type">{{classItem.return.type}}</p>
      {{/if}}
    {{/if}}
  `
});

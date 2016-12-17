import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/doc/module` page component
 * There's nothing here yet.
 * @class FountainHead.Module
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  /**
   * Module model content
   * @property module
   * @type {string}
   * @default ''
   */
  module: {},

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Handle nulling out properties `submodules` and `classes` if they don't have
   * any keys.
   * @event didReceiveAttrs
   */
  didReceiveAttrs() {
    // Check if submodules is empty
    if (this.get('module.submodules')) {
      const keys = Object.keys(this.get('module.submodules'));
      if (!keys.length) { this.set('module.submodules', null); }
    }

    // Check if classes && namespaces is empty
    if (this.get('module.classes')) {
      const keys = Object.keys(this.get('module.classes'));
      if (!keys.length) { this.set('module.classes', null); }
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <h2>{{module.name}} Module</h2>
    {{! Not sure if this is right, attempting to match Ember docs, see ember-routing}}
    {{#if module.is_submodule}}
      {{! TODO: Module parent should be a link }}
      Parent: {{module.module}}
    {{/if}}

    {{! TODO: Move description out of class to general }}
    {{fountain-head/shared/runtime-description
      description=module.description}}

    {{#if module.submodules}}
      <h3>Submodules</h3>
      <ul>
        {{#each-in module.submodules as |key|}}
          <li>{{link-to key 'docs.modules' key}}</li>
        {{/each-in}}
      </ul>
    {{/if}}

    {{#if module.classes}}
      <h3>Classes and Namespaces</h3>
      <ul>
        {{#each-in module.classes as |key|}}
          <li>{{link-to key 'docs.classes' key}}</li>
        {{/each-in}}
      </ul>
    {{/if}}
  `
});

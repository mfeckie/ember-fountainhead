import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/guide` page component
 * @class FountainheadPages.Guide
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  /**
   * Guide backing model matching structure:
   * ```javascript
   * {
   *   id
   *   attributes
   *   body,
   * }
   * ```
   * @property file
   * @type {string}
   * @default ''
   */
  guide: null,

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{log guide}}
    {{#if guide.attributes.title}}
      <div class="page-title">
        <h1>{{guide.attributes.title}}</h1>
      </div>
    {{/if}}
    <main class="guide-page fh-wrapper">
      <div class="guide-content">
        {{{guide.body}}}
      </div>
      {{! side nav}}
    </main>
  `
});

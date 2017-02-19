import Component from 'ember-component';
import inject from 'ember-service/inject';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/guide` page component
 * @class FountainheadPages.Guide
 * @constructor
 * @extends Ember.Component
 * @experimental
 */
export default Component.extend({
  fountainhead: inject(),

  // Passed Properties
  // ---------------------------------------------------------------------------
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

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class='fh-page-in-page-wrapper'>
      <div class='page-title'>
        {{#if guide.attributes.title}}
          <h1>{{guide.attributes.title}}</h1>
        {{/if}}
      </div>
      <main class='guide-page fh-wrapper'>
        <div class='guide-content'>
          {{fountainhead-runtime-description
            description=guide.body}}
        </div>
        {{guide-navigation meta=fountainhead.meta}}
      </main>
    </div>
  `
});

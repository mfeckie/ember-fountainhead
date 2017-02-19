import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Parent navigation component for API route. Requires the entire docs meta
 * object.
 *
 * @class APINavigation
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Fountainhead meta passed from service
   * @property meta
   * @type {Object}
   * @passed Fountainhead
   * @required
   */
  meta: null,

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * Method to filter on doc elements for search.
     * @method doFilter
     * @param {string} query The search query to filter on
     * @return {undefined}
     */
    doFilter(query) {
      // @TODO make this do a thing
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <nav role='navigation' class='fh-api-navigation'>
      {{api-navigation/logo logo=meta.logo}}

      {{! TODO: Make these work }}
      {{!--
      {{#api-navigation/section title='Search'}}
        {{api-navigation/search-bar onUpdate=(action 'doFilter')}}
      {{/api-navigation/section}}

      {{#if meta.version}}
        {{TODO: This should be a link to this tag OR a version selector! }}
        {{api-navigation/section title=(concat 'tag: ' meta.version)}}
      {{/if}}
      --}}

      {{#if meta.modules}}
        {{api-navigation/section
          title='Modules'
          items=meta.modules}}
      {{/if}}

      {{#if meta.classes}}
        {{api-navigation/section
          title='Classes'
          items=meta.classes}}
      {{/if}}

      <div class='made-with'>
        Made with lots of&nbsp;&nbsp;{{fountainhead-svg svgId='heart'}}&nbsp;&nbsp;by <br>
        HealthSparq Open Source Labs
      </div>
    </nav>
  `
});

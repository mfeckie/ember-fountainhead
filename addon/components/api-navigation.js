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
   * @property classNames
   * @type {Array}
   * @default ['fh-api-navigation']
   */
  classNames: ['fh-api-navigation'],
  /**
   * @property tagName
   * @type {string}
   * @default 'nav'
   */
  tagName: 'nav',

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
    {{! Project Logo, falls back to ember logo if one isn't specified }}
    <div class='project-logo-wrapper fh-element'>
      {{#if meta.logo}}
        {{#link-to 'index' classNames='logo-link'}}
          <img src={{meta.logo}}
            class='project-logo'
            alt='project logo' />
        {{/link-to}}
      {{else}}
        {{#link-to 'index' classNames='fountainhead-logo-link'}}
            <object
              type="image/svg+xml"
              data="/ember-fountainhead/fountainhead-logo.svg"
              class='fountainhead-logo'>
            </object>
            <h3>Ember<br>Fountainhead</h3>
          {{/link-to}}
        {{/if}}
    </div>

    {{! TODO: Make these work }}
    {{!--
    {{#api-navigation/section title='Search'}}
      {{api-navigation/search-bar onUpdate=(action 'doFilter')}}
    {{/api-navigation/section}}
    --}}

    {{!--
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
  `
});

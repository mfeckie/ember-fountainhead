import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import computed from 'ember-computed';

/**
 * Wrapper component for the sidebar components. Expects the entire docs meta
 * object.
 *
 * @class FountainheadSidebar.Sidebar
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Fountainhead meta passed from service. Used to calculate `stringForAriaHidden`
   * to hide sidebar when there is no data.
   * @property meta
   * @type {?Object}
   * @default null
   */
  meta: null,

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property attributeBindings
   * @type {Array}
   * @default ['stringForAriaHidden:aria-hidden']
   */
  attributeBindings: ['stringForAriaHidden:aria-hidden'],
  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-sidebar']
   */
  classNames: ['fh-sidebar'],
  /**
   * @property tagName
   * @type {string}
   * @default 'nav'
   */
  tagName: 'nav',

  // Computeds
  // ---------------------------------------------------------------------------

  /**
   * Fountainhead meta is passed into the sidebar. When there is no data, then
   * we haven't run the documentation scripts yet, so we need to hide the sidebar
   * using aria-hidden. Convert presence of meta data to string of boolean that
   * can be used for aria-hidden
   * @property stringForAriaHidden
   * @param {Object} meta Fountainhead meta passed from service
   * @type {string}
   * @return {string} Returns either string of `true` or `false` dependent on
   *                  presence of meta
   */
  stringForAriaHidden: computed('meta', function() {
    return this.get('meta') ? 'false' : 'true';
  }),

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
      {{#link-to 'index' classNames='logo-link'}}
        <img src={{if meta.logo meta.logo '/ember-fountainhead/img/ember-logo.png'}} class='project-logo' alt='project logo' />
      {{/link-to}}
    </div>

    {{! TODO: Make these work }}
    {{!-- {{#fountain-head/docs/sidebar/section title='Search'}}
      {{fountain-head/docs/sidebar/search-bar onUpdate=(action 'doFilter')}}
    {{/fountain-head/docs/sidebar/section}} --}}

    {{!-- {{#if meta.version}}
      {{TODO: This should be a link to this tag OR a version selector! }}
      {{fountain-head/docs/sidebar/section title=(concat 'tag: ' meta.version)}}
    {{/if}} --}}

    {{#if meta.modules}}
      {{#fountainhead-sidebar/section title='Modules'}}
        {{fountainhead-sidebar/group items=meta.modules}}
      {{/fountainhead-sidebar/section}}
    {{/if}}

    {{#if meta.classes}}
      {{#fountainhead-sidebar/section title='Classes'}}
        {{fountainhead-sidebar/group items=meta.classes}}
      {{/fountainhead-sidebar/section}}
    {{/if}}

    <div class='made-with-wrapper fh-element'>
      <p class='made-with'>Made with lots of {{fountainhead-svg svgId='heart'}} by <br> HealthSparq Open Source Labs</p>
    </div>
  `
});

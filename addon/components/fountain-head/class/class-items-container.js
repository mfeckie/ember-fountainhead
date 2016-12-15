import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';
import { scheduleOnce } from 'ember-runloop';

/**
 * Tab container for the class' documentation items.
 * TODO: Add a hook in here to reset the default tab any time this component
 * is re-created May need to be communicated by parent?
 * @class FountainHead.Class.ClassItemsContainer
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * This class' array of property documentation items.
   * @property property
   * @type {Array}
   * @default []
   */
  property: [],
  /**
   * This class' array of event documentation items.
   * @property event
   * @type {Array}
   * @default []
   */
  event: [],
  /**
   * This class' array of method documentation items.
   * @property method
   * @type {Array}
   * @default []
   */
  method: [],

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * The currently active tab. This is controlled by this component to allow
   * us to change the tab whenever a documentation item is clicked in the index
   * panel.
   * @property activeTab
   * @type {string}
   * @default indexPanel
   */
  activeTab: 'indexPanel',

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Handle resetting tabs container to the index panel any time that this
   * component receives attrs. The only props passed in to this component are
   * the class items for the container, so we know if they change in any way
   * that this is the right time to update the tabs panel.
   * @event didReceiveAttrs
   */
  didReceiveAttrs() {
    this.set('activeTab', 'indexPanel');
  },

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * Action bound to each documentation item in the index panel. Clicking any
     * item will trigger this with the documentation item as an argument. Use
     * the passed doc item to:
     * - Change to the panel matching the doc item type
     * - Scroll to that item using the itemtype and name to construct the DOM id
     * @method goToItem
     * @param {Object} classitem          Backing classitem
     * @param {string} classitem.itemtype Type for item of: `method`/`property`/`event`
     * @param {string} classitem.name     Name for classitem
     */
    goToItem({itemtype, name}) {
      /*
       * Named function for scrolling to selected item after the tab change has
       * been rendered. VERY IMPORTANT: Fountainhead is rendered inside of a
       * fake wrapper page, so we have to scroll that wrapper page instead of
       * the body!
       */
      function scrollTo() {
        $('.fh-page-in-page-wrapper').animate({
          scrollTop: $(`#${itemtype}_${name}`).offset().top - 75
        }, 350);
      }

      // Change to the selected tab using the itemtype to build the tab's id
      this.set('activeTab', `${itemtype}Panel`);

      // We can't scroll until after the next render has udpated the current tab
      scheduleOnce('afterRender', null, scrollTo);
    },
    /**
     * Closure action passed into the tab component. This action is called
     * whenever a tab is clicked with the id of the tab. Use this to update the
     * controlling `activeTab` property for the tabs DDAU style.
     * @method tabsChanged
     * @param {Object} tab           Backing object for a given tab
     * @param {string} tab.elementId The id of the tab, controls current tab displayed
     */
    tabsChanged({ elementId }) {
      this.set('activeTab', elementId);
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#core-tabs
      defaultTab='indexPanel'
      activeId=activeTab
      onChange=(action 'tabsChanged')
      as |components|}}
      {{! --------------------------------------------------------------------- }}
      {{! Index Tab - Links to Items
      {{! --------------------------------------------------------------------- }}
      {{#components.content label='Index' elementId='indexPanel'}}
        {{#if method.length}}
          <h3>Methods</h3>
          <ul class="fh-index-list">
            {{#each method as |method|}}
              <li class="fh-index-item">
                {{#core-button link=true click=(action 'goToItem' method)}}
                  {{method.name}}
                {{/core-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if property.length}}
          <h3>Properties</h3>
          <ul class="fh-index-list">
            {{#each property as |property|}}
              <li class="fh-index-item">
                {{#core-button link=true click=(action 'goToItem' property)}}
                  {{property.name}}
                {{/core-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if event.length}}
          <h3>Events</h3>
          <ul class="fh-index-list">
            {{#each event as |event|}}
              <li class="fh-index-item">
                {{#core-button link=true click=(action 'goToItem' event)}}
                  {{event.name}}
                {{/core-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}
      {{/components.content}}

      {{! --------------------------------------------------------------------- }}
      {{! Method/Property/Event Panels
      {{! --------------------------------------------------------------------- }}
      {{#components.content label='Methods' hidden=(eq method.length 0) elementId='methodPanel'}}
        {{#each method as |method|}}
          {{fountain-head/class/class-item classItem=method}}
        {{/each}}
      {{/components.content}}
      {{#components.content label='Properties' hidden=(eq property.length 0) elementId='propertyPanel'}}
        {{#each property as |property|}}
          {{fountain-head/class/class-item classItem=property}}
        {{/each}}
      {{/components.content}}
      {{#components.content label='Events' hidden=(eq event.length 0) elementId='eventPanel'}}
        {{#each event as |event|}}
          {{fountain-head/class/class-item classItem=event}}
        {{/each}}
      {{/components.content}}
    {{/core-tabs}}
  `
});

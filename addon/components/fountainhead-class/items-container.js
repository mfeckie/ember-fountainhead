import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';
import { scheduleOnce } from 'ember-runloop';
import get from 'ember-metal/get';

/**
 * Tab container for the class' documentation items. Component handles running
 * a controlled instance of `core-tabs` by tracking `activeTab` internally and
 * passing `tabsChanged` to the `core-tabs` instance.
 *
 * The active tab is reset to the index panel anytime that the `name` (of the
 * class) changes.
 *
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
  /**
   * Name of the class. Is checked in `didUpdateAttrs` to know if the tabs
   * should be reset to the index panel
   * @property name
   * @type {string}
   */
  name: '',

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
  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-tabs-container']
   */
  classNames: ['fh-tabs-container'],

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Handle resetting tabs container to the index panel any time that this
   * component receives attrs. The only props passed in to this component are
   * the class items for the container, so we know if they change in any way
   * that this is the right time to update the tabs panel.
   *
   * NOTE: GUESS WHAT! This hook doens't only get called when passed props
   * change! There is some crazy behavior where this hook will get called ONCE
   * and only ONCE when an internal property changes after the props for this
   * component has changed. Super weird. For now we're 'fixing' it by also
   * passing in the class name and using that as a check to reset the `activeTab`
   * @event didReceiveAttrs
   */
  didUpdateAttrs({ oldAttrs, newAttrs }) {
    this._super(...arguments);

    if (get(oldAttrs, 'name.value') !== get(newAttrs, 'name.value')) {
      this.set('activeTab', 'indexPanel');
    }
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
       * the body. We also need to get the current scrollTop of that containing
       * wrapper before adding the new scrollTop, b/c we're really just scrolling
       * that div
       */
      function scrollTo() {
        let scrollTop = $('.fh-page-in-page-wrapper').scrollTop()
          + $(`#${itemtype}_${name}`).offset().top
          - 75;

        $('.fh-page-in-page-wrapper').animate({ scrollTop }, 350);
      }

      // Change to the selected tab using the itemtype to build the tab's id
      this.set('activeTab', `${itemtype}Panel`);

      // We can't scroll until after the next render has udpated the current tab
      scheduleOnce('afterRender', this, scrollTo);
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
    {{#fountainhead-tabs
      defaultTab='indexPanel'
      activeId=activeTab
      onChange=(action 'tabsChanged')
      as |components|}}
      {{! --------------------------------------------------------------------- }}
      {{! Index Tab - Links to Items
      {{! --------------------------------------------------------------------- }}
      {{#components.content label='Index' elementId='indexPanel'}}
        {{#if method.length}}
          <h4 class="fh-docs-category uppercase">Methods</h4>
          <ul class="fh-index-list">
            {{#each method as |method|}}
              <li class="fh-index-item">
                {{#fountainhead-button link=true click=(action 'goToItem' method)}}
                  {{method.name}}
                {{/fountainhead-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if property.length}}
          <h4 class="fh-docs-category uppercase">Properties</h4>
          <ul class="fh-index-list">
            {{#each property as |property|}}
              <li class="fh-index-item">
                {{#fountainhead-button link=true click=(action 'goToItem' property)}}
                  {{property.name}}
                {{/fountainhead-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if event.length}}
          <h4 class="fh-docs-category uppercase">Events</h4>
          <ul class="fh-index-list">
            {{#each event as |event|}}
              <li class="fh-index-item">
                {{#fountainhead-button link=true click=(action 'goToItem' event)}}
                  {{event.name}}
                {{/fountainhead-button}}
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
          {{fountainhead-class/item classItem=method}}
        {{/each}}
      {{/components.content}}
      {{#components.content label='Properties' hidden=(eq property.length 0) elementId='propertyPanel'}}
        {{#each property as |property|}}
          {{fountainhead-class/item classItem=property}}
        {{/each}}
      {{/components.content}}
      {{#components.content label='Events' hidden=(eq event.length 0) elementId='eventPanel'}}
        {{#each event as |event|}}
          {{fountainhead-class/item classItem=event}}
        {{/each}}
      {{/components.content}}
    {{/fountainhead-tabs}}
  `
});

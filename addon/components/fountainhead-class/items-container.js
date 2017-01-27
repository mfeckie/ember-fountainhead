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
 * @class FountainheadClass.ItemsContainer
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Array of *ALL* items for this class. Used to find the type when an item is
   * specified in a query param.
   * @property classitems
   * @type {Array}
   * @default []
   */
  classitems: [],
  /**
   * This class' array of event documentation items.
   * @property event
   * @type {Array}
   * @default []
   * @passed
   */
  event: [],
  /**
   * Item query param passed down from controller. When this property is present,
   * or changes handle scrolling to the item. When the specified doc class is
   * the same but the item query param is different the model hooks will not be
   * called, so we need to handle scrolling to the item when it changes.
   * @property item
   * @type {?string}
   * @default null
   * @passed
   */
  item: null,
  /**
   * This class' array of method documentation items.
   * @property method
   * @type {Array}
   * @default []
   * @passed
   */
  method: [],
  /**
   * Name of the class. Is checked in `didUpdateAttrs` to know if the tabs
   * should be reset to the index panel
   * @property name
   * @type {string}
   * @passed
   */
  name: '',
  /**
   * This class' array of property documentation items.
   * @property property
   * @type {Array}
   * @default []
   * @passed
   */
  property: [],

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * The currently active tab. This is controlled by this component to allow
   * us to change the tab whenever a documentation item is clicked in the index
   * panel.
   * @property activeTab
   * @type {string}
   * @protected
   * @default indexPanel
   */
  activeTab: 'indexPanel',
  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-tabs-container']
   */
  classNames: ['fh-tabs-container'],
  /**
   * The panel that that the tabs should render on creation. The tabs component
   * tracks this separately and it needs to be updated separately when a class
   * page is loaded with an item query parameter.
   * @property defaultTab
   * @type {string}
   * @default 'indexPanel'
   */
  defaultTab: 'indexPanel',

  // Methods
  // ---------------------------------------------------------------------------

  /**
   * Internal method to handle selecting a tab panel and then scrolling to an
   * item in that panel.
   *
   * Method will:
   * - Change to the panel matching the doc item type
   * - Scroll to that item using the itemtype and name to construct the DOM id
   * @method _scrollToItem
   * @protected
   * @param {Object} classitem          Backing class item
   * @param {string} classitem.itemtype Type for item of: `method`/`property`/`event`
   * @param {string} classitem.name     Name of item
   */
  _scrollToItem({ itemtype, name }) {
    /*
     * Named function for scrolling to selected item after the tab change has
     * been rendered. VERY IMPORTANT: Fountainhead is rendered inside of a
     * fake wrapper page, so we have to scroll that wrapper page instead of
     * the body. We also need to get the current scrollTop of that containing
     * wrapper before adding the new scrollTop, b/c we're really just scrolling
     * that div
     */
    function scrollTo() {
      let scrollTop =
        $('.fh-page-in-page-wrapper').scrollTop() // Current scrolltop
        + $(`#${itemtype}_${name}`).offset().top // Offset to desired element
        - 75; // Minus a little for an easier visual transition

      $('.fh-page-in-page-wrapper').animate({ scrollTop }, 350);
    }

    // Change to the selected tab using the itemtype to build the tab's id
    this.set('activeTab', `${itemtype}Panel`);

    // We can't scroll until after the next render has udpated the current tab
    scheduleOnce('afterRender', this, scrollTo);
  },

  /**
   * Handles finding the classitem model using the `item` query param value.
   * If a classitem is found, initiate a scroll.
   * @method _scrollToQueryParamItem
   * @protected
   * @param {!string} item The item query param identifying which classitem to scroll to
   */
  _scrollToQueryParamItem(item) {
    // Find specific classitem data in complete classitems array
    let targetItem = this.get('classitems').filter(classitem => classitem.name === item);

    // Only attempt to scroll to item if we found it
    if (targetItem.length) {
      targetItem = targetItem[0];
      /*
       * This is only required on the first load of the tabs, but there isn't
       * an easy way to track that and it's ok to set it every time b/c the tabs
       * only uses it in the `init` hook. Setting this ensures that the first
       * time the tabs renders the passed `defaultTab` matches the passed
       * `activeTab`. If these don't match the first render of the tabs is blank.
       */
      this.set('defaultTab', `${targetItem.itemtype}Panel`);
      // The `targetItem` structure matches expected `itemtype` and `name` of `_scrollToItem`
      this._scrollToItem(targetItem);
    }
  },

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Handle resetting tabs container to the index panel any time that this
   * component's attrs update. The only props passed in to this component are
   * the class items for the container, so we know if they change in any way
   * that this is the right time to update the tabs panel.
   *
   * NOTE: GUESS WHAT! This hook doens't only get called when passed props
   * change! There is some crazy behavior where this hook will get called ONCE
   * and only ONCE when an internal property changes after the props for this
   * component has changed. Super weird. For now we're 'fixing' it by also
   * passing in the class name and using that as a check to reset the `activeTab`
   * @event didUpdateAttrs
   */
  didUpdateAttrs() {
    let item = this.get('item'),
        name = this.get('name'),
        oldItem = this.get('_item'),
        oldName = this.get('_name');

    if (item && oldItem !== item) {
      this._scrollToQueryParamItem(item);
    } else if (oldName !== name) {
      this.set('activeTab', 'indexPanel');
    }

    // Store the new props into the private old props values so they can be
    // use for comparison on the next attrs update
    this.setProperties({
      _item: item,
      _name: name
    });
  },


  /**
   * Check for a passed `item` query param. When it exists call
   * {{cross-link class='FountainheadClass.ItemsContainer' item='_scrollToQueryParamItem'}}
   * to scroll to that cross linked item.
   * @method init
   */
  init() {
    this._super(...arguments);
    if (this.get('item')) {
      this._scrollToQueryParamItem(this.get('item'));
    }
  },

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * Action bound to each documentation item in the index panel. Clicking any
     * item will trigger this with the documentation item as an argument. Use
     * the passed doc item to internally call
     * {{cross-link class='FountainheadClass.ItemsContainer' item='_scrollToItem'}}
     * to scroll to clicked item.
     * @method goToItem
     * @action
     * @param {Object} classitem          Backing classitem
     * @param {string} classitem.itemtype Type for item of: `method`/`property`/`event`
     * @param {string} classitem.name     Name for classitem
     */
    goToItem({ itemtype, name }) {
      this._scrollToItem({ itemtype, name });
    },
    /**
     * Closure action passed into the tab component. This action is called
     * whenever a tab is clicked with the id of the tab. Use this to update the
     * controlling `activeTab` property for the tabs DDAU style.
     * @method tabsChanged
     * @action
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
      defaultTab=defaultTab
      activeId=activeTab
      onChange=(action 'tabsChanged')
      as |components|}}
      {{! --------------------------------------------------------------------- }}
      {{! Index Tab - Links to Items
      {{! --------------------------------------------------------------------- }}
      {{#components.content label='Index' elementId='indexPanel'}}
        {{#if method.length}}
          <h4 class='fh-docs-category uppercase'>Methods</h4>
          <ul class='fh-index-list'>
            {{#each method as |method|}}
              <li class='fh-index-item'>
                {{#fountainhead-button link=true click=(action 'goToItem' method)}}
                  {{method.name}}
                {{/fountainhead-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if property.length}}
          <h4 class='fh-docs-category uppercase'>Properties</h4>
          <ul class='fh-index-list'>
            {{#each property as |property|}}
              <li class='fh-index-item'>
                {{#fountainhead-button link=true click=(action 'goToItem' property)}}
                  {{property.name}}
                {{/fountainhead-button}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if event.length}}
          <h4 class='fh-docs-category uppercase'>Events</h4>
          <ul class='fh-index-list'>
            {{#each event as |event|}}
              <li class='fh-index-item'>
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

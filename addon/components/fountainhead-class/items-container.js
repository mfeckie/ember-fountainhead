import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import inject from 'ember-service/inject';

/**
 * Tab container for the class' documentation items. Component handles running
 * a controlled instance of `fountainhead-tabs` by tracking `activeTab`
 * internally and passing `tabChanged` to the `fountainhead-tabs` instance.
 *
 * The active tab is reset to the index panel anytime that the `name` (of the
 * class) changes.
 *
 * @class FountainheadClass.ItemsContainer
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  fountainhead: inject(),

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
   * Route scroll target passed in to allow automatic scrolling in
   * {{c-l 'didReceiveAttrs'}} hook.
   * @property fragmentId
   * @passed
   * @type {?string}
   * @default null
   */
  fragmentId: null,
  /**
   * This class' array of method documentation items.
   * @property method
   * @type {Array}
   * @default []
   * @passed
   */
  method: [],
  /**
   * Name of the class. Is checked in `didReceiveAttrs` to know if the tabs
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
   * Handles finding the classitem model using the `item` query param value.
   * If a classitem is found, initiate a scroll.
   * @method _selectTabForProperty
   * @protected
   * @param {!string} id The id identifying which property to scroll to
   */
  _selectTabForProperty(id) {
    // Find specific classitem data in complete classitems array
    let targetItem = this.get('classitems').filter(classitem => classitem.name === id);

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
      // Change to the selected tab using the itemtype
      this.set('activeTab', `${targetItem.itemtype}Panel`);
    }
  },

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * When component attributes change, either the backing data or the scroll target
   * has changed. Use {{c-l 'fragmentId'}} to reset tabs to index panel if there
   * is no scroll target, or select the correct tab for a scroll target.
   * @event didReceiveAttrs
   */
  didReceiveAttrs() {
    const fragmentId = this.get('fragmentId');

    if (!fragmentId) {
      this.set('defaultTab', 'indexPanel');
      this.set('activeTab', 'indexPanel');
    } else {
      this._selectTabForProperty(fragmentId);
    }
  },

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    /**
     * Closure action passed to {{c-l class='FountainheadClass.PropertyLink'}} instances
     * so that the tab for the property can be selected when a property is clicked
     * before the selection bubbles up and the browser attempts to find the matching
     * id for the property.
     * @method selectTabForProperty
     * @param {string} id Id of the property matches the name of the property
     */
    selectTabForProperty(id) {
      this._selectTabForProperty(id);
    },
    /**
     * Closure action passed into the tab component. This action is called
     * whenever a tab is clicked with the id of the tab. Use this to update the
     * controlling `activeTab` property for the tabs DDAU style.
     * @method tabChanged
     * @action
     * @param {Object} tab           Backing object for a given tab
     * @param {string} tab.elementId The id of the tab, controls current tab displayed
     */
    tabChanged({ elementId }) {
      this.set('activeTab', elementId);
    }
  },

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#fountainhead-tabs
      defaultTab=defaultTab
      activeId=activeTab
      onChange=(action 'tabChanged')
      as |components|}}
      {{! --------------------------------------------------------------------- }}
      {{! Index Tab - Links to Items
      {{! --------------------------------------------------------------------- }}
      {{#components.content label='Index' elementId='indexPanel'}}
        {{! TODO: Refactor this to a loop over method, props and events to cut out duplicated template code }}
        {{#if method.length}}
          <h4 class='fh-docs-category uppercase'>Methods</h4>
          <ul class='fh-index-list'>
            {{#each method as |method|}}
              <li class='fh-index-item'>
                {{fountainhead-class/property-link
                  fragmentId=method.name
                  selectTabForProperty=(action 'selectTabForProperty')}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if property.length}}
          <h4 class='fh-docs-category uppercase'>Properties</h4>
          <ul class='fh-index-list'>
            {{#each property as |property|}}
              <li class='fh-index-item'>
                {{fountainhead-class/property-link
                  fragmentId=property.name
                  selectTabForProperty=(action 'selectTabForProperty')}}
              </li>
            {{/each}}
          </ul>
        {{/if}}

        {{#if event.length}}
          <h4 class='fh-docs-category uppercase'>Events</h4>
          <ul class='fh-index-list'>
            {{#each event as |event|}}
              <li class='fh-index-item'>
                {{fountainhead-class/property-link
                  fragmentId=event.name
                  selectTabForProperty=(action 'selectTabForProperty')}}
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
          {{fountainhead-class/item
            classItem=method}}
        {{/each}}
      {{/components.content}}
      {{#components.content label='Properties' hidden=(eq property.length 0) elementId='propertyPanel'}}
        {{#each property as |property|}}
          {{fountainhead-class/item
            classItem=property}}
        {{/each}}
      {{/components.content}}
      {{#components.content label='Events' hidden=(eq event.length 0) elementId='eventPanel'}}
        {{#each event as |event|}}
          {{fountainhead-class/item
            classItem=event}}
        {{/each}}
      {{/components.content}}
    {{/fountainhead-tabs}}
  `
});

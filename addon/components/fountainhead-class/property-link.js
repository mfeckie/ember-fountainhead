import Component from 'ember-component';
import inject from 'ember-service/inject';
import hbs from 'htmlbars-inline-precompile';

/**
 * Creates the property link used in the index tab for a class. Renders either an
 * anchor or button based on consuming app's location type:
 * - History Location: An anchor with a href fragment matching the property name for
 *   the link and an action for selecting the tab for that property.
 * - Hash Location: Button with an action for selecting the tab for that property and
 *   then calling {{c-l class='Fountainhead'}} to update `id` query param to match
 *   property name.
 *
 * In both cases, the tab for the property must be selected first so that when the
 * url updates and the app then updates the property with the matching id is in DOM.
 *
 * For the anchor, this just means selecting the tab. The anchor click then bubbles
 * and the browser handles scrolling to the matching id that is now in DOM b/c the
 * correct tab has been selected.
 *
 * For the button, we have to manually DDAU the event. The correct tab is selected
 * and query param id is then updated. The changed query param then triggers the
 * class page to scroll to the new id.
 * @class FountainheadClass.PropertyLink
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  fountainhead: inject(),
  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#if fountainhead.meta.hashRouting}}
      {{! For Hash Location consumers, a link-to with just a query-params creates
          a link to this page with the correct &id= query param }}
      {{#link-to (query-params id=fragmentId)}}
        {{fragmentId}}
      {{/link-to}}
    {{else}}
      {{! History Location: Use href fragment to prompt browser scroll }}
      <a
        href={{concat '#' fragmentId}}
        onclick={{action selectTabForProperty fragmentId}}>
        {{fragmentId}}
      </a>
    {{/if}}
  `
});

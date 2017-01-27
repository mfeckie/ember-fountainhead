import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/doc/class` page component
 * @class FountainheadPages.Class
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Class model content.
   * @property class
   * @type {?Object}
   * @passed
   */
  class: null,
  /**
   * Item query param passed down from controller. Passed to the
   * {{cross-link class='FountainheadClass.ItemsContainer' text='FountainheadClass.ItemsContainer'}}
   * component to scroll to linked item after load.
   * @property item
   * @type {?string}
   * @default null
   * @passed
   */
  item: null,

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{fountainhead-class/header
      name=class.name
      srcFileId=class.srcFileId}}

    {{fountainhead-class/meta
      access=class.access
      extends=class.extends
      file=class.file
      module=class.module
      line=class.line
      srcFileId=class.srcFileId
      submodule=class.submodule
      uses=class.uses}}

    {{fountainhead-runtime-description
      description=class.description}}

    {{! Only render class items tabs if there are items to display }}
    {{#if class.classitems.length}}
      {{fountainhead-class/items-container
        property=class.property
        method=class.method
        event=class.event
        item=item
        name=class.name
        classitems=class.classitems}}
    {{/if}}
  `
});

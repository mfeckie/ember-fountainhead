import hbs from 'htmlbars-inline-precompile';
import BasePage from './base-page';

/**
 * Fountainhead `/api/class` page component.
 * @class FountainheadPages.Class
 * @constructor
 * @extends FountainheadPages.BasePage
 */
export default BasePage.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Class model content.
   * @property class
   * @type {?Object}
   * @passed
   */
  class: null,

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
        fragmentId=fragmentId
        name=class.name
        classitems=class.classitems}}
    {{/if}}
  `
});

import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/doc/class` page component
 * @class FountainHead.Class
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Class model content.
   * @property class
   * @type {Object}
   */
  class: null,

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{fountain-head/class/header
      name=class.name
      srcFileId=class.srcFileId}}

    {{fountain-head/class/meta
      access=class.access
      extends=class.extends
      file=class.file
      module=class.module
      line=class.line
      srcFileId=class.srcFileId
      submodule=class.submodule
      uses=class.uses}}

    {{fountain-head/runtime-description
      description=class.description}}

    {{! Only render class items tabs if there are items to display }}
    {{#if class.classitems.length}}
      {{fountain-head/class/class-items-container
        property=class.property
        method=class.method
        event=class.event}}
    {{/if}}
  `
});

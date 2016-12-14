import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Base documentation page Component.
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
      extends=class.extends
      file=class.file
      srcFileId=class.srcFileId
      line=class.line}}

    {{fountain-head/class/description description=class.description}}

    {{#core-tabs as |components|}}
      {{#components.content label='index'}}
        A TAB
      {{/components.content}}

    {{/core-tabs}}

    {{#each class.classitems as |classItem|}}
      {{fountain-head/class/class-item classItem=classItem}}
    {{/each}}
  `
});

import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Base documentation page Component.
 * @class Fountain.DocPage
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Documentation page model content.
   * @property content
   * @type {Object}
   */
  content: null,

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{fountain-head/doc-page/header
      name=content.name
      fileJSON=content.fileJSON}}

    {{fountain-head/doc-page/meta
      extends=content.extends
      file=content.file
      fileJSON=content.fileJSON
      line=content.line}}

    {{fountain-head/doc-page/description description=content.description}}

    {{#each content.classitems as |classItem|}}
      {{fountain-head/doc-page/class-item classItem=classItem}}
    {{/each}}
  `
});

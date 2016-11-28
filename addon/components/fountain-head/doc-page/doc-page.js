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
    {{fountain-head.doc-page.header
      name=content.name
      file=content.file
      fileJSON=content.fileJSON
      classUrl=(concat content.file '#' content.line)}}

    {{fountain-head.doc-page.meta
      name=content.name
      extends=content.extends
      file=content.file
      line=content.line
      is_constructor=content.is_constructor}}

    {{fountain-head.doc-page.description description=content.description}}

    {{#each content.classitems as |classItem|}}
      {{fountain-head.doc-page.class-item classItem=classItem}}
    {{/each}}
  `
});

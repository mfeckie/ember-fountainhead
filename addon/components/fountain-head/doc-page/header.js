import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Documentation generated `name` property
   * @property name
   * @type {string}
   */
  name: '',
  /**
   * Documentation generated `defined-in` property
   * @property file
   * @type {string}
   */
  file: '',

  // Properties
  // ---------------------------------------------------------------------------
  tagName: 'h2',
  classNames: ['fountain-doc-header'],

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{! @TODO Handle Class/Module/Namespace }}
    {{name}} Class
    <small>
      {{! @TODO: Link component needed to handle external vs internal file links }}
      {{#link-to "docs.file" fileJSON className="source-icon"}}
        [source]
      {{/link-to}}
    </small>
  `
});

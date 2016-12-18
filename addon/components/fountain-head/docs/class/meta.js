import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Creates meta information for a documentation class.
 *
 * TODO: Document which YUIDoc tags generate what meta data
 * @class FountainHead.Class.Meta
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Props
  // ---------------------------------------------------------------------------

  /**
   * The access property is set by using either of the tags:
   * - `@private`
   * - `@public`
   *
   * The value for access matches the tag used
   * @property access
   * @type {string}
   * @default ''
   */
  access: '',
  /**
   * The value property is set by using the `@extends` tag. Any class used in
   * an extends tag will be linked to.
   * @property extends
   * @type {string}
   * @default ''
   */
  extends: '',
  /**
   * The file property matches where the documentation for a class is declared
   * in the source files. It is set automatically.
   * @property file
   * @type {string}
   * @default ''
   */
  file: '',
  /**
   * The module property is set by using the `@module` tag. Any module used in
   * a module tag will be linked to.
   * @property module
   * @type {string}
   * @default ''
   */
  module: '',
  /**
   * The line property matches the line where documentation for a class is
   * declared in the source files. It is set automatically.
   * @property line
   * @type {?number}
   * @default null
   */
  line: null,
  /**
   * scrFile id is set by the data scripts. It is a snake case version of the
   * file path and should be used for calling for the file
   * @private
   * @property srcFileId
   * @type {string}
   * @default ''
   */
  srcFileId: '',
  /**
   * The submodule property is set by using the `@submodule` tag. Any submodule
   * used in a submodule tag will be linked to.
   * @property submodule
   * @type {string}
   * @default ''
   */
  submodule:  '',
  /**
   * The uses array is set by using one or more `@uses` tags. Any class used in
   * a uses tag will be linked to.
   * @property uses
   * @type {Array}
   * @default []
   */
  uses: [],

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property classNames
   * @type {Array.<string>}
   * @default ['fh-class-meta']
   */
  classNames: ['fh-class-meta'],
  /**
   * @property tagName
   * @type {string}
   * @default 'div'
   */
  tagName: 'div',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    {{#if access}}
      <p class="fh-meta">
        <span class="meta-access">Access:</span> <span class="fh-{{access}}">{{access}}</span>
      </p>
    {{/if}}

    {{#if extends}}
      <p class="fh-meta">
        <span class="meta-extends">Extends:</span>
        {{link-to extends 'docs.classes' extends}}
      </p>
    {{/if}}

    {{#if uses.length}}
      {{#each uses as |use|}}
        <p class="fh-meta">
          <span class="meta-uses">Uses:</span>
          {{link-to use 'docs.classes' use}}
        </p>
      {{/each}}
    {{/if}}

    {{#if file}}
      <p class="fh-meta">
        {{! @TODO: Need a config for internal vs external src file linking }}
        <span class="meta-defined">Defined In:</span>
        {{#link-to 'docs.files' srcFileId (query-params line=line)}}
          {{file}}:{{line}}
        {{/link-to}}
      </p>
    {{/if}}

    {{! --------------------------------------------------------------------- }}
    {{! Give precedence to submodules, display module as second priority
    {{! b/c if a submodule exists the class is hierarchically closer to the
    {{! submodule than the module
    {{! --------------------------------------------------------------------- }}
    {{#if submodule}}
      <p class="fh-meta">
        <span class="meta-module">Module:</span>
        {{link-to submodule 'docs.modules' submodule}}
      </p>
    {{else if module}}
      <p class="fh-meta">
        <span class="meta-module">Module:</span>
        {{link-to module 'docs.modules' module}}
      </p>
    {{/if}}
  `
});

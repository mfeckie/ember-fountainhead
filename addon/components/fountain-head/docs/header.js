import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Documents Header
 *
 * Contains neat stuff for the top of the page.
 * @class FountainHead.Header
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * Project name used as docs `<h1>`
   * @property projectName
   * @type {string}
   */
  name: '',
  /**
   * Project url, pulled from repository in `fountainhead.js` config or `package.json`
   * @property projectUrl
   * @type {string}
   */
  repository: '',
  /**
   * Project logo, pulled from configs
   * @property logo
   * @type {string}
   */
  logo: '',

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-addon-header']
   */
  classNames: ['fh-addon-header'],
  /**
   * @property tagName
   * @type {string}
   * @default 'header'
   */
  tagName: 'header',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="logo-home">
      {{#link-to 'index'}}
        <img src={{if logo logo '/ember-fountainhead/img/ember-logo.png'}} class="docs-logo" alt="project logo" title="" />
      {{/link-to}}
    </div>

    {{#if repository}}
      <div class="docs-github-link">
        <a href={{repository}} target="_blank" title="repository">
          <svg height="48" width="48" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
    {{/if}}
  `
});

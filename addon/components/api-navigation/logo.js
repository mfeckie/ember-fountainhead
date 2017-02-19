import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * The logo at the top of the API navigation is a component so that you can
 * easily extend it for custom logos that can't be contained in a merge image.
 *
 * If {{c-l class='Fountainhead' item='meta'}} has a logo, that will be used
 * otherwise we fall back to the Fountainhead logo.
 * @class APINavigation.Logo
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Path to a custom logo, can be set in your
   * [<span class='mono'>fountainhead.js</span>](/guides/configuration) file.
   * @property logo
   * @type {?string}
   * @passed APINavigation
   */
  logo: null,

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * @property tagName
   * @type {string}
   * @default ''
   */
  tagName: '',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class='project-logo-wrapper fh-element'>
      {{#if logo}}
        {{#link-to 'index' classNames='logo-link'}}
          <img src={{logo}}
            class='project-logo'
            alt='project logo' />
        {{/link-to}}
      {{else}}
        {{#link-to 'index' classNames='fountainhead-logo-link'}}
            <object
              type="image/svg+xml"
              data="/ember-fountainhead/fountainhead-logo.svg"
              class='fountainhead-logo'>
            </object>
            <h3>Ember<br>Fountainhead</h3>
          {{/link-to}}
        {{/if}}
    </div>
  `
});

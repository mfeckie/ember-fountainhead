import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
import inject from 'ember-service/inject';

/**
 * Fountainhead `/doc` page component serves as the wrapping template for all of
 * Fountainhead. The `outlet` for the route is yielded by this component, which
 * is how we use components to handle rendering all of our markup, even with
 * subroutes.
 *
 * Because we want the default setup of Fountainhead to look like it's own app
 * we render everything in a `fh-page-in-page-wrapper` wrapper which is position
 * fixed to cover the entire screen. This allows us to have our own header and
 * footer even if a consuming application has one in their `application.hbs`
 * template.
 *
 * The `fountainhead` service is the primary store for the addon and handles
 * fetching the meta data for the docs.
 * @class FountainHead.Docs
 * @uses FountainHead.Docs.Github
 * @uses FountainHead.Docs.Sidebar
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  fountainhead: inject(),

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="fh-page-in-page-wrapper">
      {{! Octocat page corner SVG logo }}
      {{fountain-head/docs/github repository=fountainhead.meta.repository}}

      {{! Layout for sidebar and content containers }}
      <main class="fh-container">
        <div class="fh-sidebar-container">
          {{fountain-head/docs/sidebar meta=fountainhead.meta}}
        </div>
        <div class="fh-content-container">
          <div class="fh-content">
            {{! This is where subroutes are rendered through the outlet }}
            {{yield}}
          </div>
        </div>
      </main>
    </div>
  `
});

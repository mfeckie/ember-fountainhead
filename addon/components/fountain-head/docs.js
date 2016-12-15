import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Fountainhead `/doc` page component
 * @class FountainHead.Docs
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="fh-page-in-page-wrapper">
      <div class="fh-wrapper">
        {{fountain-head/header logo=model.logo repository=model.repository}}

        <main class="container-fluid">
          <div class="row">
            <div class="col-sm-4">
              {{! Check for a docs classes to know if data is available for sidebar }}
              {{! Can we update search bar to look good and show always even if there isn't data? }}
              {{#if model.classes}}
                {{fountain-head/sidebar docsMeta=model}}
              {{/if}}
            </div>
            <div class="main-content col-sm-8">
              {{! This is where subroutes are rendered through the outlet }}
              {{yield}}
            </div>
          </div>
        </main>
        {{fountain-head/footer}}
      </div>
    </div>
  `
});

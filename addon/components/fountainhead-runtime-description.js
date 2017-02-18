import Ember from 'ember';
import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';
const { HTMLBars, getOwner } = Ember;

/**
 * Generates a description during runtime by using HTMLBars to compile any
 * string to a partial. This allows us to create descriptions from JSON
 * responses with components inside of them.
 *
 * TODO: Name partials by class+type+name for re-use
 * @class FountainheadRuntimeDescription
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  /**
   * The content string that should be rendered. This string is passed to the
   * runtime compiler and registered as a partial if compilation is successful.
   * @property content
   * @type {string}
   * @default ''
   */
  content: '',
  /**
   * The string that should be converted to a partial
   * @property description
   * @type {string}
   * @default ''
   * @deprecated
   */
  description: '',

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-description']
   */
  classNames: ['fh-description'],
  /**
   * If there is a parsing error during the template compilation the catch block
   * will set it as the `compilerError`. This parsing error is rendered for
   * easier debugging of invalid content.
   * @property compilerError
   * @type {?string}
   * @default null
   */
  compilerError: null,
  /**
   * Name of generated partial that is used in the template.
   * @property partialName
   * @type {string}
   */
  partialName: '',

  // Methods
  // ---------------------------------------------------------------------------

  /**
   * Looks through the passed-in template string and checks for action helpers;
   * when it finds some, it checks for the actions referenced and registers no-ops
   * for them on this component's context so that the application doesn't explode
   * when trying to reference a non-existent action.
   *
   * @method _checkActionRefs
   * @param {String} templateString The template string to run the check for action matches on
   * @return {undefined}
   */
  _checkActionRefs(templateString) {

    if (!templateString) { return; }

    const firstFilter = /action\s"(\w*?)"/gim;
    const secondFilter = /\'(.*?)\'/gi;
    let matchedActions = templateString.match(firstFilter);

    if (!matchedActions) { return; }

    let actionNames = matchedActions.map(item => {
      return item.replace(/\"/g, '\'').match(secondFilter)[0].replace(/\'/g, '');
    });

    // Loop through the list of actions and set up no-ops on the local context
    // so that the test app doesn't explode
    actionNames.forEach(action => {
      if (!this.get(`actions.${action}`)) {
        this.set(`actions.${action}`, function() {});
        console.log(`Setting up a no-op for action name of ${action}`); //:brule:
      }
    });
  },
  /**
   * Grabs the input from the parent instance's code editor, compiles it into a
   * real-live HTMLBars template, registers it on the container as a partial
   * and makes it available as output for the preview component's template to
   * render.
   *
   * New partials are created for every change, using a date string as the
   * partial name to avoid collisions.
   *
   * TODO: Use lookup partial names that can be mapped and retrieved instead of
   * making new ones each time
   *
   * @method _generateDescription
   * @param {string} templateString String to generate template from
   */
  _generateDescription(templateString) {
    try {
      let timestamp = Date.now();

      // Ensure non-existant passed in actions don't cause the app to explode
      this._checkActionRefs(templateString);

      // Compile the string into a template and register it on the container
      getOwner(this).register(`template:partials/live-preview-${timestamp}`, HTMLBars.compile(templateString));
      // Update the reference of the preview's partialName to match the newly generated partial
      this.set('partialName', `partials/live-preview-${timestamp}`);
      this.set('compilerError', '');
    } catch(ex) {
      this.set('partialName', '');
      this.set('compilerError', ex);
    }
  },

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * On init we map the passed `contextActions` to real actions in this
   * component's actions hash to ensure they're available at compile time.
   * @method init
   */
  init() {
    this._super(...arguments);

    const actions = this.get('contextActions');
    const yellAboutIt = (thang) => { console.log(`${thang} called`); };

    for (let action in actions) {

      if (!(actions.hasOwnProperty(action))) { return; }
      if (this.get(`actions.${action}`)) { return; } // already set, do less

      if (typeof actions[action] === 'function') {
        this.set(`actions.${action}`, action);
      } else {
        this.set(`actions.${action}`, yellAboutIt(action));
      }
    }
  },

  /**
   * Whenever attrs are received fire the `_generateDescription` method to
   * generate a partial that will be rendered.
   *
   * @event didReceiveAttrs
   */
  didReceiveAttrs() {
    let description = this.get('description') || '';
    this._generateDescription(description);
  },

  // Actions
  // ---------------------------------------------------------------------------

  actions: {},

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class='partial-wrapper'>
      {{#fountainhead-state as |state stateActions|}}
        {{partial partialName}}
      {{/fountainhead-state}}

      {{! Render parsing errors for debugging. Can be hidden with CSS if desired }}
      {{#if compilerError}}
        {{#fountainhead-alert brand='danger' classNames='compiler-error'}}
          <h4>Compiler Error</h4>
          <p>
          There was a problem compiling the handlebars syntax in the
          markdown description for this class. <b>Note:</b> Any line numbers
          referenced below start from the first line of the markdown description.
          </p>
          <p><b>{{compilerError}}</b></p>
        {{/fountainhead-alert}}
      {{/if}}
    </div>
  `
});

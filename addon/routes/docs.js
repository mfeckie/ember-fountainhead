import Ember from 'ember';
const { $, Route } = Ember;

export default Route.extend({

  // Hooks
  // ---------------------------------------------------------------------------

  model() {
    return $.ajax('/docs/index.json').then(
      res => res,
      ex => {
        return null;
      }
    );
  }
});

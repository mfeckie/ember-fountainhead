import Ember from 'ember';
const { $, Route } = Ember;

export default Route.extend({
  model(params) {
    return $.ajax(`/docs/${params.itemId}.json`).then(
      res => res,
      ex => {
        return;
      }
    );
  }
});

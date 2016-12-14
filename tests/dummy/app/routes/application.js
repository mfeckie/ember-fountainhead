import Route from 'ember-route';

export default Route.extend({
  activate() {
    this.transitionTo('docs.index');
  }
});

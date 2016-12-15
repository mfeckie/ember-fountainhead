import Route from 'ember-route';

export default Route.extend({
  /**
   * This app currently doesn't have any routes other than docs, so when the
   * app route is entered check if we're going anywhere. If not, redirect to
   * the docs route for the user.
   * @event activate
   */
  activate() {
    if (document.location.pathname === '/') {
      this.transitionTo('docs.index');
    }
  }
});

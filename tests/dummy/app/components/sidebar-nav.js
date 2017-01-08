import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * Demo app sidebar will likely be the sidebar that we use for guides.
 * @class SidebarNav
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({
  layout: hbs`
    <nav>
      <ul>
        <li>{{link-to 'Home' 'index' classNames='item-link'}}</li>
        <li>{{link-to 'Demo' 'docs' classNames='item-link'}}</li>
      </ul>
    </nav>
  `
});

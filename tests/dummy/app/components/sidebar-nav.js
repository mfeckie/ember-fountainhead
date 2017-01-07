import hbs from 'htmlbars-inline-precompile';
import Sidebar from 'ember-fountainhead/components/fountainhead-sidebar/sidebar'

export default Sidebar.extend({
  layout: hbs`
    {{#fountainhead-sidebar/section title='Ember Fountainhead'}}
      <ul class="item-group">
        <li class="item-group-item">{{link-to 'Home' 'index' classNames='item-link'}}</li>
        <li class="item-group-item">{{link-to 'Getting Started' 'getting-started' classNames='item-link'}}</li>
        <li class="item-group-item">{{link-to 'Demo' 'docs' classNames='item-link'}}</li>
      </ul>
    {{/fountainhead-sidebar/section}}
  `
});

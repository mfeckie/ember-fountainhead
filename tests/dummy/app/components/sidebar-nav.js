import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div>Sidebar Nav</div>
    <ul>
      <li>{{link-to 'Home' 'application'}}</li>
      <li>{{link-to 'Getting Started' 'getting-started'}}</li>
      <li>{{link-to 'Demo' 'docs'}}</li>
    </ul>
  `
});

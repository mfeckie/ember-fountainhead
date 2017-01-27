import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-sidebar/group', 'Integration | Component | fountainhead sidebar/group', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-sidebar/group}}`);

  assert.equal(this.$().text().trim(), 'Give me some items to display!');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-get-started', 'Integration | Component | fountainhead get started', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountainhead-get-started}}`);

  assert.ok(this.$().text().includes('It looks like you haven\'t generated your app\'s documentation'),
    'renders included getting started message');
});

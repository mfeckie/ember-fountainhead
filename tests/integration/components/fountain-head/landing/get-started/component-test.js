import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/landing/get-started', 'Integration | Component | landing/get started', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/landing/get-started}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '),
    'Welcome to Ember Fountainhead! It looks like you haven\'t generated your app\'s documentation yet. To get started, run ember fountainhead-gendocs.');
});

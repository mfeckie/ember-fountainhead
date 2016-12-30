import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/docs/index/landing', 'Integration | Component | fountain head/docs/index/landing', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/docs/index/landing}}`);

  assert.equal(this.$().text().trim().replace(/\s\s+/g, ' '),
    'Welcome to Ember Fountainhead! It looks like you haven\'t generated your app\'s documentation yet. To get started, run ember fountainhead-gendocs.');
});

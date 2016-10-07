import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('docs-page/live-description', 'Integration | Component | docs page/live description', {
  integration: true
});

test('it renders', function(assert) {
  this.set('descriptionText', '<p>Fountainhead is neato!</p>');

  this.render(hbs`{{docs-page/live-description descriptionText=descriptionText}}`);

  assert.equal(this.$().text().trim(), 'Fountainhead is neato!');
});

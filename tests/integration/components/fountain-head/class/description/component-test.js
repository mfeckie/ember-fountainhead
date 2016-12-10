import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/class/description', 'Integration | Component | class/description', {
  integration: true
});

test('it renders', function(assert) {
  this.set('descriptionText', '<p>Fountainhead is neato!</p>');

  this.render(hbs`{{fountain-head/class/description description=descriptionText}}`);

  assert.equal(this.$().text().trim(), 'Fountainhead is neato!');
});

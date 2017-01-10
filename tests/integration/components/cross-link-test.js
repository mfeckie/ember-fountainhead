import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cross-link', 'Integration | Component | cross-link', {
  integration: true
});

/*
 * Fun note on testing addon link-tos: it seems like you can't. The router isn't
 * running in integration tests and trying to start it throws some fun errors. 😞
 */

test('it doesnt return a link-to if without a class or module', function(assert) {
  this.render(hbs`{{cross-link}}`);

  assert.equal(this.$().text().trim(), '', 'If a required module or class is not passed, do less');
});

test('it makes a link-to for passed classes', function(assert) {
  this.render(hbs`{{cross-link class='SomeDoc.Class'}}`);
  let anchor = this.$('a');

  assert.ok(anchor.length, 'Returns an anchor');
  assert.equal(anchor.text(), 'SomeDoc.Class Class');
});

test('it makes a link-to for passed modules', function(assert) {
  this.render(hbs`{{cross-link module='SomeModule'}}`);
  let anchor = this.$('a');

  assert.ok(anchor.length, 'Returns an anchor');
  assert.equal(anchor.text(), 'SomeModule Module');
});

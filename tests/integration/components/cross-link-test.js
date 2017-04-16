import Object from 'ember-object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// Component looks up router & current route in init to get a fallback model name,
// Mock out objects so that the .get() calls don't blow up tests
const Router = Object.extend({
  currentRouteName: 'testing'
});

const TestRoute = Object.extend({
  currentModel: {
    name: 'TestModel'
  }
});

moduleForComponent('cross-link', 'Integration | Component | cross link', {
  integration: true,
  beforeEach() {
    this.register('router:main', Router);
    this.register('route:testing', TestRoute);
  }
});

/*
 * Fun note on testing addon link-tos: it seems like you can't. The router isn't
 * running in integration tests and trying to start it throws some fun errors. 😞
 */

test('it uses class id as anchor text for inline usage', function(assert) {
  this.render(hbs`{{cross-link class='SomeDoc.Class'}}`);
  let anchor = this.$('a');

  assert.ok(anchor.length, 'Returns an anchor');
  assert.ok(anchor.text().includes('SomeDoc.Class'),
    'inline template uses class id as anchor text');
});

test('it uses class id and query params as anchor text for inline usage', function(assert) {
  this.render(hbs`{{cross-link class='SomeDoc.Class' item='init'}}`);
  let anchor = this.$('a');

  assert.ok(anchor.length, 'Returns an anchor');
  assert.ok(anchor.text().includes('SomeDoc.Class:init'),
    'inline template uses class id and item query param as anchor text');
});

test('it yields block form as anchor text', function(assert) {
  this.render(hbs`{{#cross-link class='SomeDoc.Class'}}BLOCK TEXT{{/cross-link}}`);
  let anchor = this.$('a');

  assert.ok(anchor.length, 'Returns an anchor');
  assert.ok(anchor.text().includes('BLOCK TEXT'),
    'block template yields content as anchor text');
});

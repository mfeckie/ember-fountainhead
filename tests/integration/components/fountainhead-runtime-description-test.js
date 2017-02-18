import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-runtime-description', 'Integration | Component | fountainhead runtime description', {
  integration: true
});

// This was broken but seems to work fine now...
// if (!/PhantomJS/.test(window.navigator.userAgent)) {
test('it compiles html in descriptions', function(assert) {
  this.set('descriptionText', '<p>Fountainhead is neato!</p>');
  this.render(hbs`{{fountainhead-runtime-description description=descriptionText}}`);

  assert.equal(this.$('p').length, 1, 'only one paragraph is rendered');
  assert.ok(this.$().text().includes('Fountainhead is neato!'),
    'description html is rendered');
  assert.notOk(this.$('.compiler-error').length,
    'no parsing errors for valid content');
});

test('it compiles components in descriptions', function(assert) {
  this.set('descriptionText', '{{test-component}}');
  this.render(hbs`{{fountainhead-runtime-description description=descriptionText}}`);

  assert.ok(this.$().text().includes('Test Component'),
    'description component is rendered');
  assert.notOk(this.$('.compiler-error').length,
    'no parsing errors for valid content');
});

test('it renders an error for invalid content', function(assert) {
  this.set('descriptionText', '<p>Oh no, unterminated block component! {{#fountainhead-svg}}</p>');
  this.render(hbs`{{fountainhead-runtime-description description=descriptionText}}`);

  assert.ok(this.$('.compiler-error').length, 'error alert message rendered');
  assert.ok(this.$('.compiler-error').text().includes('Compiler Error'),
    'error alert has compiler error inside');
});

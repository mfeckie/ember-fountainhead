import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountainhead-runtime-description', 'Integration | Component | fountainhead-runtime-description', {
  integration: true
});

// Not sure where the breakdown is, but Phantom doesn't seem to be able to handle
// the runtime parsing. Not really surprising. Would be nice to figure out at some
// point
if (!/PhantomJS/.test(window.navigator.userAgent)) {
  test('it renders', function(assert) {
    this.set('descriptionText', '<p>Fountainhead is neato!</p>');

    this.render(hbs`{{fountainhead-runtime-description description=descriptionText}}`);

    assert.equal(this.$().text().trim(), 'Fountainhead is neato!');
    assert.notOk(this.$('.compiler-error').length, 'no parsing errors for valid content');
  });

  test('it renders an error for invalid content', function(assert) {
    this.set('descriptionText', '<p>Oh no, unterminated block component! {{#fountainhead-svg}}</p>');

    this.render(hbs`{{fountainhead-runtime-description description=descriptionText}}`);

    assert.ok(this.$('.compiler-error').length, 'compiler error message div is rendered');
    assert.ok(this.$('.compiler-error').text().includes('Error: Parse error '),
      'error message div has compile error inside');
  });
}

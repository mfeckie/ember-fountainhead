import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/shared/runtime-description', 'Integration | Component | fountain head/shared/runtime description', {
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
  });
}

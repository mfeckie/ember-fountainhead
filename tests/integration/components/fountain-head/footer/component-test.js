import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fountain-head/footer', 'Integration | Component | footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fountain-head/footer}}`);

  assert.equal(this.$().text().trim(), 'Made with love by HealthSparq Open Source Labs');
});

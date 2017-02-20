import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | api');

test('visiting /api', function(assert) {
  visit('/api');

  andThen(function() {
    assert.equal(currentURL(), '/api');
    assert.ok(find('[data-test="welcome-message"]'));
  });
});

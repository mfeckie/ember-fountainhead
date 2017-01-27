import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import metaFixture from '../../../fixtures/meta';

const fountainhead = Ember.Service.extend();

moduleForComponent('fountainhead-pages/docs-index', 'Integration | Component | fountainhead pages/docs index', {
  integration: true,
  beforeEach() {
    this.register('service:fountainhead', fountainhead);
    this.inject.service('fountainhead');
  }
});

test('it renders getting started when there is no documentation meta', function(assert) {
  this.render(hbs`{{fountainhead-pages/docs-index}}`);

  assert.ok(this.$().text().includes('It looks like you haven\'t generated your app\'s documentation yet'),
    'Getting started message is displayed when consumer has no data');
});

test('it renders welcome message when there is documentation classes', function(assert) {
  this.set('fountainhead.meta', metaFixture);

  this.render(hbs`{{fountainhead-pages/docs-index}}`);

  assert.ok(this.$().text().includes('Browse to a module or class using the sidebar'),
    'Welcome message is displayed when documentation meta is present');
});

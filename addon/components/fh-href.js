import Ember from 'ember';

const { LinkComponent, computed } = Ember;

/**
 * Extend Ember `link-to` for URLs with a hash fragment available for History
 * location consumers.
 *
 * NOTE: If we can figure out how to pass a model to a link-to with a hash fragment,
 * this component is not needed, eg:
 * `{{link-to 'Prop' 'api.classes' 'someClass#prop'}}`
 * @class FHHref
 * @constructor
 * @extends Ember.LinkComponent
 * @private
 */
export default LinkComponent.extend({
  _href: computed('href', function() {
    const id = this.get('fragmentId');
    return `${this.get('href')}${id ? `#${id}` : ''}`;
  }),
  attributeBindings: ['_href:href']
});

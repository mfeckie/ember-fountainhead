import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------

  content: null,

  sourceUrl: '',

  // Properties
  // ---------------------------------------------------------------------------

  itemAttributes: null,

  layout,

  // Methods
  // ---------------------------------------------------------------------------

  // Hooks
  // ---------------------------------------------------------------------------

  didReceiveAttrs({newAttrs}) {
    const { content: { value } } = newAttrs;
    const itemAttrs = {
      constructor: !!(value.is_constructor),
      definedIn: `${value.file}:${value.line}`,
      extends: value.extends,
      module: value.module
    };

    this.set('itemAttributes', itemAttrs);
  }
});

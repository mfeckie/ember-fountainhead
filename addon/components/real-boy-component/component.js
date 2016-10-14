import Ember from 'ember';
import layout from './template';

/**
 * Real Boy Component
 *
 * Component handles displaying dynamic content only if passed
 *
 *  ##### No dynamic content
 *
 * ```handlebars
 * {{real-boy-component}}
 * ```
 * {{real-boy-component}}
 *
 * ##### Dynamic content
 *
 * ```handlebars
 * {{#real-boy-component}}
 *   Dynamic Content
 * {{/real-boy-component}}
 * ```
 * {{#real-boy-component}}
 *   Dynamic Content
 * {{/real-boy-component}}
 *
 * {{component-playground code="{{real-boy-component}}"}}
 * @class Component.RealBoyComponent
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout
});

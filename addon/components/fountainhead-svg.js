import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

/**
 * @class FountainheadSVG
 * @constructor
 * @extends Ember.Component
 */
export default Component.extend({

  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * File path to svg definitions file
   * @property filePath
   * @type {string}
   * @passed
   * @optional
   * @default assets/svg-defs.svg
   */
  filePath: '/ember-fountainhead/svg/symbol-defs.svg',
  /**
   * External SVG definitions file reference SVG id.
   * @property svgId
   * @type {string}
   * @passed
   * @required
   */

  // Properties
  // ---------------------------------------------------------------------------
  /**
   * @property attributeBindings
   * @type {Array}
   * @default ['data-test']
   */
  attributeBindings: ['data-test'],
  /**
   * @property classNames
   * @type {Array}
   * @default ['fh-svg']
   */
  classNames: ['fh-svg'],
  /**
   * @property classNameBindings
   * @type {Array}
   * @default ['svgId']
   */
  classNameBindings: ['svgId'],
  /**
   * @property tagName
   * @type {string}
   * @default 'svg'
   */
  tagName: 'svg',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <title>{{svgId}} icon</title>
    <use xlink:href='{{filePath}}#{{svgId}}'></use>
  `
});

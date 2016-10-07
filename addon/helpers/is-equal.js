import Ember from 'ember';

/**
 * Helper to compare two values to see if they are equal. Values must be of the same type.
 *
 * @returns {boolean}
 */
export function isEqual(params) {
  if (params.length !== 2) { return false; }
  return params[0] === params[1];
}

export default Ember.Helper.helper(isEqual);

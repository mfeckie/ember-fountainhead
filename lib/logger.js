'use strict';

function log(message, line) {
  console.warn(`${message},${line}`);
}

/**
 * Logger method that takes in YUIDoc warnings array and checks those warnings
 * against special features that we support. This allows us to use special tags
 * for Ember apps, and still support logging for incorrect tags, but suppress
 * warnings for unknown tags we have added
 * @class logger
 * @constructor
 * @param {Object} options Contains logger options and data to handle
 * @param {Array} options.warnings      YUIDoc generated warnings array of type: `{ message, line }`
 * @param {Array} options.whiteListTags Tags whitelisted for support in Ember Fountainhead
 */
module.exports = function logger(options) {
  let warnings = options.warnings || [];
  let whiteListTags = options.whiteListTags || [];

  warnings.forEach(warning => {

    // Check if warning is for an unkown tag, and if it is, check if the tag is
    // white listed
    if (warning.message.includes('unknown tag')) {
      let tag = /unknown tag: (.*)/.exec(warning.message);

      // If a tag wasn't found, we don't know what this is so just log it
      if (!tag.length) {
        return log(warning.message, warning.line);
      }

      // If the tag is white listed, don't log it
      if (whiteListTags.includes(tag[1])) { return; }

      // Unknown tag that isn't whitelisted, log it
      return log(warning.message, warning.line);
    }

    // End of the line, log the message
    log(warning.message, warning.line);
  });
};

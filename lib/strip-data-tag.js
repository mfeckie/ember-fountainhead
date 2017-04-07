'use strict';

module.exports = function stripDataTags(docString) {
  var dataStripper = /(data=({.*}))\n/;
  return docString.replace(dataStripper, '');
};

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Disable JSHint by telling ember-cli-qunit not to use the lintTree
    'ember-cli-qunit': {
      useLintTree: false
    },

    sassOptions: {
      extension: 'scss'
    }
  });

  return app.toTree();
};

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Disable JSHint by telling ember-cli-qunit not to use the lintTree
    'ember-cli-qunit': {
      useLintTree: false
    },

    // Don't fingerprint the ember-logo b/c it is pulled using a path from the
    // docs meta which doesn't get updated with fingerprint hash
    fingerprint: {
      exclude: ['ember-logo']
    },

    sassOptions: {
      extension: 'scss'
    }
  });

  return app.toTree();
};

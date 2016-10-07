// IMPORT ME INTO YOUR ROUTER TO USE! YAAAAAY!

export default function(self) {
  self.route('docs', function() {
    self.route('classes', { path: '/docs/classes/:itemId'});
    self.route('modules', { path: '/docs/modules/:itemId'});
  });
}

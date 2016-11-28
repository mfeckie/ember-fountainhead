// IMPORT ME INTO YOUR ROUTER TO USE! YAAAAAY!

// Nested routes aren't actually working???

export default function(self) {
  self.route('docs', function() {
    self.route('classes', { path: '/classes/:itemId'});
    self.route('modules', { path: '/modules/:itemId'});
  });
}

# Ember Fountainhead [![Build Status](https://travis-ci.org/healthsparq/ember-fountainhead.svg?branch=develop)](https://travis-ci.org/healthsparq/ember-fountainhead)

Ember Fountainhead is an in-app solution for rendering robust documentation for
your Ember application's source code. Fountainhead uses YUIDoc to render your
inline code documentation, with real, working examples of your component code
that you can test and see functioning in the context of your docs.

It Just Works™.

## Installation

### Dependencies

If you intend to use the `component-playground` to render interactive documentation,
you need install the dependent addons first:

```
ember install ember-component-playground
ember install ivy-codemirror
```

You're golden!

### Mounting Fountainhead's Routes

In order to make use of Fountainhead's in-app documentation features, you will
need to import and mount its routes so that they are available to you. We recommend
doing this explicitly when developing in the context of a `development` environment,
but you can of course choose to always mount Fountainhead's routes.

If you wish to take advantage of environment-specific loading, you'll need to
set up your `ember-cli-build.js` file to consume and store the environment argument:

```javascript
module.exports = function(environment) {
  var ENV = {
    environment: environment
  };

  return ENV;
}
```

To mount the routes, make these additions in your app's `router.js`:

```javascript
import fountainheadRoutes from 'ember-fountainhead/utils/route-setup';
import config from '../config/environment';

Router.map(function() {
  if (config.environment === 'development') {
    fountainheadRoutes(this);
  }
});
```

### Styles

If you want to use Fountainhead's built in styles, you'll need to install `ember-cli-sass`:

```
ember install ember-cli-sass
```

You'll then be able to import styles for Fountainhead and Component-Playground into your app's css:

```sass
@import 'ember-component-playground/styles';
@import "ember-fountainhead/styles";
```

You can alternatively write your own custom CSS for Fountainhead as you see fit.

## Configuration

The `ivy-codemirror` addon generates the in browser text editor used by the `component-playground`.
Codemirror comes bundled with many themes. To specify which you would like in
your app, add the following to your `ember-cli-build.js` file inside of the
callback for `new EmberApp`:

```javascript
var app = new EmberApp(defaults, {
  codemirror: {
    modes: ['handlebars'], // 'handlebars' required
    themes: ['monokai'] // 'monokai' looks great!
  }
}
```

Replace "`monokai`" with whichever theme you would like to use. Themes are available
in the codemirror folder inside of `bower_components`.

## THINGS TO GET DONE

- [x] Scaffold primary component structure
  - [x] Build header
  - [x] Build sidebar
    - [x] Sections
    - [x] Section headers
    - [ ] Search bar
    - [x] Item groups
  - [ ] Build Doc Page
    - [x] Title
    - [x] Attributes
    - [x] Live description
    - [x] Class Items
    - [ ] Tab bar, tab components
    - [ ] Status filters (inherited, protected, private, deprecated)
    - [ ] Tab output
- [x] Build landing "page"
- [x] Set up routes
- [x] Write model hooks to fetch models as JSON from project file structure
- [ ] App Styling
  - [ ] General
  - [ ] Header
  - [ ] Sidebar
  - [ ] Classes
  - [ ] Class Items
- [ ] README Documentation
  - [x] Install deps
  - [x] CLI Build Spells
  - [x] CLI Build theme specifications for code mirror
  - [x] Mounting doc routes
  - [x] Import addon styles

# Ember Fountainhead [![Build Status](https://travis-ci.org/healthsparq/ember-fountainhead.svg?branch=develop)](https://travis-ci.org/healthsparq/ember-fountainhead)

Ember Fountainhead is an in-app solution for rendering robust documentation for
your Ember application's source code. Fountainhead uses YUIDoc to render your
inline code documentation, with real, working examples of your component code
that you can test and see functioning in the context of your docs.

It Just Works™.

## Installation

###### Addon
```
ember install ember-fountainhead
```

##### Styles
If you want to use Fountainhead's built in styles, you'll need to install `ember-cli-sass`:

```
ember install ember-cli-sass
```

You'll then be able to import styles for Fountainhead and Component-Playground into your app's css:

```sass
@import "ember-fountainhead/styles";
```

You can alternatively write your own custom CSS for Fountainhead as you see fit.

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

### Configuration

Configuration for this addon and the build scripts can be specified in a `fountainhead.js` file located in your repo's root. Note that all paths are resolved using `path.resolve`, meaning that either a relative path or paths starting with `./` will resolve to your project's root directory.

- entry: Can be a string, or array of strings.
- output: Object
  - path: Path for output files
  - filename: Filename for documentation meta data file

### Ember Component Playground

The [Ember Component Playground](https://github.com/healthsparq/ember-component-playground) addon is a great compliment to this addon that allows real time examples of components. See the repo for installation.

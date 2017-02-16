---
id: getting-started
linkLabel: Getting Started
title: Getting Started
---

#### Installation
Install Ember Fountainhead using Ember CLI:

`ember install ember-fountainhead`

_Currently Ember Fountainhead must be used inside of an Ember application._

#### Documentation Generation
If you already have documentation comments in your source code, generating your documentation files is an Ember command:

`ember docs`

If you haven't added documentation comments to your souce code, you'll need to
write some. Fountainhead uses [https://yui.github.io/yuidoc/](YUIDoc) for the
source code comment parsing. YUIDoc uses a syntax similar to JSDoc, but does not
parse your source code, only the comments.

See [https://yui.github.io/yuidoc/syntax/index.html](YUIDoc Syntax) for details
on YUIDoc tags.

#### Excluding from Production
To exclude Fountainhead from your production builds. You can **blacklist** it as
part of your `ember-cli-build.js`configuration using the `addons.blacklist`
array:

```javascript
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    addons: {
      blacklist: EmberApp.env() === 'production' ? ['ember-fountainhead'] : []
    }
  });

  return app.toTree();
};
```

#### Configuration
Configuration for this addon and the build scripts can be specified in a
`fountainhead.js` file located in your repo's root.

```javascript
module.exports = {
  entry: ['app'], // Defaults to 'app' for apps and 'addon' for addons
  output: {
    path: 'public/docs' // path to save generated docs to
    filename: 'fountainhead-data.json' // name to save generated file to
  }
}
```

_Note that all paths are resolved using `path.resolve`, meaning that
either a relative path or paths starting with `./` will resolve to
your project's root directory._

#### Addon Styles
Ember Fountainhead's styles are bundled into your `vendor.css` by
default. The styles are scoped to addon namespaces to prevent conflicts with
your application's styles. You can disable style sheet bundling by setting
`includeVendorStyles` to false in your `fountainhead.js` configuration file.

If you'd like to extend Fountainhead's styles and your project uses SASS, you
can turn off the auto bundle to the vendor file and directly import Fountianhead
into your SASS:

`@import 'ember-fountainhead'`

See the themes in `app/styles/ember-fountianhead/themes` for variables you can
override.

#### Ember Component Playground
The [Ember Component Playground](https://github.com/healthsparq/ember-component-playground){target="_blank"}
addon is a great compliment to this addon that allows real time examples of
components. See the repo for installation.

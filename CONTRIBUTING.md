# Contributing

Contributions are welcome!!! Please see below for repo conventions and roadmap items that we would love help on.

### Roadmap

- [] Default Fountainhead to only be included in dev builds, with the option to include in prod builds
- [] Create 'page-in page' wrapper for full page fountainhead overlay in any app
- [] Bundle application svgs and export in `/public`
- [] Fix nested routing router setup util

### Documentation TODO:
- [] 'page in page' wrapper and z-index variable `$fh-page-in-page-index`

### Conventions

_Many of the conventions below are aimed at preventing Fountainhead from conflicting with a consuming application by namespacing all components and styles._

###### Application Organization
- All components are namespaced inside the `fountain-head` directory.
- All styles are namespaced inside the `ember-fountainhead` directory.
- All setup and application level styles are located inside of a `base` directory.
- All component styles are namespaced inside a `components` directory.

##### Code Conventions

- Use inline template declarations. (Syntax highlighting available through atom `language-ember` package)
- All files must pass `.eslintrc` config specified in repo

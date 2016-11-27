# Contributing

Contributions are welcome!!! Please see below for repo conventions and roadmap items that we would love help on.

### Roadmap

##### General
- [] Default Fountainhead to only be included in dev builds, with the option to include in prod builds
- [] Create 'page-in page' wrapper for full page fountainhead overlay in any app
- [] Bundle application svgs and export in `/public`
- [] Fix nested routing router setup util

##### Addon
- [] Pull in ember-radical/schematics for components and styles for dummy app
- [] Move all components into a master `fountain` directory for super easy filtering of app files
- [] Rename app level components to `fountain-*` instead of `docs-*` for clarity between app and doc pages
- [] Switch to `ember-cli-codemirror-shim` for component-playground && codemirror
- [] Use `included` hook to pull in ember && github svg logos
- [] Pull in aset of svg line icons
  - File icon for file page
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

##### Code Highlighting
- [x] Set up prism.js highlighting
- [] Configurable highlighting languages
- [] Configurable highlighting styles
- [] Configurable highlighting addons

##### Data Scripts
- [x] Handle multiple entry points
- [x] Safely read project configuration and package.json and decorating with defaults
- [x] Handle validating/cleaning destination path before docs generation
- [x] Generate raw yuidoc json file and save in tmp dir
- [x] Generate fountainhead json data files by parsing markdown and decorating individual class files
- [] Create unit tests for utility modules
- [] Flag framework types based on `extends` for automagic organization

##### README Documentation
- [x] Install deps
- [x] CLI Build Spells
- [x] CLI Build theme specifications for code mirror
- [x] Mounting doc routes
- [x] Import addon styles
- [] How to ignore public/docs to prevent rebuilding app on data files change (.watchmanconfig)
- [] Creating a `fountainhead.js` configuration file
- [] Using .watchmanconfig to ignore docs output directory to prevent rebuilds
- [] Optional font family scss import for source code pro
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
- Use `ember-cli-shims` to mock Ember modular imports: https://github.com/emberjs/ember.js/blob/master/vendor/ember/shims.js

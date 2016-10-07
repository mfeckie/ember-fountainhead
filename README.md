# Ember Fountainhead

Ember Fountainhead is an in-app solution for rendering robust documentation for
your Ember application's source code. Fountainhead uses YUIDoc to render your
inline code documentation, with real, working examples of your component code
that you can test and see functioning in the context of your docs.

It Just Works™.

## Installation

* `git clone git@github.com:healthsparq/ember-fountainhead.git` this repository
* `cd ember-fountainhead`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

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
  - [ ] Install deps
  - [ ] CLI Build Spells
  - [ ] CLI Build theme specifications for code mirror
  - [ ] Mounting doc routes
  - [ ] Import addon styles

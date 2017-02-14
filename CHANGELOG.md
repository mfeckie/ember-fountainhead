# Changelog

TODO: Are we good to go with only grabbing the repo url? what about BB vs GH repos?
TODO: Scope button css
TODO: Make this work: `{{cross-link 'serverMiddleware'}}`

# 3.0.0
Ember Fountainhead v3 includes some fixes and cleanup to the addon.
The release should require very little change in consuming apps, but
we're releasing it as a major so there's visibility around the
changes.

#### Release Notes:
- Fountainhead no longer causes a full reload when CSS changes
  trigger a new build. This was fixed by moving the default output
  path for Fountainhead data files outside of the `/public` dir.
  _(This should also solve a bug with an infinite build loop that
  required a watchman shutdown when first starting to use
  Fountianhead)_
  
  **Action required:** If you're ignoring the data files generated
  by Fountainhead you'll need to update your `.gitignore` to `/docs`.
  You can also remove the public directory paths from your
  `.watchmanconfig`
- `fountainhead.js` configuration file can now export an object or function when
  env specific builds are required.



## 2.3.0 (02-6-2017)
Added:
- Use Ember 2.11 within Fountainhead demo app
- Simpler solution for importing template compiler thanks to @mfeckie

## 2.2.0 (02-4-2017)
Added:
- Handle importing the template compiler from npm or bower depending on the
  consuming app's Ember version

## 2.1.2 (01-31-2017)
Fixed:
- Stops overwriting a computed prop vital to tabs functioning properly; uses `_oldHidden` instead of `_hidden`

## 2.1.1 (01-31-2017)
Fixed:
- Parameter destructuring in logger removed to support Node v4

## 2.1.0 (01-27-2017)
Added:
- Ability to suppress error logging using `quiet` config.
- Support for Fountainhead tags using `whiteListTags`

Fixed:
- Class names for fountainhead SVGs scoped to project to fix CSS clashes

## 2.0.1 (01-27-2017)
Fixed:
- Removes use of deprecated args in component lifecycle hook methods
- Removes empty tests

## 2.0.0 (01-27-2017)
Version 2 Release: Fountainhead component structure and addon integration stabilized.
Highlights:

- Consuming applications should no longer import the route setup utility. Addon
  handles auto-registering routes in an initializer
- Addon is completely self-contained and can easily be excluded from production
  builds using the addon blacklist CLI hook.
- Addon is completely component based. Using routes only for model fetching and
  controllers only for query params. Any changes to addon functionality should
  occur in a component.
- Addon liveEdit enabled for documentation hot updates in development envs.
- Addon command `docs` added for easier document building.

The addon structure is now stabilized. Going forward the CHANGELOG will reflect
all breaking changes with documentation on upgrading.

We hope you enjoy Ember Fountainhead!

# Changelog

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

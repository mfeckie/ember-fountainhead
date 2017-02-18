---
id: fountainhead-configuration
linkLabel: Configuring Fountainhead
title: Configuring Fountainhead
---

Configuration Notes:

- Fountainhead has sane defaults for all config options. Standard apps/addons should
  be able to generate and use documentation w/out any configuration.
- Configuration for addon is specified in `fountainhead.js` file instead of 
  `ember-cli-build`. This is b/c we need the configs for the data generation.
- Configuration file can export an object or a function when env specific builds
  are needed (much like webpack). The function will be passed an `env` parameter.
  (Include example of this addon for GH pages)
- List possible configuration options. See webpack for nice example.

#### Fountainhead Service Namespace

You can override the root namespace that all Fountainhead requests use by setting
the {{c-l class='Fountainhead' item='apiNamespace'}}. The default value is `/docs`.

```javascript
// app.js
import Fountainhead from 'ember-fountainhead/services/fountainhead';

Fountainhead.reopen({ apiNamespace: '/special-namespace/v1/' });
```

The meta request would now use url: `/special-namespace/v1/meta.json`

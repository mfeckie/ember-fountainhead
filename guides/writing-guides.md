---
id: writing-guides
linkLabel: Writing Guides
title: Writing Guides with Ember Fountainhead
---

Ember Fountainhead makes writing guides easy. Guides can be written in markdown
and Ember components can be used the same as in DocBlocks. For easy previewing, any
guide saved in `/guides` will be observed by Ember CLI and live reload on change.

{{#fountainhead-alert canDismiss=false brand='info'}}
{{fountainhead-svg svgId='info'}} You can save guides in any location in your app,
but if they are not in `/guides` or `/app` changes will not trigger live reloads.
{{/fountainhead-alert}}

## Consuming Guides
Currently Fountainhead must be configured to consume each guide using a `fountainhead.js`
configuration file. _(This will be updated in the future for automatic consumption
of files in the `/guides` directory)_

##### fountainhead.js
```javascript
module.exports = {
  guides: [
    'guides/getting-started.md',
    'guides/configuration.md',
    'guides/writing-guides.md',
    'guides/tools.md',
    'guides/markdown-in-fountainhead.md'
  ]
}
```

{{#fountainhead-alert canDismiss=false brand='info'}}
{{fountainhead-svg svgId='info'}} Guide order will be matched in the guide page
navigation.
{{/fountainhead-alert}}


## Adding Meta Data

Fountainhead uses [yaml front matter](https://www.npmjs.com/package/front-matter)
when parsing guide files. This lets you easily configure a guide in the file.
The following configurations can optionally be used to control how your guide
is created:

Attribute | Use
--- | ---
`id` | Unique identifier for a guide. Also used as the url model id
`linkLabel` | Anchor text used in guide navigation
`title` | Page header text

##### your-guide&period;md
```markdown
---
id: writing-guides
linkLabel: Writing Guides
title: Writing Guides with Ember Fountainhead
---

Ember Fountainhead makes writing guides easy...
```

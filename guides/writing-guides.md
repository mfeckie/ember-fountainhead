---
id: writing-guides
linkLabel: Writing Guides
title: Writing Guides with Ember Fountainhead
---

Ember Fountainhead makes writing guides easy. Guides can be written with markdown
and Ember components can be mixed in just like with your code descriptions. Any
guides saved in `/guides` will be observed by Ember CLI and live reload on change.

{{#fountainhead-alert canDismiss=false brand='info'}}
You can save guides in any location in your app, but if they are not in `/guides`
or `/app` changes will not trigger live reloads.
{{/fountainhead-alert}}

#### Adding Meta Data

Guides can use front yaml to add meta data for any guide. The following configurations
can optionally be used to control how your guide is created:

Attribute | Use
--- | ---
id | Unique identifier for a guide. The id is also used as the url for a guide. If you don't set this it defaults to the file name.
linkLabel | Label used for guide navigation
title | Guide page title

---
id: markdown-in-fountainhead
linkLabel: Markdown in Fountainhead
title: Working with Markdown in Fountainhead
---

Fountainhead has full support for markdown in documentation blocks and guides.
If you're not familiar with markdown, there are lots of online resources. You
can start with a tutorial at [Markdown Tutorial](http://www.markdowntutorial.com/)

<em>(Markdown is parsed using [markdown-it](https://markdown-it.github.io/markdown-it/))</em>

In addition to standard markdown syntax, Fountainhead supports the following
conventions to make writing easier.

#### Glimmer Example Blocks

When writing examples you may want to provide the code for an example as well
as a rendered version of that example. Fountainhead will parse any code block
that is tagged with `glimmer` and render the contents after the code block.

_eg:_ <code>&grave;&grave;&grave;glimmer</code>

---
id: tools
linkLabel: Fountainhead Tools
title: Fountainhead Documentation Tools
---

## CrossLink Component
Use the {{c-l class='CrossLink'}} component to reference modules, classes, methods
and properties elsewhere in your documentation. {{#c-l class='CrossLink'}}See the
CrossLink Component for examples{{/c-l}}

## State in DocBlock Descriptions
Your documentation descriptions are wrapped in an instance of
[Ember Radical's `rad-state`](https://healthsparq.github.io/ember-radical/docs/classes/Component.RadState)
for a convenient and sandboxed state property and state actions. This is
convenient for including examples in your documentation that require simple
state management.

Use `state` to access the sandboxed state and any of `stateActions.open`,
`stateActions.close` and `stateActions.toggleState` to mutate the state.


## Glimmer Code Blocks
Use the identifier `glimmer` with a fenced code block to highlight the code block
contents and render an unescaped example of the code block immediately after
the code block.

The following code block

<pre class="language-markdown"><code class="language-markdown"><span class="token template-string"><span class="token string">``</span></span><span class="token template-string"><span class="token string">`glimmer
  {{some-component example=true}}
`</span></span><span class="token template-string"><span class="token string">``</span></span>
</code></pre>

Will actually be parsed as:

<pre class="language-markdown"><code class="language-markdown"><span class="token template-string"><span class="token string">``</span></span><span class="token template-string"><span class="token string">`glimmer
  {{some-component example=true}}
`</span></span><span class="token template-string"><span class="token string">``</span></span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>some<span class="token operator">-</span>component example<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre>

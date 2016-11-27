import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: ['doc-meta'],
  tagName: 'div',

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    <div class="doc-meta">
      {{#if extends}}
        <div class="meta-item">
          {{! @TODO: EXTERNAL file path component }}
          <span class="meta-extends">Extends:</span> <a href="">{{extends}}</a>
        </div>
      {{/if}}

      {{#if uses}}
        <div class="meta-item">
          {{! @TODO: EXTERNAL file path component }}
          <span class="meta-uses">Uses:</span> <a href="">{{uses}}</a>
        </div>
      {{/if}}

      {{#if file}}
        <div class="meta-item">
          {{! @TODO: FILE file path component}}
          <span class="meta-defined">Defined In:</span> <a href="file/{{file}}#{{line}}">{{file}}:{{line}}</a>
        </div>
      {{/if}}

      {{! Where is this in data?}}
      {{#if module}}
        <div class="meta-item">
          <span class="meta-module">module:</span> <a href="">{{module}}</a>
        </div>
      {{/if}}
    </div>

    {{!--
        @TODO: This info is just repeating above info and isn't even technically accurate
        for many of the modules used in Ember applications... Ember docs have removed
        this info and I think we should too...
    --}}
    {{!-- {{#if is_constructor}}
      <div class="fountain-constructor">
        <h3 class="constructor-title">Constructor</h3>
        <h4 class="method-signature">{{name}} ()</h4>
        <small class="constructor-s">Defined In: <a href="{{file}}#{{line}}">{{file}}:{{line}}</a></small>
      </div>
    {{/if}} --}}
  `
});
"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/core-button/component', ['exports', 'ember-radical/components/core-button/component'], function (exports, _emberRadicalComponentsCoreButtonComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreButtonComponent['default'];
    }
  });
});
define('dummy/components/core-card/body/component', ['exports', 'ember-radical/components/core-card/body/component'], function (exports, _emberRadicalComponentsCoreCardBodyComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreCardBodyComponent['default'];
    }
  });
});
define('dummy/components/core-card/component', ['exports', 'ember-radical/components/core-card/component'], function (exports, _emberRadicalComponentsCoreCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreCardComponent['default'];
    }
  });
});
define('dummy/components/core-card/footer/component', ['exports', 'ember-radical/components/core-card/footer/component'], function (exports, _emberRadicalComponentsCoreCardFooterComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreCardFooterComponent['default'];
    }
  });
});
define('dummy/components/core-card/title/component', ['exports', 'ember-radical/components/core-card/title/component'], function (exports, _emberRadicalComponentsCoreCardTitleComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreCardTitleComponent['default'];
    }
  });
});
define('dummy/components/core-drawer/component', ['exports', 'ember-radical/components/core-drawer/component'], function (exports, _emberRadicalComponentsCoreDrawerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreDrawerComponent['default'];
    }
  });
});
define('dummy/components/core-drawer/content/component', ['exports', 'ember-radical/components/core-drawer/content/component'], function (exports, _emberRadicalComponentsCoreDrawerContentComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreDrawerContentComponent['default'];
    }
  });
});
define('dummy/components/core-drawer/target/component', ['exports', 'ember-radical/components/core-drawer/target/component'], function (exports, _emberRadicalComponentsCoreDrawerTargetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreDrawerTargetComponent['default'];
    }
  });
});
define('dummy/components/core-dropdown/component', ['exports', 'ember-radical/components/core-dropdown/component'], function (exports, _emberRadicalComponentsCoreDropdownComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreDropdownComponent['default'];
    }
  });
});
define('dummy/components/core-dropdown/content/component', ['exports', 'ember-radical/components/core-dropdown/content/component'], function (exports, _emberRadicalComponentsCoreDropdownContentComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreDropdownContentComponent['default'];
    }
  });
});
define('dummy/components/core-dropdown/target/component', ['exports', 'ember-radical/components/core-dropdown/target/component'], function (exports, _emberRadicalComponentsCoreDropdownTargetComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreDropdownTargetComponent['default'];
    }
  });
});
define('dummy/components/core-modal/component', ['exports', 'ember-radical/components/core-modal/component'], function (exports, _emberRadicalComponentsCoreModalComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreModalComponent['default'];
    }
  });
});
define('dummy/components/core-modal/header/component', ['exports', 'ember-radical/components/core-modal/header/component'], function (exports, _emberRadicalComponentsCoreModalHeaderComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreModalHeaderComponent['default'];
    }
  });
});
define('dummy/components/core-state/component', ['exports', 'ember-radical/components/core-state/component'], function (exports, _emberRadicalComponentsCoreStateComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreStateComponent['default'];
    }
  });
});
define('dummy/components/core-svg/component', ['exports', 'ember-radical/components/core-svg/component'], function (exports, _emberRadicalComponentsCoreSvgComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreSvgComponent['default'];
    }
  });
});
define('dummy/components/core-tabs/component', ['exports', 'ember-radical/components/core-tabs/component'], function (exports, _emberRadicalComponentsCoreTabsComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreTabsComponent['default'];
    }
  });
});
define('dummy/components/core-tabs/content/component', ['exports', 'ember-radical/components/core-tabs/content/component'], function (exports, _emberRadicalComponentsCoreTabsContentComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreTabsContentComponent['default'];
    }
  });
});
define('dummy/components/core-tooltip/component', ['exports', 'ember-radical/components/core-tooltip/component'], function (exports, _emberRadicalComponentsCoreTooltipComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreTooltipComponent['default'];
    }
  });
});
define('dummy/components/core-tooltip/content/component', ['exports', 'ember-radical/components/core-tooltip/content/component'], function (exports, _emberRadicalComponentsCoreTooltipContentComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreTooltipContentComponent['default'];
    }
  });
});
define('dummy/components/core-tooltip/title/component', ['exports', 'ember-radical/components/core-tooltip/title/component'], function (exports, _emberRadicalComponentsCoreTooltipTitleComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalComponentsCoreTooltipTitleComponent['default'];
    }
  });
});
define('dummy/components/fountain-head/docs', ['exports', 'ember-fountainhead/components/fountain-head/docs'], function (exports, _emberFountainheadComponentsFountainHeadDocs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocs['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/class', ['exports', 'ember-fountainhead/components/fountain-head/docs/class'], function (exports, _emberFountainheadComponentsFountainHeadDocsClass) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsClass['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/class/class-item', ['exports', 'ember-fountainhead/components/fountain-head/docs/class/class-item'], function (exports, _emberFountainheadComponentsFountainHeadDocsClassClassItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsClassClassItem['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/class/class-items-container', ['exports', 'ember-fountainhead/components/fountain-head/docs/class/class-items-container'], function (exports, _emberFountainheadComponentsFountainHeadDocsClassClassItemsContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsClassClassItemsContainer['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/class/header', ['exports', 'ember-fountainhead/components/fountain-head/docs/class/header'], function (exports, _emberFountainheadComponentsFountainHeadDocsClassHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsClassHeader['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/class/meta', ['exports', 'ember-fountainhead/components/fountain-head/docs/class/meta'], function (exports, _emberFountainheadComponentsFountainHeadDocsClassMeta) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsClassMeta['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/file', ['exports', 'ember-fountainhead/components/fountain-head/docs/file'], function (exports, _emberFountainheadComponentsFountainHeadDocsFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsFile['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/github', ['exports', 'ember-fountainhead/components/fountain-head/docs/github'], function (exports, _emberFountainheadComponentsFountainHeadDocsGithub) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsGithub['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/index', ['exports', 'ember-fountainhead/components/fountain-head/docs/index'], function (exports, _emberFountainheadComponentsFountainHeadDocsIndex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsIndex['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/index/landing', ['exports', 'ember-fountainhead/components/fountain-head/docs/index/landing'], function (exports, _emberFountainheadComponentsFountainHeadDocsIndexLanding) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsIndexLanding['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/module', ['exports', 'ember-fountainhead/components/fountain-head/docs/module'], function (exports, _emberFountainheadComponentsFountainHeadDocsModule) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsModule['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/sidebar', ['exports', 'ember-fountainhead/components/fountain-head/docs/sidebar'], function (exports, _emberFountainheadComponentsFountainHeadDocsSidebar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsSidebar['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/sidebar/item-group', ['exports', 'ember-fountainhead/components/fountain-head/docs/sidebar/item-group'], function (exports, _emberFountainheadComponentsFountainHeadDocsSidebarItemGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsSidebarItemGroup['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/sidebar/search-bar', ['exports', 'ember-fountainhead/components/fountain-head/docs/sidebar/search-bar'], function (exports, _emberFountainheadComponentsFountainHeadDocsSidebarSearchBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsSidebarSearchBar['default'];
    }
  });
});
define('dummy/components/fountain-head/docs/sidebar/section', ['exports', 'ember-fountainhead/components/fountain-head/docs/sidebar/section'], function (exports, _emberFountainheadComponentsFountainHeadDocsSidebarSection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadDocsSidebarSection['default'];
    }
  });
});
define('dummy/components/fountain-head/shared/fountainhead-svg', ['exports', 'ember-fountainhead/components/fountain-head/shared/fountainhead-svg'], function (exports, _emberFountainheadComponentsFountainHeadSharedFountainheadSvg) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadSharedFountainheadSvg['default'];
    }
  });
});
define('dummy/components/fountain-head/shared/runtime-description', ['exports', 'ember-fountainhead/components/fountain-head/shared/runtime-description'], function (exports, _emberFountainheadComponentsFountainHeadSharedRuntimeDescription) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadComponentsFountainHeadSharedRuntimeDescription['default'];
    }
  });
});
define('dummy/components/sidebar-nav', ['exports', 'ember-component'], function (exports, _emberComponent) {
  exports['default'] = _emberComponent['default'].extend({
    layout: Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 4,
                'column': 10
              },
              'end': {
                'line': 4,
                'column': 42
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('Home');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      var child1 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 5,
                'column': 10
              },
              'end': {
                'line': 5,
                'column': 57
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('Getting Started');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      var child2 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 6,
                'column': 10
              },
              'end': {
                'line': 6,
                'column': 35
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('Demo');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 8,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('div');
          var el2 = dom.createTextNode('Sidebar Nav');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('ul');
          var el2 = dom.createTextNode('\n      ');
          dom.appendChild(el1, el2);
          var el2 = dom.createElement('li');
          var el3 = dom.createComment('');
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('\n      ');
          dom.appendChild(el1, el2);
          var el2 = dom.createElement('li');
          var el3 = dom.createComment('');
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('\n      ');
          dom.appendChild(el1, el2);
          var el2 = dom.createElement('li');
          var el3 = dom.createComment('');
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          return morphs;
        },
        statements: [['block', 'link-to', ['application'], [], 0, null, ['loc', [null, [4, 10], [4, 42]]]], ['block', 'link-to', ['getting-started'], [], 1, null, ['loc', [null, [5, 10], [5, 57]]]], ['block', 'link-to', ['docs'], [], 2, null, ['loc', [null, [6, 10], [6, 35]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })())
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/_module-definition.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/_module-definition.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/_module-definition.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/class.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/class.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/class.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/class/class-item.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/class/class-item.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/class/class-item.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/class/class-items-container.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/class/class-items-container.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/class/class-items-container.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/class/header.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/class/header.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/class/header.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/class/meta.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/class/meta.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/class/meta.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/file.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/file.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/file.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/footer.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/footer.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/footer.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/github.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/github.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/github.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/header.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/header.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/header.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/index.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/index.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/index/landing.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/index/landing.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/index/landing.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/module.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/module.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/module.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/sidebar.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/sidebar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/sidebar.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/sidebar/item-group.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/sidebar/item-group.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/sidebar/item-group.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/sidebar/search-bar.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/sidebar/search-bar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/sidebar/search-bar.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/docs/sidebar/section.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/docs/sidebar/section.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/docs/sidebar/section.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/shared/fountainhead-svg.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/shared/fountainhead-svg.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/shared/fountainhead-svg.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/components/fountain-head/shared/runtime-description.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/components/fountain-head/shared/runtime-description.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/components/fountain-head/shared/runtime-description.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/helpers/eq.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/helpers/eq.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/helpers/eq.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/routes/docs/classes.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/routes/docs/classes.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/routes/docs/classes.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/routes/docs/files.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/routes/docs/files.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/routes/docs/files.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/routes/docs/modules.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/routes/docs/modules.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/routes/docs/modules.js should pass ESLint.\n');
  });
});
define('dummy/ember-fountainhead/tests/modules/ember-fountainhead/services/fountainhead.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-fountainhead/services/fountainhead.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-fountainhead/services/fountainhead.js should pass ESLint.\n');
  });
});
define('dummy/helpers/and', ['exports', 'ember-radical/helpers/and'], function (exports, _emberRadicalHelpersAnd) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersAnd['default'];
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersAnd.and;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember-radical/helpers/eq'], function (exports, _emberRadicalHelpersEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersEq.eq;
    }
  });
});
define('dummy/helpers/not', ['exports', 'ember-radical/helpers/not'], function (exports, _emberRadicalHelpersNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersNot.not;
    }
  });
});
define('dummy/helpers/or', ['exports', 'ember-radical/helpers/or'], function (exports, _emberRadicalHelpersOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersOr['default'];
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function get() {
      return _emberRadicalHelpersOr.or;
    }
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles'], function (exports, _emberComponentCssInitializersComponentStyles) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComponentCssInitializersComponentStyles['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberComponentCssInitializersComponentStyles.initialize;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/instance-initializers/fountainhead-routes', ['exports', 'dummy/router'], function (exports, _dummyRouter) {
  exports.initialize = initialize;

  /**
   * Fountainhead's routes are automatically mounted to the consuming application's
   * router through an `instance-initializer`. We're currently directly importing
   * the consuming application's router by declaring this initializer in the `/app`
   * directory instead of the `/addon` directory.
   * @module App
   */

  /**
   * Automagically mount Fountainhead routes through an `instance-initializer`.
   *
   * NOTE: this initializer needs to be in the `/app` directory so that the the
   * consuming application's router can be directly imported and manipulated.
   *
   * TODO: See if we can use some kind of lookup to do this from within an
   * initializer in the `/addon` directory
   * @class FountainheadRoutes
   * @constructor
   */

  /**
   * Initialize route that is called by consuming Ember application
   * `Router` instance from the consuming application can directly mapped.
   * @method initialize
   * @return {undefined}
   */

  function initialize() /* appInstance */{
    _dummyRouter['default'].map(function () {
      this.route('docs', function () {
        this.route('classes', { path: '/classes/:class_id' });
        this.route('modules', { path: '/modules/:module_id' });
        this.route('files', { path: '/files/:file_id' });
      });
    });
  }

  /*
   * If we want, it is also possible to inject content into files using the blueprint
   * index file and insertIntoFile: https://ember-cli.com/api/classes/Blueprint.html#method_insertIntoFile
   * insertIntoFile('app/router.js', '  this.route("admin");', {
   *   after: 'Router.map(function() {' + EOL
   * });
   */

  exports['default'] = {
    name: 'fountainhead-routes',
    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('getting-started');
  });

  exports['default'] = Router;
});
define('dummy/routes/docs/classes', ['exports', 'ember-fountainhead/routes/docs/classes'], function (exports, _emberFountainheadRoutesDocsClasses) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadRoutesDocsClasses['default'];
    }
  });
});
define('dummy/routes/docs/files', ['exports', 'ember-fountainhead/routes/docs/files'], function (exports, _emberFountainheadRoutesDocsFiles) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadRoutesDocsFiles['default'];
    }
  });
});
define('dummy/routes/docs/modules', ['exports', 'ember-fountainhead/routes/docs/modules'], function (exports, _emberFountainheadRoutesDocsModules) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadRoutesDocsModules['default'];
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/fountainhead', ['exports', 'ember-fountainhead/services/fountainhead'], function (exports, _emberFountainheadServicesFountainhead) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadServicesFountainhead['default'];
    }
  });
});
define('dummy/services/tagging', ['exports', 'ember-radical/services/tagging'], function (exports, _emberRadicalServicesTagging) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadicalServicesTagging['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/templates/docs', ['exports', 'ember-fountainhead/templates/docs'], function (exports, _emberFountainheadTemplatesDocs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadTemplatesDocs['default'];
    }
  });
});
define('dummy/templates/docs/classes', ['exports', 'ember-fountainhead/templates/docs/classes'], function (exports, _emberFountainheadTemplatesDocsClasses) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadTemplatesDocsClasses['default'];
    }
  });
});
define('dummy/templates/docs/files', ['exports', 'ember-fountainhead/templates/docs/files'], function (exports, _emberFountainheadTemplatesDocsFiles) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadTemplatesDocsFiles['default'];
    }
  });
});
define('dummy/templates/docs/index', ['exports', 'ember-fountainhead/templates/docs/index'], function (exports, _emberFountainheadTemplatesDocsIndex) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadTemplatesDocsIndex['default'];
    }
  });
});
define('dummy/templates/docs/modules', ['exports', 'ember-fountainhead/templates/docs/modules'], function (exports, _emberFountainheadTemplatesDocsModules) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFountainheadTemplatesDocsModules['default'];
    }
  });
});
define("dummy/templates/getting-started", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 61,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/getting-started.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Getting Started");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Install");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("code");
        var el2 = dom.createTextNode("ember install ember-fountainhead");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Documentation JSON Generation");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("code");
        var el2 = dom.createTextNode("ember docs");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Stylesheets");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Ember Fountainhead styles are scoped to addon namespaces and shouldn't conflict with your application's stylesheets. Styles for Fountainhead are included in your ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("vendor.css");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" bundle by default. You can turn this off by setting ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("includeVendorStyles");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" to false in your ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("fountainhead.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" configuration file.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("If you'd like to extend Fountainhead's styles and your project uses SASS, you can turn off the auto bundle to the vendor file and directly import Fountianhead into your SASS: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("@import 'ember-fountainhead'");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". See the themes in ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("app/styles/ember-fountianhead/themes");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" for variables you can override.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Mounting Fountainhead's Routes");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("In order to make use of Fountainhead's in-app documentation features, you will\nneed to import and mount its routes so that they are available to you. We recommend\ndoing this explicitly when developing in the context of a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("development");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" environment,\nbut you can of course choose to always mount Fountainhead's routes.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("If you wish to take advantage of environment-specific loading, you'll need to\nset up your ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("ember-cli-build.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" file to consume and store the environment argument:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("\nmodule.exports = function(environment) {\n  var ENV = {\n    environment: environment\n  };\n\n  return ENV;\n}\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("To mount the routes, make these additions in your app's ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("router.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(":");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("\nimport fountainheadRoutes from 'ember-fountainhead/utils/route-setup';\nimport config from '../config/environment';\n\nRouter.map(function() {\n  if (config.environment === 'development') {\n    fountainheadRoutes(this);\n  }\n});\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Configuration");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Configuration for this addon and the build scripts can be specified in a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("fountainhead.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" file located in your repo's root. Note that all paths are resolved using ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("path.resolve");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", meaning that either a relative path or paths starting with ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("./");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" will resolve to your project's root directory.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("entry: Can be a string, or array of strings.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("output: Object\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("path: Path for output files");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("filename: Filename for documentation meta data file");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Ember Component Playground");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://github.com/healthsparq/ember-component-playground");
        dom.setAttribute(el2, "target", "_blank");
        var el3 = dom.createTextNode("Ember Component Playground");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" addon is a great compliment to this addon that allows real time examples of components. See the repo for installation.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "hero");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "hero-message");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Ember Fountainhead ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "italic");
        var el4 = dom.createTextNode("Create beautiful, dynamic documentation.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "introduction element");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "uppercase");
        var el4 = dom.createTextNode("Introduction");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Ember Fountainhead is a documentation application that generates documentation JSON files and a modern, readable interface in your application. It is designed to be drop in ready for simple applications with the ability for full customization through exported components and configuration for custom use cases.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Runtime Template Compilation");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("One of the most exciting features of Fountainhead is that all documentation descriptions are compiled to Glimmer templates and registered with your application during run time. This means that you are not limited to a pre defined set of components in your documentation. Any component from your application can be included as a live example in your documentation.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "uppercase");
        var el4 = dom.createTextNode("Is Ember Fountainhead For You?");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("If your Ember project has any collaboration or users other than yourself, then Fountainhead is for you! Great documenation helps contributors navigate your codebase and make smarter pull requests. It helps users understand your API and easily troubleshoot issues. Great documentation makes your project more accessible to everyone.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "features element");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "uppercase");
        var el4 = dom.createTextNode("Features");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "list-unstyled");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Comment parsing using YUIDoc syntax");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Dynamic documentation driven by your Ember application");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Markdown parsing at build time");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Code highlighting using ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://prismjs.com/");
        dom.setAttribute(el5, "target", "_blank");
        var el6 = dom.createTextNode("Prism");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Descriptions are compiled to Glimmer templates at runtime");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 2, 2);
        return morphs;
      },
      statements: [["inline", "fountain-head/shared/fountainhead-svg", [], ["svgId", "document"], ["loc", [null, [3, 27], [3, 85]]], 0, 0], ["content", "sidebar-nav", ["loc", [null, [10, 2], [10, 17]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-fountainhead","version":"v2.0.0-beta.5"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map

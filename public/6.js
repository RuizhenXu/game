webpackJsonp([6],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(227)
/* template */
var __vue_template__ = __webpack_require__(228)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\report\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24965601", Component.options)
  } else {
    hotAPI.reload("data-v-24965601", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    data: function data() {
        return {
            visible: false
        };
    },

    methods: {
        tests: function tests(event) {
            this.$notify({
                title: 'a message',
                message: 'test message',
                type: 'success'
            });
        },

        api: function api(event) {
            alert('aaa');
        }

    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("报表数据")]),
      _vm._v(" "),
      _c(
        "el-button",
        {
          on: {
            click: function($event) {
              _vm.visible = true
            }
          }
        },
        [_vm._v("报表")]
      ),
      _vm._v(" "),
      _c("el-button", { on: { click: _vm.tests } }, [_vm._v("Test")]),
      _vm._v(" "),
      _c("el-button", { on: { click: _vm.api } }, [_vm._v("api")]),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.visible, title: "Hello world" },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          }
        },
        [_c("p", [_vm._v("欢迎使用 Element")])]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-24965601", module.exports)
  }
}

/***/ })

});
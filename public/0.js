webpackJsonp([0],{

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(263)
/* script */
var __vue_script__ = __webpack_require__(695)
/* template */
var __vue_template__ = __webpack_require__(696)
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

/***/ 695:
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
            this.$http.get('/api').then(function (response) {
                console.log(response.data);
            });
        },

        index: function index(event) {
            var _this = this;

            this.$http.get('/index').then(function (response) {
                _this.$notify({
                    title: response.data.title,
                    message: response.data.msg,
                    type: 'success'
                });
            });
        }

    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-breadcrumb",
        { attrs: { separator: "/" } },
        [
          _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
            _vm._v("首页")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("报表数据")])
        ],
        1
      ),
      _vm._v(" "),
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
      _c("el-button", { on: { click: _vm.index } }, [_vm._v("index")]),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.visible, title: "Title" },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          }
        },
        [_c("p", [_vm._v("This a Dialog")])]
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
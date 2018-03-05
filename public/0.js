webpackJsonp([0],{

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(162)
/* script */
var __vue_script__ = __webpack_require__(395)
/* template */
var __vue_template__ = __webpack_require__(419)
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
Component.options.__file = "resources\\assets\\js\\components\\spread\\spreadPlan.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a710b704", Component.options)
  } else {
    hotAPI.reload("data-v-a710b704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 395:
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
            planData: [],
            page: 1,
            pageSize: 10,
            total: 0,

            searchDate: null,
            startDate: null,
            endDate: null,
            searchKeyWord: null,

            pickerOptions2: {
                shortcuts: [{
                    text: '今天',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '昨天',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24);
                        end.setTime(end.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一周',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick: function onClick(picker) {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            }
        };
    },


    methods: {
        editPlan: function editPlan(index, row) {
            console.log(index);
            console.log(row);
        },

        switchPlan: function switchPlan(item) {
            var _this = this;

            var msg = '';
            if (item.exc_status === '0') {
                msg = '确定下线该计划？（与该计划相关的广告也会同时下线）';
            } else {
                msg = '确定上线该计划？';
            }

            this.$confirm(msg, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                //确定
                _this.$message({
                    type: 'success',
                    message: '下线成功！'
                });
            }).catch(function () {
                //取消
                if (item.exc_status === '0') {
                    item.exc_status = '1';
                } else {
                    item.exc_status = '0';
                }
            });
        },
        createPlan: function createPlan() {
            alert('create_plan');
        },

        searchPlan: function searchPlan() {
            this.getPlanList();
        },

        currentChange: function currentChange() {
            this.getPlanList();
        },

        getPlanList: function getPlanList() {
            var _this2 = this;

            this.$http.get('Spread/getPlanList', {
                params: {
                    page: this.page,
                    pageSize: this.pageSize,
                    startDate: this.searchDate === null ? null : this.searchDate[0],
                    endDate: this.searchDate === null ? null : this.searchDate[1],
                    searchKeyWord: this.searchKeyWord
                }
            }).then(function (response) {
                _this2.planData = response.data.data;
                _this2.total = response.data.total;
            });
        }

    },

    mounted: function mounted() {
        this.getPlanList();
    }
});

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    [
      _c(
        "el-breadcrumb",
        { attrs: { separator: "/" } },
        [
          _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
            _vm._v("首页")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("推广计划")])
        ],
        1
      ),
      _vm._v(" "),
      _c("h2", [_vm._v("推广计划")]),
      _vm._v(" "),
      _c(
        "el-row",
        {
          staticStyle: {
            "margin-bottom": "20px",
            background: "#f0f0f0",
            padding: "10px"
          },
          attrs: { gutter: 20 }
        },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("span", [_vm._v("创建日期：")]),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  "value-format": "yyyy-MM-dd",
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期",
                  "picker-options": _vm.pickerOptions2
                },
                model: {
                  value: _vm.searchDate,
                  callback: function($$v) {
                    _vm.searchDate = $$v
                  },
                  expression: "searchDate"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6, offset: 6 } },
            [
              _c(
                "el-row",
                { attrs: { gutter: 20 } },
                [
                  _c(
                    "el-col",
                    { attrs: { span: 6 } },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              _vm.createPlan()
                            }
                          }
                        },
                        [_vm._v("新建计划")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 14 } },
                    [
                      _c("el-input", {
                        attrs: { placeholder: "计划名称、ID模糊查询" },
                        model: {
                          value: _vm.searchKeyWord,
                          callback: function($$v) {
                            _vm.searchKeyWord = $$v
                          },
                          expression: "searchKeyWord"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 4 } },
                    [
                      _c("el-button", {
                        attrs: { type: "primary", icon: "el-icon-search" },
                        on: {
                          click: function($event) {
                            _vm.searchPlan()
                          }
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticStyle: { width: "100%", "margin-bottom": "30px" },
          attrs: {
            data: _vm.planData,
            "highlight-current-row": true,
            stripe: true
          }
        },
        [
          _c("el-table-column", { attrs: { prop: "plan_id", label: "ID" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "plan_name", label: "计划名称" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "计划状态" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("el-switch", {
                      attrs: { "active-value": "1", "inactive-value": "0" },
                      on: {
                        change: function($event) {
                          _vm.switchPlan(scope.row)
                        }
                      },
                      model: {
                        value: scope.row.exc_status,
                        callback: function($$v) {
                          _vm.$set(scope.row, "exc_status", $$v)
                        },
                        expression: "scope.row.exc_status"
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "threshold", label: "限额" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.threshold_type === "0"
                      ? _c("div", [_vm._v("不限")])
                      : _c("div", [
                          _vm._v(_vm._s("￥" + scope.row.threshold + " 元/天"))
                        ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "create_time", label: "创建时间" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini" },
                        on: {
                          click: function($event) {
                            _vm.editPlan(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-pagination", {
        staticStyle: { "text-align": "right" },
        attrs: {
          layout: "prev, pager, next",
          total: _vm.total,
          "current-page": _vm.page
        },
        on: {
          "update:currentPage": function($event) {
            _vm.page = $event
          },
          "current-change": function($event) {
            _vm.currentChange()
          }
        }
      })
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a710b704", module.exports)
  }
}

/***/ })

});
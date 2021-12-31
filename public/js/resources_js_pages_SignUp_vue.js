"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_SignUp_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SignUp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SignUp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SignUp",
  data: function data() {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      password: "",
      email: "",
      password_confirmation: "",
      formValid: false,
      progress: false,
      requiredRules: [function (v) {
        return !!v || 'This field is required';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }]
    };
  },
  methods: {
    signup: function signup() {
      var _this = this;

      if (this.$refs.signup_form.validate()) {
        this.progress = true;
        var formData = new FormData();
        formData.append("first_name", this.first_name);
        formData.append("last_name", this.last_name);
        formData.append("phone_number", this.phone_number);
        formData.append("password", this.password);
        formData.append("email", this.email);
        formData.append("password_confirmation", this.password_confirmation);
        axios.post('/admin/signup', formData).then(function (res) {
          console.log(res.data.data.token);
          localStorage.setItem('token', res.data.data.token);

          _this.$router.push('/');

          _this.$store.commit('init');

          _this.progress = false;
        })["catch"](function (error) {
          _this.progress = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/SignUp.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/SignUp.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUp_vue_vue_type_template_id_47af6401_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=47af6401&scoped=true& */ "./resources/js/pages/SignUp.vue?vue&type=template&id=47af6401&scoped=true&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/pages/SignUp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_47af6401_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignUp_vue_vue_type_template_id_47af6401_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47af6401",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SignUp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SignUp.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/SignUp.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SignUp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SignUp.vue?vue&type=template&id=47af6401&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/SignUp.vue?vue&type=template&id=47af6401&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_47af6401_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_47af6401_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_47af6401_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=template&id=47af6401&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SignUp.vue?vue&type=template&id=47af6401&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SignUp.vue?vue&type=template&id=47af6401&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SignUp.vue?vue&type=template&id=47af6401&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      ref: "signup_form",
      on: {
        submit: function ($event) {
          return _vm.signup()
        },
        keydown: function ($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.signup()
        },
      },
      model: {
        value: _vm.formValid,
        callback: function ($$v) {
          _vm.formValid = $$v
        },
        expression: "formValid",
      },
    },
    [
      _c(
        "h2",
        { staticClass: "ma-5 font-weight-light teal--text w-100 text-center" },
        [_vm._v("\n        Signup now for free\n\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { dense: "" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-text-field", {
                attrs: {
                  type: "text",
                  outlined: "",
                  filled: "",
                  label: "First Name",
                  color: _vm.$store.state.app.ThemeColor,
                  rules: _vm.requiredRules,
                  flat: "",
                },
                model: {
                  value: _vm.first_name,
                  callback: function ($$v) {
                    _vm.first_name = $$v
                  },
                  expression: "first_name",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "text",
                  outlined: "",
                  filled: "",
                  label: "Last Name",
                  color: _vm.$store.state.app.ThemeColor,
                  rules: _vm.requiredRules,
                },
                model: {
                  value: _vm.last_name,
                  callback: function ($$v) {
                    _vm.last_name = $$v
                  },
                  expression: "last_name",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "tel",
                  outlined: "",
                  filled: "",
                  label: "Phone Number",
                  color: _vm.$store.state.app.ThemeColor,
                  rules: _vm.requiredRules,
                },
                model: {
                  value: _vm.phone_number,
                  callback: function ($$v) {
                    _vm.phone_number = $$v
                  },
                  expression: "phone_number",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "Email",
                  outlined: "",
                  filled: "",
                  label: "Email",
                  color: _vm.$store.state.app.ThemeColor,
                  rules: _vm.emailRules,
                },
                model: {
                  value: _vm.email,
                  callback: function ($$v) {
                    _vm.email = $$v
                  },
                  expression: "email",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "password",
                  outlined: "",
                  filled: "",
                  label: "Password",
                  color: _vm.$store.state.app.ThemeColor,
                  rules: _vm.requiredRules,
                },
                model: {
                  value: _vm.password,
                  callback: function ($$v) {
                    _vm.password = $$v
                  },
                  expression: "password",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "password",
                  outlined: "",
                  filled: "",
                  label: "Re-enter Password",
                  color: _vm.$store.state.app.ThemeColor,
                  rules: _vm.requiredRules,
                },
                model: {
                  value: _vm.password_confirmation,
                  callback: function ($$v) {
                    _vm.password_confirmation = $$v
                  },
                  expression: "password_confirmation",
                },
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: _vm.$store.state.app.ThemeColor,
                    block: "",
                    rounded: "",
                    large: "",
                    depressed: "",
                    dark: _vm.formValid,
                    disabled: !_vm.formValid,
                    loading: _vm.progress,
                  },
                  on: { click: _vm.signup },
                },
                [_vm._v("Login")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
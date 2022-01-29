"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_teachers_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewTeacher.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewTeacher.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  name: "NewTeacher",
  props: ['edit', 'id', 'teacher'],
  data: function data() {
    return {
      id_number: "",
      first_name: "",
      last_name: "",
      other_names: "",
      dob_menu: false,
      date_menu1: false,
      date_menu2: false,
      assumed_date: dayjs().format('YYYY-MM-DD'),
      accademic_qualification: "",
      professional_qualification: "",
      appointed_date: dayjs().format('YYYY-MM-DD'),
      dob: '',
      bank_name: "",
      bank_account_number: "",
      rank: null,
      staff_number: "",
      email: "",
      phone_number: "",
      genders: [{
        value: 'M',
        text: "Male"
      }, {
        value: 'F',
        text: "Female"
      }],
      gender: 'F',
      progress: false
    };
  },
  computed: {
    ranks: function ranks() {
      return this.$store.state.ranks;
    },
    title: function title() {
      return this.edit ? "Edit teacher" : "Create new teacher";
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      if (this.$refs.teacher_form.validate()) {
        this.progress = true;
        var formData = new FormData();
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('other_names', this.other_names);
        formData.append('gender', this.gender);
        formData.append('id_number', this.id_number);
        formData.append('academic_qualification', this.accademic_qualification);
        formData.append('professional_qualification', this.professional_qualification);
        formData.append('appointment_date', this.appointed_date);
        formData.append('date_assumed', this.assumed_date);
        formData.append('bank', this.bank_name);
        formData.append('rank', this.rank);
        formData.append('dob', this.dob);
        formData.append('account_number', this.bank_account_number);
        formData.append('email', this.email);
        formData.append('phone_number', this.phone_number);
        formData.append('staff_id', this.staff_number);
        var url = this.edit ? "/teacher/" + this.teacher.id : "teacher";
        axios.post(url, formData).then(function (res) {
          _this.done(res.data.data);

          _this.progress = false;
        })["catch"](function (error) {
          _this.progress = false;
        });
      }
    },
    done: function done(teacher) {
      var url = "/teachers/" + teacher.id;

      if (!this.edit) {
        this.$router.push({
          path: url
        });
      }

      this.$emit('closed');
      this.$emit('saved', teacher);
    },
    SetTeacher: function SetTeacher(teacher) {
      this.first_name = teacher.first_name;
      this.last_name = teacher.last_name;
      this.other_names = teacher.other_names;
      this.gender = teacher.gender;
      this.rank = teacher.rank;
      this.staff_number = teacher.staff_id;
      this.bank_name = teacher.bank;
      this.bank_account_number = teacher.account_number;
      this.phone_number = teacher.phone_number;
      this.id_number = teacher.id_number;
      this.appointed_date = teacher.appointment_date ? dayjs(teacher.appointment_date).format('YYYY-MM-DD') : '';
      this.assumed_date = teacher.date_assumed ? dayjs(teacher.date_assumed).format('YYYY-MM-DD') : '';
      this.email = teacher.email;
      this.dob = teacher.dob ? dayjs(teacher.dob).format('YYYY-MM-DD') : '';
      this.accademic_qualification = teacher.academic_qualification;
      this.professional_qualification = teacher.professional_qualification;
    }
  },
  mounted: function mounted() {
    if (this.edit && this.teacher) {
      this.SetTeacher(this.teacher);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherItemComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherItemComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TeacherMenuComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeacherMenuComponent */ "./resources/js/components/TeacherMenuComponent.vue");
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
  components: {
    TeacherMenuComponent: _TeacherMenuComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['teacher'],
  name: "TeacherItemComponent",
  computed: {
    rank_name: function rank_name() {
      var _this = this;

      var rank = this.$store.state.ranks.find(function (rank) {
        return rank.value = _this.teacher.rank;
      });
      return rank ? rank.text : '';
    }
  },
  methods: {
    updated: function updated(teacher) {
      this.$emit('updated', teacher);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherMenuComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherMenuComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewTeacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTeacher */ "./resources/js/components/NewTeacher.vue");
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
  components: {
    NewTeacher: _NewTeacher__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['teacher'],
  name: "TeacherMenuComponent",
  data: function data() {
    return {
      ShowEditDialog: false
    };
  },
  methods: {
    saved: function saved(teacher) {
      this.$emit("updated", teacher);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TitleBarComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TitleBarComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TitleBarComponent",
  props: {
    title: {},
    AddLabel: {},
    BtnIcon: {},
    ShowAddBtn: {
      "default": true,
      type: Boolean
    }
  },
  computed: {
    MainTitle: function MainTitle() {
      return this.title ? this.title : this.$route.name;
    },
    Btnlabel: function Btnlabel() {
      return this.AddLabel ? this.AddLabel : "Create New";
    },
    icon: function icon() {
      this.BtnIcon ? this.BtnIcon : 'mdi-plus';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/teachers/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/teachers/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TitleBarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TitleBarComponent */ "./resources/js/components/TitleBarComponent.vue");
/* harmony import */ var _components_NewTeacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NewTeacher */ "./resources/js/components/NewTeacher.vue");
/* harmony import */ var _components_TeacherItemComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TeacherItemComponent */ "./resources/js/components/TeacherItemComponent.vue");
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
  name: "index",
  components: {
    TeacherItemComponent: _components_TeacherItemComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    NewTeacher: _components_NewTeacher__WEBPACK_IMPORTED_MODULE_1__["default"],
    TitleBarComponent: _components_TitleBarComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      NewTeacher: false,
      teachers: [],
      progress: false
    };
  },
  mounted: function mounted() {
    this.getTeachers();
  },
  methods: {
    getTeachers: function getTeachers() {
      var _this = this;

      this.progress = true;
      axios.get('/teachers').then(function (res) {
        _this.teachers = res.data.data;
        _this.progress = false;
      })["catch"](function (error) {
        _this.progress = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/NewTeacher.vue":
/*!************************************************!*\
  !*** ./resources/js/components/NewTeacher.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewTeacher_vue_vue_type_template_id_0c8a71cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true& */ "./resources/js/components/NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true&");
/* harmony import */ var _NewTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewTeacher.vue?vue&type=script&lang=js& */ "./resources/js/components/NewTeacher.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewTeacher_vue_vue_type_template_id_0c8a71cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewTeacher_vue_vue_type_template_id_0c8a71cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0c8a71cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewTeacher.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TeacherItemComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/TeacherItemComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TeacherItemComponent_vue_vue_type_template_id_0ee0715a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true& */ "./resources/js/components/TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true&");
/* harmony import */ var _TeacherItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TeacherItemComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeacherItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeacherItemComponent_vue_vue_type_template_id_0ee0715a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TeacherItemComponent_vue_vue_type_template_id_0ee0715a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ee0715a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TeacherItemComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TeacherMenuComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/TeacherMenuComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TeacherMenuComponent_vue_vue_type_template_id_3b504887_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true& */ "./resources/js/components/TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true&");
/* harmony import */ var _TeacherMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TeacherMenuComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeacherMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeacherMenuComponent_vue_vue_type_template_id_3b504887_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TeacherMenuComponent_vue_vue_type_template_id_3b504887_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b504887",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TeacherMenuComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TitleBarComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/TitleBarComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TitleBarComponent_vue_vue_type_template_id_2c5df672_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true& */ "./resources/js/components/TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true&");
/* harmony import */ var _TitleBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TitleBarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TitleBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TitleBarComponent_vue_vue_type_template_id_2c5df672_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TitleBarComponent_vue_vue_type_template_id_2c5df672_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c5df672",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TitleBarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/teachers/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/teachers/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_88a6ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=88a6ac86&scoped=true& */ "./resources/js/pages/teachers/index.vue?vue&type=template&id=88a6ac86&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/teachers/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_88a6ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_88a6ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "88a6ac86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/teachers/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewTeacher.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/NewTeacher.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewTeacher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewTeacher.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TeacherItemComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/TeacherItemComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TeacherItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherItemComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TeacherMenuComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/TeacherMenuComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TeacherMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherMenuComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TitleBarComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TitleBarComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TitleBarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TitleBarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/teachers/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/teachers/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/teachers/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTeacher_vue_vue_type_template_id_0c8a71cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTeacher_vue_vue_type_template_id_0c8a71cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTeacher_vue_vue_type_template_id_0c8a71cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true&");


/***/ }),

/***/ "./resources/js/components/TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherItemComponent_vue_vue_type_template_id_0ee0715a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherItemComponent_vue_vue_type_template_id_0ee0715a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherItemComponent_vue_vue_type_template_id_0ee0715a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherMenuComponent_vue_vue_type_template_id_3b504887_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherMenuComponent_vue_vue_type_template_id_3b504887_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherMenuComponent_vue_vue_type_template_id_3b504887_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true&");


/***/ }),

/***/ "./resources/js/components/TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBarComponent_vue_vue_type_template_id_2c5df672_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBarComponent_vue_vue_type_template_id_2c5df672_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleBarComponent_vue_vue_type_template_id_2c5df672_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/teachers/index.vue?vue&type=template&id=88a6ac86&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/teachers/index.vue?vue&type=template&id=88a6ac86&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_88a6ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_88a6ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_88a6ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=88a6ac86&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/teachers/index.vue?vue&type=template&id=88a6ac86&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewTeacher.vue?vue&type=template&id=0c8a71cd&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c("v-card-title", { staticClass: "font-weight-light teal--text" }, [
        _vm._v(_vm._s(_vm.title)),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "teacher_form" },
            [
              _c(
                "v-row",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "First Name*",
                          rules: _vm.$store.state.requiredRules,
                          autofocus: "",
                        },
                        model: {
                          value: _vm.first_name,
                          callback: function ($$v) {
                            _vm.first_name = $$v
                          },
                          expression: "first_name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "last Name*",
                          rules: _vm.$store.state.requiredRules,
                        },
                        model: {
                          value: _vm.last_name,
                          callback: function ($$v) {
                            _vm.last_name = $$v
                          },
                          expression: "last_name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Other Names",
                        },
                        model: {
                          value: _vm.other_names,
                          callback: function ($$v) {
                            _vm.other_names = $$v
                          },
                          expression: "other_names",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Gender",
                          items: _vm.genders,
                          "item-color": "teal",
                        },
                        model: {
                          value: _vm.gender,
                          callback: function ($$v) {
                            _vm.gender = $$v
                          },
                          expression: "gender",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            transition: "scale-transition",
                            "close-on-content-click": false,
                            "offset-y": "",
                            "max-width": "290px",
                            "min-width": "auto",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attr = ref.attr
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            readonly: "",
                                            outlined: "",
                                            filled: "",
                                            color:
                                              _vm.$store.state.app.ThemeColor,
                                            label: "Date of birth",
                                            rules:
                                              _vm.$store.state.requiredRules,
                                          },
                                          model: {
                                            value: _vm.dob,
                                            callback: function ($$v) {
                                              _vm.dob = $$v
                                            },
                                            expression: "dob",
                                          },
                                        },
                                        "v-text-field",
                                        attr,
                                        false
                                      ),
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.dob_menu,
                            callback: function ($$v) {
                              _vm.dob_menu = $$v
                            },
                            expression: "dob_menu",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: { "no-title": "", color: "teal" },
                            on: {
                              input: function ($event) {
                                _vm.dob_menu = false
                              },
                            },
                            model: {
                              value: _vm.dob,
                              callback: function ($$v) {
                                _vm.dob = $$v
                              },
                              expression: "dob",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          type: "tel",
                          label: "Phone Number *",
                        },
                        model: {
                          value: _vm.phone_number,
                          callback: function ($$v) {
                            _vm.phone_number = $$v
                          },
                          expression: "phone_number",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          type: "email",
                          label: "Email",
                        },
                        model: {
                          value: _vm.email,
                          callback: function ($$v) {
                            _vm.email = $$v
                          },
                          expression: "email",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Staff Number",
                        },
                        model: {
                          value: _vm.staff_number,
                          callback: function ($$v) {
                            _vm.staff_number = $$v
                          },
                          expression: "staff_number",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "National ID Number",
                          "persistent-hint": "",
                          hint: "Social security number or passport number or driver's license, or any identity number ",
                        },
                        model: {
                          value: _vm.id_number,
                          callback: function ($$v) {
                            _vm.id_number = $$v
                          },
                          expression: "id_number",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Rank *",
                          items: _vm.ranks,
                          rules: _vm.$store.state.requiredRules,
                          "item-color": _vm.$store.state.app.ThemeColor,
                        },
                        model: {
                          value: _vm.rank,
                          callback: function ($$v) {
                            _vm.rank = $$v
                          },
                          expression: "rank",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Academic Qualification",
                        },
                        model: {
                          value: _vm.accademic_qualification,
                          callback: function ($$v) {
                            _vm.accademic_qualification = $$v
                          },
                          expression: "accademic_qualification",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Professional Qualification",
                        },
                        model: {
                          value: _vm.professional_qualification,
                          callback: function ($$v) {
                            _vm.professional_qualification = $$v
                          },
                          expression: "professional_qualification",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            transition: "scale-transition",
                            "offset-y": "",
                            "max-width": "290px",
                            "min-width": "auto",
                            "close-on-content-click": false,
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attr = ref.attr
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      {
                                        attrs: {
                                          outlined: "",
                                          filled: "",
                                          color:
                                            _vm.$store.state.app.ThemeColor,
                                          label: "Date Appointed",
                                          readonly: "",
                                        },
                                        model: {
                                          value: _vm.appointed_date,
                                          callback: function ($$v) {
                                            _vm.appointed_date = $$v
                                          },
                                          expression: "appointed_date",
                                        },
                                      },
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.date_menu2,
                            callback: function ($$v) {
                              _vm.date_menu2 = $$v
                            },
                            expression: "date_menu2",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: {
                              "no-title": "",
                              color: _vm.$store.state.app.ThemeColor,
                            },
                            on: {
                              input: function ($event) {
                                _vm.date_menu2 = false
                              },
                            },
                            model: {
                              value: _vm.appointed_date,
                              callback: function ($$v) {
                                _vm.appointed_date = $$v
                              },
                              expression: "appointed_date",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            transition: "scale-transition",
                            "offset-y": "",
                            "max-width": "290px",
                            "min-width": "auto",
                            "close-on-content-click": false,
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attr = ref.attr
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      {
                                        attrs: {
                                          outlined: "",
                                          filled: "",
                                          color:
                                            _vm.$store.state.app.ThemeColor,
                                          label: "Date Assumed at Post",
                                          readonly: "",
                                        },
                                        model: {
                                          value: _vm.assumed_date,
                                          callback: function ($$v) {
                                            _vm.assumed_date = $$v
                                          },
                                          expression: "assumed_date",
                                        },
                                      },
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.date_menu1,
                            callback: function ($$v) {
                              _vm.date_menu1 = $$v
                            },
                            expression: "date_menu1",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: {
                              "no-title": "",
                              color: _vm.$store.state.app.ThemeColor,
                            },
                            on: {
                              input: function ($event) {
                                _vm.date_menu1 = false
                              },
                            },
                            model: {
                              value: _vm.assumed_date,
                              callback: function ($$v) {
                                _vm.assumed_date = $$v
                              },
                              expression: "assumed_date",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Bank Name",
                        },
                        model: {
                          value: _vm.bank_name,
                          callback: function ($$v) {
                            _vm.bank_name = $$v
                          },
                          expression: "bank_name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Bank Account Number",
                        },
                        model: {
                          value: _vm.bank_account_number,
                          callback: function ($$v) {
                            _vm.bank_account_number = $$v
                          },
                          expression: "bank_account_number",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function ($event) {
                  return _vm.$emit("closed")
                },
              },
            },
            [_vm._v("cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: _vm.$store.state.app.ThemeColor, text: "" },
              on: { click: _vm.save },
            },
            [_vm._v("Save " + _vm._s(_vm.edit ? "Changes" : ""))]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherItemComponent.vue?vue&type=template&id=0ee0715a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "v-list-item",
    { staticClass: "border-bottom", attrs: { "three-line": "", link: "" } },
    [
      _c(
        "v-list-item-avatar",
        [_c("v-img", { attrs: { src: "/img/photo.png" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list-item-content",
        [
          _c(
            "v-list-item-title",
            [
              _c(
                "v-btn",
                {
                  staticClass: "pa-0",
                  attrs: {
                    to: "/teachers/" + _vm.teacher.id,
                    text: "",
                    color: _vm.$store.state.app.ThemeColor,
                  },
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.teacher.first_name) +
                      " " +
                      _vm._s(_vm.teacher.last_name) +
                      " " +
                      _vm._s(_vm.teacher.other_names) +
                      "\n\n        "
                  ),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-list-item-subtitle", [
            _c("strong", [_vm._v("Phone Number: ")]),
            _vm._v(_vm._s(_vm.teacher.phone_number) + "\n            "),
            _c("strong", [_vm._v("Gender: ")]),
            _vm._v(
              _vm._s(_vm.teacher.gender === "F" ? "Female" : "Male") +
                "\n\n            "
            ),
            _vm.teacher.rank
              ? _c("span", [
                  _c("strong", [_vm._v("Rank: ")]),
                  _vm._v(_vm._s(_vm.rank_name) + "\n\n                       "),
                ])
              : _vm._e(),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list-item-action",
        [
          _c("teacher-menu-component", {
            attrs: { teacher: _vm.teacher },
            on: { updated: _vm.updated },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TeacherMenuComponent.vue?vue&type=template&id=3b504887&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c(
        "v-menu",
        {
          attrs: { transition: "scale-transition" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var on = ref.on
                var attr = ref.attr
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: {
                            icon: "",
                            color: _vm.$store.state.app.ThemeColor,
                          },
                        },
                        "v-btn",
                        attr,
                        false
                      ),
                      on
                    ),
                    [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
                    1
                  ),
                ]
              },
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                { attrs: { to: "/teachers/" + _vm.teacher.id } },
                [_c("v-list-item-title", [_vm._v("Preview")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  on: {
                    click: function ($event) {
                      _vm.ShowEditDialog = true
                    },
                  },
                },
                [_c("v-list-item-title", [_vm._v("Edit")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [_c("v-list-item-title", [_vm._v("Manage Assignments")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c("v-list-item-title", { staticClass: "red--text" }, [
                    _vm._v("Delete"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            width: "40%",
            fullscreen: _vm.$vuetify.breakpoint.mobile,
            persistent: "",
            scrollable: "",
          },
          model: {
            value: _vm.ShowEditDialog,
            callback: function ($$v) {
              _vm.ShowEditDialog = $$v
            },
            expression: "ShowEditDialog",
          },
        },
        [
          _c("new-teacher", {
            attrs: { edit: true, teacher: _vm.teacher, id: _vm.teacher.id },
            on: {
              closed: function ($event) {
                _vm.ShowEditDialog = false
              },
              saved: _vm.saved,
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TitleBarComponent.vue?vue&type=template&id=2c5df672&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    [
      _c(
        "v-col",
        {
          staticClass: "lighten-5",
          class:
            _vm.$store.state.app.ThemeColor +
            "  " +
            _vm.$store.state.app.ThemeText,
          attrs: { cols: "12" },
        },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "1" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        text: "",
                        rounded: "",
                        color: _vm.$store.state.app.ThemeColor,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$router.back()
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("mdi-arrow-left")]), _vm._v("Back")],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _c("h2", { staticClass: "font-weight-light" }, [
                  _vm._v(_vm._s(_vm.MainTitle)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _vm.ShowAddBtn
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            color: _vm.$store.state.app.ThemeColor,
                            rounded: "",
                            depressed: "",
                            dark: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("create", true)
                            },
                          },
                        },
                        [
                          _vm._v(_vm._s(_vm.Btnlabel)),
                          _c("v-icon", [_vm._v("mdi-plus")]),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/teachers/index.vue?vue&type=template&id=88a6ac86&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/teachers/index.vue?vue&type=template&id=88a6ac86&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c("title-bar-component", {
        attrs: { "add-label": "Create new teacher" },
        on: {
          create: function (b) {
            return (_vm.NewTeacher = b)
          },
        },
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mx-auto", attrs: { cols: "12", sm: "8" } },
            [
              _vm.progress
                ? _c("v-skeleton-loader", { attrs: { type: "list-item@10" } })
                : _c(
                    "v-list",
                    _vm._l(_vm.teachers, function (teacher) {
                      return _c("teacher-item-component", {
                        key: teacher.id,
                        attrs: { teacher: teacher },
                        on: { updated: _vm.getTeachers },
                      })
                    }),
                    1
                  ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            width: "40%",
            fullscreen: _vm.$vuetify.breakpoint.mobile,
            persistent: "",
            scrollable: "",
          },
          model: {
            value: _vm.NewTeacher,
            callback: function ($$v) {
              _vm.NewTeacher = $$v
            },
            expression: "NewTeacher",
          },
        },
        [
          _c("new-teacher", {
            on: {
              closed: function ($event) {
                _vm.NewTeacher = false
              },
            },
          }),
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
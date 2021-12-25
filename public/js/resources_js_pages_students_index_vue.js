"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_students_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClassSelctor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClassSelctor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewClass */ "./resources/js/components/NewClass.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ClassSelctor",
  components: {
    NewClass: _NewClass__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      classes: [],
      progress: false,
      class_id: null,
      NewClass: false
    };
  },
  methods: {
    classCreated: function classCreated(cls) {
      this.classes.unshift(cls);
      this.class_id = cls.id;
      this.selected();
    },
    selected: function selected() {
      this.$emit('selected', this.class_id);
    },
    getClasses: function getClasses() {
      var _this = this;

      this.progress = false;
      axios.get('/classes').then(function (res) {
        _this.classes = res.data.data;
        _this.progress = false;
      })["catch"](function (error) {
        _this.progress = false;
      });
    }
  },
  mounted: function mounted() {
    this.getClasses();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GradeSelector.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GradeSelector.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewGrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewGrade */ "./resources/js/components/NewGrade.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "GradeSelector",
  components: {
    NewGrade: _NewGrade__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['id'],
  data: function data() {
    return {
      grade_id: null,
      grades: [],
      progress: false,
      newGrade: false
    };
  },
  methods: {
    gradeCreated: function gradeCreated(grade) {
      this.grades.unshift(grade);
      this.grade_id = grade.id;
      this.$emit('selected', this.grade_id);
    },
    getGrades: function getGrades() {
      var _this = this;

      this.progress = true;
      axios.get('/grades').then(function (res) {
        _this.grades = res.data.data;
        _this.progress = false;
      });
    }
  },
  mounted: function mounted() {
    this.getGrades();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewClass.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewClass.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeSelector */ "./resources/js/components/GradeSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewClass",
  components: {
    GradeSelector: _GradeSelector__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['edit'],
  data: function data() {
    return {
      name: "",
      description: "",
      grade_id: null,
      progress: false
    };
  },
  computed: {
    title: function title() {
      return this.edit ? "Edit class" : "Create new class";
    }
  },
  methods: {
    done: function done(Schoolclass) {
      this.name = "";
      this.description = "";
      this.$emit('created', Schoolclass);
      this.$emit('closed');
    },
    save: function save() {
      var _this = this;

      if (this.$refs.class_form.validate()) {
        this.progress = true;
        var formData = new FormData();
        formData.append('name', this.name);
        formData.append('description', this.description);
        formData.append('grade_id', this.grade_id);
        axios.post('/class', formData).then(function (res) {
          _this.progress = false;

          _this.done(res.data.data);
        })["catch"](function (error) {
          _this.progress = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewGrade.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewGrade.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NewGrade",
  props: ['edit'],
  data: function data() {
    return {
      name: "",
      description: "",
      progress: false
    };
  },
  computed: {
    title: function title() {
      return this.edit ? "Edit Grade" : "Create New Grade/Level";
    }
  },
  methods: {
    done: function done(grade) {
      this.name = "";
      this.description = '';
      this.$emit('created', grade);
      this.$emit('closed');
    },
    save: function save() {
      var _this = this;

      if (this.$refs.grade_form.validate()) {
        this.progress = true;
        var formData = new FormData();
        formData.append('name', this.name);
        formData.append('description', this.description);
        axios.post('/grade', formData).then(function (res) {
          _this.progress = false;

          _this.done(res.data.data);
        })["catch"](function (error) {
          _this.progress = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewStudent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewStudent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhotoSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoSelector */ "./resources/js/components/PhotoSelector.vue");
/* harmony import */ var _ClassSelctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassSelctor */ "./resources/js/components/ClassSelctor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewStudent",
  components: {
    ClassSelctor: _ClassSelctor__WEBPACK_IMPORTED_MODULE_1__["default"],
    PhotoSelector: _PhotoSelector__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['edit'],
  data: function data() {
    return {
      residential_status: 'day',
      ResidentialStatuses: [{
        value: "day",
        text: "Day Student"
      }, {
        value: "boarding",
        text: "Boarding Student"
      }],
      genders: [{
        value: "M",
        text: "Male"
      }, {
        value: "F",
        text: "Female"
      }],
      gender: 'M',
      first_name: "",
      last_name: "",
      other_names: "",
      previous_school: "",
      dob: "",
      admission_date: "",
      dob_menu: false,
      date_menu: false,
      address: "",
      guardian_first_name: "",
      guardian_last_name: "",
      guardian_email: "",
      guardian_phone_number: "",
      class_id: null,
      process: false,
      photo: null
    };
  },
  computed: {
    title: function title() {
      return this.edit ? "Edit student" : "Create New Student";
    },
    today: function today() {
      return dayjs().format('YYYY-MM-DD');
    }
  },
  methods: {
    done: function done(student) {
      this.first_name = "";
      this.last_name = "";
      this.other_names = "";
      this.dob = "";
      this.address = "";
      this.guardian_first_name = "";
      this.guardian_last_name = "";
      this.guardian_email = "";
      this.guardian_phone_number = "";
      this.admission_date = this.today;
      this.$emit('created', student);
      this.$emit('closed');
    },
    save: function save() {
      var _this = this;

      if (this.$refs.student_form.validate()) {
        this.process = true;
        var formData = new FormData();
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('other_names', this.other_names);
        formData.append('gender', this.gender);
        formData.append('previous_school', this.previous_school);
        formData.append('dob', this.dob);
        formData.append('admission_date', this.admission_date);
        formData.append('residential_status', this.residential_status);
        formData.append('address', this.address);
        formData.append('guardian_first_name', this.guardian_first_name);
        formData.append('guardian_last_name', this.guardian_last_name);
        formData.append('guardian_email', this.guardian_email);
        formData.append('guardian_phone_number', this.guardian_phone_number);
        formData.append('class_id', this.class_id);
        formData.append('photo', this.photo);
        axios.post('/student', formData).then(function (res) {
          _this.process = false;

          _this.done(res.data.data);
        })["catch"](function (error) {
          _this.process = false;
        });
      }
    }
  },
  mounted: function mounted() {
    this.admission_date = this.today;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TitleBarComponent",
  props: ['title', 'AddLabel', 'BtnIcon'],
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/students/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/students/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TitleBarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TitleBarComponent */ "./resources/js/components/TitleBarComponent.vue");
/* harmony import */ var _components_NewStudent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NewStudent */ "./resources/js/components/NewStudent.vue");
//
//
//
//
//
//
//
//
//
//
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
    NewStudent: _components_NewStudent__WEBPACK_IMPORTED_MODULE_1__["default"],
    TitleBarComponent: _components_TitleBarComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      NewStudent: false
    };
  }
});

/***/ }),

/***/ "./resources/js/components/ClassSelctor.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ClassSelctor.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClassSelctor_vue_vue_type_template_id_4c949c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true& */ "./resources/js/components/ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true&");
/* harmony import */ var _ClassSelctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassSelctor.vue?vue&type=script&lang=js& */ "./resources/js/components/ClassSelctor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClassSelctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClassSelctor_vue_vue_type_template_id_4c949c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClassSelctor_vue_vue_type_template_id_4c949c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4c949c7e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ClassSelctor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/GradeSelector.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/GradeSelector.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeSelector_vue_vue_type_template_id_2905dd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true& */ "./resources/js/components/GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true&");
/* harmony import */ var _GradeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/GradeSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeSelector_vue_vue_type_template_id_2905dd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeSelector_vue_vue_type_template_id_2905dd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2905dd0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GradeSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewClass.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/NewClass.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewClass_vue_vue_type_template_id_2bc08d23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewClass.vue?vue&type=template&id=2bc08d23&scoped=true& */ "./resources/js/components/NewClass.vue?vue&type=template&id=2bc08d23&scoped=true&");
/* harmony import */ var _NewClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewClass.vue?vue&type=script&lang=js& */ "./resources/js/components/NewClass.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewClass_vue_vue_type_template_id_2bc08d23_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewClass_vue_vue_type_template_id_2bc08d23_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2bc08d23",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewClass.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewGrade.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/NewGrade.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewGrade_vue_vue_type_template_id_5c8947fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true& */ "./resources/js/components/NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true&");
/* harmony import */ var _NewGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewGrade.vue?vue&type=script&lang=js& */ "./resources/js/components/NewGrade.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewGrade_vue_vue_type_template_id_5c8947fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewGrade_vue_vue_type_template_id_5c8947fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5c8947fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewGrade.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewStudent.vue":
/*!************************************************!*\
  !*** ./resources/js/components/NewStudent.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewStudent_vue_vue_type_template_id_35f253a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewStudent.vue?vue&type=template&id=35f253a6&scoped=true& */ "./resources/js/components/NewStudent.vue?vue&type=template&id=35f253a6&scoped=true&");
/* harmony import */ var _NewStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewStudent.vue?vue&type=script&lang=js& */ "./resources/js/components/NewStudent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewStudent_vue_vue_type_template_id_35f253a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewStudent_vue_vue_type_template_id_35f253a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "35f253a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewStudent.vue"
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

/***/ "./resources/js/pages/students/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/students/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_76b4b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=76b4b1c4&scoped=true& */ "./resources/js/pages/students/index.vue?vue&type=template&id=76b4b1c4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/students/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_76b4b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_76b4b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76b4b1c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/students/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ClassSelctor.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ClassSelctor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassSelctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClassSelctor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClassSelctor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassSelctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GradeSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/GradeSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GradeSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewClass.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/NewClass.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClass.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewClass.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewGrade.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/NewGrade.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewGrade.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewGrade.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewStudent.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/NewStudent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewStudent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewStudent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/students/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/students/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/students/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassSelctor_vue_vue_type_template_id_4c949c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassSelctor_vue_vue_type_template_id_4c949c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassSelctor_vue_vue_type_template_id_4c949c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeSelector_vue_vue_type_template_id_2905dd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeSelector_vue_vue_type_template_id_2905dd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeSelector_vue_vue_type_template_id_2905dd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/NewClass.vue?vue&type=template&id=2bc08d23&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/NewClass.vue?vue&type=template&id=2bc08d23&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClass_vue_vue_type_template_id_2bc08d23_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClass_vue_vue_type_template_id_2bc08d23_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClass_vue_vue_type_template_id_2bc08d23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClass.vue?vue&type=template&id=2bc08d23&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewClass.vue?vue&type=template&id=2bc08d23&scoped=true&");


/***/ }),

/***/ "./resources/js/components/NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrade_vue_vue_type_template_id_5c8947fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrade_vue_vue_type_template_id_5c8947fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrade_vue_vue_type_template_id_5c8947fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true&");


/***/ }),

/***/ "./resources/js/components/NewStudent.vue?vue&type=template&id=35f253a6&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/NewStudent.vue?vue&type=template&id=35f253a6&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStudent_vue_vue_type_template_id_35f253a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStudent_vue_vue_type_template_id_35f253a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewStudent_vue_vue_type_template_id_35f253a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewStudent.vue?vue&type=template&id=35f253a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewStudent.vue?vue&type=template&id=35f253a6&scoped=true&");


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

/***/ "./resources/js/pages/students/index.vue?vue&type=template&id=76b4b1c4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/students/index.vue?vue&type=template&id=76b4b1c4&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76b4b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76b4b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_76b4b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=76b4b1c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/students/index.vue?vue&type=template&id=76b4b1c4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClassSelctor.vue?vue&type=template&id=4c949c7e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-autocomplete", {
    attrs: {
      outlined: "",
      color: "teal",
      filled: "",
      label: "Class",
      rules: _vm.$store.state.requiredRules,
      items: _vm.classes,
      "item-color": "teal",
      "item-value": "id",
      "item-text": "name",
      loading: _vm.progress,
    },
    on: { change: _vm.selected },
    scopedSlots: _vm._u([
      {
        key: "prepend-item",
        fn: function () {
          return [
            _c(
              "v-btn",
              {
                attrs: { rounded: "", block: "", color: "teal", text: "" },
                on: {
                  click: function ($event) {
                    _vm.NewClass = true
                  },
                },
              },
              [_vm._v("Create new class")]
            ),
            _vm._v(" "),
            _c(
              "v-dialog",
              {
                attrs: { width: "500px" },
                model: {
                  value: _vm.NewClass,
                  callback: function ($$v) {
                    _vm.NewClass = $$v
                  },
                  expression: "NewClass",
                },
              },
              [
                _c("new-class", {
                  on: {
                    closed: function ($event) {
                      _vm.NewClass = false
                    },
                    created: _vm.classCreated,
                  },
                }),
              ],
              1
            ),
          ]
        },
        proxy: true,
      },
      {
        key: "no-data",
        fn: function () {
          return [
            _c(
              "span",
              { staticClass: "text--disabled w-100 text-center pa-3" },
              [_vm._v("You do not have classes yet, create your first class")]
            ),
          ]
        },
        proxy: true,
      },
    ]),
    model: {
      value: _vm.class_id,
      callback: function ($$v) {
        _vm.class_id = $$v
      },
      expression: "class_id",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GradeSelector.vue?vue&type=template&id=2905dd0a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-autocomplete", {
    attrs: {
      loading: _vm.progress,
      items: _vm.grades,
      "item-text": "name",
      "item-value": "id",
      filled: "",
      color: "teal",
      rules: _vm.$store.state.requiredRules,
      outlined: "",
      label: "Grade",
      "item-color": "teal",
    },
    on: {
      change: function ($event) {
        return _vm.$emit("selected", _vm.grade_id)
      },
    },
    scopedSlots: _vm._u([
      {
        key: "prepend-item",
        fn: function () {
          return [
            _c(
              "v-btn",
              {
                attrs: { text: "", block: "", color: "teal", rounded: "" },
                on: {
                  click: function ($event) {
                    _vm.newGrade = true
                  },
                },
              },
              [_vm._v("New Grade")]
            ),
            _vm._v(" "),
            _c(
              "v-dialog",
              {
                attrs: { width: "500px" },
                model: {
                  value: _vm.newGrade,
                  callback: function ($$v) {
                    _vm.newGrade = $$v
                  },
                  expression: "newGrade",
                },
              },
              [
                _c("new-grade", {
                  on: {
                    closed: function ($event) {
                      _vm.newGrade = false
                    },
                    created: _vm.gradeCreated,
                  },
                }),
              ],
              1
            ),
          ]
        },
        proxy: true,
      },
    ]),
    model: {
      value: _vm.grade_id,
      callback: function ($$v) {
        _vm.grade_id = $$v
      },
      expression: "grade_id",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewClass.vue?vue&type=template&id=2bc08d23&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewClass.vue?vue&type=template&id=2bc08d23&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            { ref: "class_form" },
            [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  color: "teal",
                  filled: "",
                  label: "Class Name *",
                  autofocus: "",
                  rules: _vm.$store.state.requiredRules,
                },
                model: {
                  value: _vm.name,
                  callback: function ($$v) {
                    _vm.name = $$v
                  },
                  expression: "name",
                },
              }),
              _vm._v(" "),
              _c("grade-selector", {
                on: {
                  selected: function (id) {
                    return (_vm.grade_id = id)
                  },
                },
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  outlined: "",
                  filled: "",
                  color: "teal",
                  label: "Description",
                  rows: "2",
                  "auto-grow": "",
                },
                model: {
                  value: _vm.description,
                  callback: function ($$v) {
                    _vm.description = $$v
                  },
                  expression: "description",
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
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                color: "teal",
                rounded: "",
                loading: _vm.progress,
              },
              on: { click: _vm.save },
            },
            [_vm._v("Save")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewGrade.vue?vue&type=template&id=5c8947fc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            { ref: "grade_form" },
            [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  filled: "",
                  color: "teal",
                  label: "Name*",
                  autofocus: "",
                  rules: _vm.$store.state.requiredRules,
                },
                model: {
                  value: _vm.name,
                  callback: function ($$v) {
                    _vm.name = $$v
                  },
                  expression: "name",
                },
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  outlined: "",
                  filled: "",
                  label: "Description",
                  color: "teal",
                  "auto-grow": "",
                  rows: "2",
                },
                model: {
                  value: _vm.description,
                  callback: function ($$v) {
                    _vm.description = $$v
                  },
                  expression: "description",
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
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { disabled: _vm.progress, text: "" },
              on: {
                click: function ($event) {
                  return _vm.$emit("closed")
                },
              },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { loading: _vm.progress, text: "", color: "teal" },
              on: { click: _vm.save },
            },
            [_vm._v("Save")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewStudent.vue?vue&type=template&id=35f253a6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NewStudent.vue?vue&type=template&id=35f253a6&scoped=true& ***!
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
            { ref: "student_form" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "3" } },
                    [
                      _c("photo-selector", {
                        attrs: { preview: "/img/photo.png" },
                        on: {
                          fileSelected: function (file) {
                            return (_vm.photo = file)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Student Photo")]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [_c("v-subheader", [_vm._v("Personal Information")])],
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
                          color: "teal",
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
                          color: "teal",
                          label: "Last Name*",
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
                          color: "teal",
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
                                var atttrs = ref.atttrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            outlined: "",
                                            filled: "",
                                            color: "teal",
                                            label: "Date of birth*",
                                            readonly: "",
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
                                        atttrs,
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
                            attrs: { color: "teal", "no-title": "" },
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
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: "teal",
                          "item-color": "teal",
                          label: "Gender *",
                          items: _vm.genders,
                          rules: _vm.$store.state.requiredRules,
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
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          filled: "",
                          color: "teal",
                          label: "Residential Address",
                          rows: "2",
                          "auto-grow": "",
                        },
                        model: {
                          value: _vm.address,
                          callback: function ($$v) {
                            _vm.address = $$v
                          },
                          expression: "address",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [_c("v-subheader", [_vm._v("Academic Information")])],
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
                          color: "teal",
                          label: "Previous School",
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
                      _c("class-selctor", {
                        on: {
                          selected: function (id) {
                            return (_vm.class_id = id)
                          },
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
                          color: "teal",
                          label: "Residence Type*",
                          items: _vm.ResidentialStatuses,
                          rules: _vm.$store.state.requiredRules,
                          "item-color": "teal",
                        },
                        model: {
                          value: _vm.residential_status,
                          callback: function ($$v) {
                            _vm.residential_status = $$v
                          },
                          expression: "residential_status",
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
                                var atttrs = ref.atttrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            outlined: "",
                                            filled: "",
                                            color: "teal",
                                            label: "Date admitted*",
                                            readonly: "",
                                            rules:
                                              _vm.$store.state.requiredRules,
                                          },
                                          on: {
                                            focus: function ($event) {
                                              _vm.date_menu = true
                                            },
                                          },
                                          model: {
                                            value: _vm.admission_date,
                                            callback: function ($$v) {
                                              _vm.admission_date = $$v
                                            },
                                            expression: "admission_date",
                                          },
                                        },
                                        "v-text-field",
                                        atttrs,
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
                            value: _vm.date_menu,
                            callback: function ($$v) {
                              _vm.date_menu = $$v
                            },
                            expression: "date_menu",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: { color: "teal", "no-title": "" },
                            on: {
                              input: function ($event) {
                                _vm.date_menu = false
                              },
                            },
                            model: {
                              value: _vm.admission_date,
                              callback: function ($$v) {
                                _vm.admission_date = $$v
                              },
                              expression: "admission_date",
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
                    { attrs: { cols: "12" } },
                    [_c("v-subheader", [_vm._v("Guardian Information")])],
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
                          color: "teal",
                          label: "First Name*",
                          rules: _vm.$store.state.requiredRules,
                        },
                        model: {
                          value: _vm.guardian_first_name,
                          callback: function ($$v) {
                            _vm.guardian_first_name = $$v
                          },
                          expression: "guardian_first_name",
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
                          color: "teal",
                          label: "Last Name*",
                          rules: _vm.$store.state.requiredRules,
                        },
                        model: {
                          value: _vm.guardian_last_name,
                          callback: function ($$v) {
                            _vm.guardian_last_name = $$v
                          },
                          expression: "guardian_last_name",
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
                          type: "email",
                          color: "teal",
                          label: "Email",
                        },
                        model: {
                          value: _vm.guardian_email,
                          callback: function ($$v) {
                            _vm.guardian_email = $$v
                          },
                          expression: "guardian_email",
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
                          type: "tel",
                          color: "teal",
                          label: "Phone Number",
                          rules: _vm.$store.state.requiredRules,
                        },
                        model: {
                          value: _vm.guardian_phone_number,
                          callback: function ($$v) {
                            _vm.guardian_phone_number = $$v
                          },
                          expression: "guardian_phone_number",
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
              attrs: { text: "", rounded: "" },
              on: {
                click: function ($event) {
                  return _vm.$emit("closed")
                },
              },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                rounded: "",
                color: "teal",
                loading: _vm.process,
              },
              on: { click: _vm.save },
            },
            [_vm._v("Save")]
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
        { staticClass: "teal lighten-5 teal--text", attrs: { cols: "12" } },
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
                      attrs: { text: "", rounded: "", color: "teal" },
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
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "teal",
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/students/index.vue?vue&type=template&id=76b4b1c4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/students/index.vue?vue&type=template&id=76b4b1c4&scoped=true& ***!
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
        on: {
          create: function (b) {
            return (_vm.NewStudent = b)
          },
        },
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", width: "50%", scrollable: "" },
          model: {
            value: _vm.NewStudent,
            callback: function ($$v) {
              _vm.NewStudent = $$v
            },
            expression: "NewStudent",
          },
        },
        [
          _c("new-student", {
            on: {
              closed: function ($event) {
                _vm.NewStudent = false
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
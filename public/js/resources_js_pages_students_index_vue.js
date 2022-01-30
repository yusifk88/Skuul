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
  watch: {
    id: function id() {
      this.grade_id = this.id;
    }
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

    if (this.id) {
      this.grade_id = this.id;
    }
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
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NewClass",
  components: {
    GradeSelector: _GradeSelector__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['edit', "defaultClass"],
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
  watch: {
    defaultClass: function defaultClass() {
      this.defaultClass();
    }
  },
  methods: {
    setValues: function setValues() {
      this.name = this.defaultClass.name;
      this.description = this.defaultClass.description;
      this.grade_id = this.defaultClass.grade_id;
    },
    done: function done(Schoolclass) {
      if (!this.edit) {
        this.name = "";
        this.description = "";
      }

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
        var url = this.edit ? "/class/" + this.defaultClass.id : "/class";
        axios.post(url, formData).then(function (res) {
          _this.progress = false;

          _this.done(res.data.data);
        })["catch"](function (error) {
          _this.progress = false;
        });
      }
    }
  },
  mounted: function mounted() {
    if (this.edit) {
      this.setValues();
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
  props: ['edit', 'grade'],
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
    },
    defaultGrade: function defaultGrade() {
      return this.grade;
    }
  },
  watch: {
    defaultGrade: function defaultGrade() {
      this.setValues();
    }
  },
  methods: {
    setValues: function setValues() {
      this.name = this.grade.name;
      this.description = this.grade.description;
      console.log(this.grade);
    },
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
        var url = this.edit ? '/grade/' + this.grade.id : "/grade";
        axios.post(url, formData).then(function (res) {
          _this.progress = false;

          _this.done(res.data.data);
        })["catch"](function (error) {
          _this.progress = false;
        });
      }
    }
  },
  mounted: function mounted() {
    this.setValues();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentMenu */ "./resources/js/components/StudentMenu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "StudentItem",
  components: {
    StudentMenu: _StudentMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['student']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StudentMenu",
  props: ['student']
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
/* harmony import */ var _components_StudentItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/StudentItem */ "./resources/js/components/StudentItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    StudentItem: _components_StudentItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    NewStudent: _components_NewStudent__WEBPACK_IMPORTED_MODULE_1__["default"],
    TitleBarComponent: _components_TitleBarComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      NewStudent: false,
      students: [],
      progress: false
    };
  },
  methods: {
    getStudents: function getStudents() {
      var _this = this;

      this.progress = true;
      axios.get('/students').then(function (res) {
        _this.progress = false;
        _this.students = res.data.data;
      })["catch"](function (error) {
        _this.progress = false;
      });
    }
  },
  mounted: function mounted() {
    this.getStudents();
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

/***/ "./resources/js/components/StudentItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/StudentItem.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentItem_vue_vue_type_template_id_5a71a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true& */ "./resources/js/components/StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true&");
/* harmony import */ var _StudentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentItem.vue?vue&type=script&lang=js& */ "./resources/js/components/StudentItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentItem_vue_vue_type_template_id_5a71a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _StudentItem_vue_vue_type_template_id_5a71a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5a71a05a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StudentItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/StudentMenu.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/StudentMenu.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentMenu_vue_vue_type_template_id_689ac41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true& */ "./resources/js/components/StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true&");
/* harmony import */ var _StudentMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/StudentMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudentMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentMenu_vue_vue_type_template_id_689ac41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _StudentMenu_vue_vue_type_template_id_689ac41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "689ac41f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StudentMenu.vue"
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

/***/ "./resources/js/components/StudentItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/StudentItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StudentMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/StudentMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentItem_vue_vue_type_template_id_5a71a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentItem_vue_vue_type_template_id_5a71a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentItem_vue_vue_type_template_id_5a71a05a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentMenu_vue_vue_type_template_id_689ac41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentMenu_vue_vue_type_template_id_689ac41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentMenu_vue_vue_type_template_id_689ac41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true&");


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
      color: _vm.$store.state.app.ThemeColor,
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
      color: _vm.$store.state.app.ThemeColor,
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
            {
              ref: "class_form",
              nativeOn: {
                keyup: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.save.apply(null, arguments)
                },
              },
            },
            [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  color: _vm.$store.state.app.ThemeColor,
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
                attrs: { id: _vm.grade_id },
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
                  color: _vm.$store.state.app.ThemeColor,
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
                color: _vm.$store.state.app.ThemeColor,
                rounded: "",
                loading: _vm.progress,
              },
              on: { click: _vm.save },
            },
            [
              _vm._v(
                "Save\n            " +
                  _vm._s(_vm.edit ? "Changes" : "") +
                  "\n        "
              ),
            ]
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
            {
              ref: "grade_form",
              nativeOn: {
                keyup: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.save.apply(null, arguments)
                },
              },
            },
            [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  filled: "",
                  color: _vm.$store.state.app.ThemeColor,
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
                  color: _vm.$store.state.app.ThemeColor,
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
              attrs: {
                loading: _vm.progress,
                text: "",
                color: _vm.$store.state.app.ThemeColor,
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
            {
              ref: "student_form",
              nativeOn: {
                keyup: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.save.apply(null, arguments)
                },
              },
            },
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
                                            color:
                                              _vm.$store.state.app.ThemeColor,
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
                            attrs: {
                              color: _vm.$store.state.app.ThemeColor,
                              "no-title": "",
                            },
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
                          color: _vm.$store.state.app.ThemeColor,
                          "item-color": _vm.$store.state.app.ThemeColor,
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
                          color: _vm.$store.state.app.ThemeColor,
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
                          color: _vm.$store.state.app.ThemeColor,
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
                          color: _vm.$store.state.app.ThemeColor,
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
                                            color:
                                              _vm.$store.state.app.ThemeColor,
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
                            attrs: {
                              color: _vm.$store.state.app.ThemeColor,
                              "no-title": "",
                            },
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
                          color: _vm.$store.state.app.ThemeColor,
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
                          color: _vm.$store.state.app.ThemeColor,
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
                          color: _vm.$store.state.app.ThemeColor,
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
                          color: _vm.$store.state.app.ThemeColor,
                          label: "Phone Number*",
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
                color: _vm.$store.state.app.ThemeColor,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentItem.vue?vue&type=template&id=5a71a05a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "border-bottom", attrs: { link: "", "three-line": "" } },
    [
      _c(
        "v-list-item-avatar",
        [_c("v-img", { attrs: { src: _vm.student.photo_url } })],
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
                    text: "",
                    color: _vm.$store.state.app.ThemeColor,
                    rounded: "",
                    to: "/students/" + _vm.student.id,
                  },
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.student.first_name) +
                      " " +
                      _vm._s(_vm.student.last_name) +
                      " " +
                      _vm._s(_vm.student.other_names) +
                      "\n            "
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.student.residential_status === "day"
                ? _c(
                    "v-chip",
                    {
                      attrs: {
                        "x-small": "",
                        color: "green lighten-5 green--text",
                      },
                    },
                    [_vm._v("Day Student")]
                  )
                : _c(
                    "v-chip",
                    {
                      attrs: {
                        "x-small": "",
                        color: "orange lighten-5 orange--text",
                      },
                    },
                    [_vm._v("Boarding Student")]
                  ),
              _vm._v(" "),
              _vm.student.active
                ? _c(
                    "v-chip",
                    {
                      attrs: {
                        color: "green lighten-5 green--text",
                        "x-small": "",
                      },
                    },
                    [
                      _vm._v("Active"),
                      _c("v-icon", { attrs: { "x-small": "" } }, [
                        _vm._v("mdi-check"),
                      ]),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-list-item-subtitle", [
            _c("strong", [_vm._v("Gender:")]),
            _vm._v(
              _vm._s(_vm.student.gender === "M" ? "Male" : "Female") +
                "\n            "
            ),
            _c("strong", [_vm._v("Current Class:")]),
            _vm._v(_vm._s(_vm.student.student_class.name) + "\n            "),
            _c("strong", [_vm._v("Address:")]),
            _vm._v(_vm._s(_vm.student.address) + "\n        "),
          ]),
          _vm._v(" "),
          _c("v-list-item-subtitle", [
            _c("strong", [_vm._v("Guardian Name:")]),
            _vm._v(
              _vm._s(_vm.student.guardian_first_name) +
                " " +
                _vm._s(_vm.student.guardian_last_name) +
                "\n            "
            ),
            _c("strong", [_vm._v("Guardian Phone Number:")]),
            _vm._v(
              _vm._s(_vm.student.guardian_phone_number) + "\n            "
            ),
            _c("strong", [_vm._v("Guardian Email:")]),
            _vm._v(_vm._s(_vm.student.guardian_email) + "\n        "),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list-item-action",
        [_c("student-menu", { attrs: { student: _vm.student } })],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StudentMenu.vue?vue&type=template&id=689ac41f&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                        large: "",
                        depressed: "",
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
            { attrs: { to: "/students/" + _vm.student.id } },
            [
              _c("v-list-item-title", [
                _vm._v("\n                Preview\n            "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            [
              _c("v-list-item-title", [
                _vm._v("\n                Edit\n            "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            [
              _c("v-list-item-title", { staticClass: "orange--text" }, [
                _vm._v("\n                Withdraw/Deactivate\n            "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { attrs: { color: "red" } },
            [
              _c("v-list-item-title", { staticClass: "red--text" }, [
                _vm._v("\n                Delete\n            "),
              ]),
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
        attrs: { "add-label": "Create new student" },
        on: {
          create: function (b) {
            return (_vm.NewStudent = b)
          },
        },
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mx-auto", attrs: { cols: "12", sm: "10" } },
            [
              _vm.progress
                ? _c("v-skeleton-loader", { attrs: { type: "list-item@10" } })
                : _c(
                    "v-list",
                    _vm._l(_vm.students, function (student) {
                      return _c("student-item", {
                        key: student.id,
                        attrs: { student: student },
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
          attrs: { persistent: "", width: "40%", scrollable: "" },
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
              created: _vm.getStudents,
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
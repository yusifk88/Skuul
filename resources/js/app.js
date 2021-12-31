/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */




/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from "vue";
import 'es6-promise/auto';
import {store} from "./plugins/store";
import vuetify from "./plugins/vuetify";
import NavDrawer from "./components/NavDrawer";
import SuccessComponent from "./components/SuccessComponent";
import ErrorComponent from "./components/ErrorComponent";
import {router} from "./router";
import GetStartedComponent from "./components/GetStartedComponent";

require('./bootstrap');



const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    components:{
        NavDrawer,
        SuccessComponent,
        ErrorComponent,
        GetStartedComponent
    },
    data(){
      return{
          number:0,
          showMiniVariant:false,

      }
    },
    methods:{

        changeNavVariant(){
            this.showMiniVariant=!this.showMiniVariant;
        }
    },
    computed:{
      user(){
          return store.state.user;
      }
    },
    mounted() {
        store.commit('init');


    }
});

Vue.filter('human_date', (d)=>{
    if (!d) return '';
    return dayjs(d).format('MMM D, YYYY');

});



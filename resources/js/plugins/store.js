import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        flashSuccess:false,
        successMessage:"",
        flashErro:false,
        errors:null
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

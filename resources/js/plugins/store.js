import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        ImgPreview:"/img/photo.jpg",
        AppName:"Skuul",
        flashSuccess:false,
        successMessage:"",
        flashErro:false,
        errors:null,
        user:null,
        initializing:false,
        requiredRules: [
            v => !!v || 'This field is required'
        ]
    },
    mutations: {
        init(state){
            state.initializing=true;
            axios.get('/user')
                .then(res=>{
                  state.user=res.data.data;
                    state.initializing=false;
                })
        }
    }
})

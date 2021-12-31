import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        app:{
            ThemeColor:'teal',
            ThemeText:"teal--text"
        },
        ImgPreview:"/img/photo.jpg",
        AppName:"Skuul",
        flashSuccess:false,
        successMessage:"",
        flashErro:false,
        errors:null,
        user:null,
        initializing:false,
        ranks: [
            {
                value: 'supi',
                text: "Sup. i"
            },
            {
                value: 'supii',
                text: "Sup. ii"
            },
            {
                value: 'Snr_sup_i',
                text: "Snr. Sup. i"
            },
            {
                value: 'Snr_sup_ii',
                text: "Snr. Sup. ii"
            } ,
            {
                value: 'asst_dr_i',
                text: "Asst. Dir. i"
            }
            ,
            {
                value: 'asst_dr_ii',
                text: "Asst. Dir. ii"
            },
            {
                value: 'dr_i',
                text: "Dir. i"
            },
            {
                value: 'dr_ii',
                text: "Dir. ii"
            } ,
            {
                value: 'other',
                text: "Other"
            }
        ],
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

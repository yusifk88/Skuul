<template>
<span>
    <title-bar-component :show-add-btn="false"></title-bar-component>
    <v-row>
        <v-col cols="12" sm="6" class="mx-auto" >
                    <v-skeleton-loader type="card" v-if="!SchoolClass"></v-skeleton-loader>

            <v-card flat v-else>
                <v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text small rounded>Delete</v-btn>
                    <v-btn :color="$store.state.app.ThemeColor" text small rounded @click="showEdit=true">Edit</v-btn>
                </v-card-title>
                <v-card-text>

                <h2 class="font-weight-light black--text mb-0">{{SchoolClass.name}}</h2>
                <small>Name</small>

                <h2 class="font-weight-light black--text mb-0 mt-3">{{SchoolClass.description ? SchoolClass.description  : "N/A"}}</h2>
                <small>Description</small><br>

                <v-btn class="mt-3 p-0" text rounded :color="$store.state.app.ThemeColor" :to="'/grades/'+SchoolClass.grade.id">{{SchoolClass.grade.name}}</v-btn><br>
                <small>Grade</small>

                <h2 class="font-weight-light black--text mb-0 mt-3">{{SchoolClass.created_at | human_date}}</h2>
                <small>Created At</small>
                </v-card-text>

            </v-card>
        </v-col>
    </v-row>

    <v-dialog width="500px" persistent v-model="showEdit" >
        <new-class @created="getClass" :edit="true" :default-class="SchoolClass" @closed="showEdit=false"></new-class>
    </v-dialog>
</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewClass from "../../components/NewClass";
export default {
    name: "preview",
    components: {NewClass, TitleBarComponent},
    data(){
        return{
            SchoolClass:null,
            showEdit:false
        }
    },
    methods:{
        getClass(){
            axios.get('/class/'+this.$route.params.id)
                .then(res=>{
                    this.SchoolClass = res.data.data;
                })
        }
    },
    mounted() {
        this.getClass();
    }
}
</script>

<style scoped>

</style>

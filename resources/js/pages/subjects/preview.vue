<template>
<span>
    <title-bar-component :title="subjectName" :show-add-btn="false"></title-bar-component>

<v-row>
    <v-col cols="12" sm="6" class="mx-auto">
        <v-card flat>
            <v-card-title>
                <v-spacer></v-spacer>
                <v-btn color="red" text rounded small>Delete</v-btn>
                <v-btn :color="$store.state.app.ThemeColor" text rounded small @click="showEdit=true">Edit</v-btn>
            </v-card-title>
            <v-card-text v-if="subject">
                <h2 class="font-weight-light mb-0">{{subject.name}}</h2>
                <small>Name</small>

                <h2 class="font-weight-light mb-0 mt-3">{{subject.type.toUpperCase()}}</h2>
                <small>Type</small>

                <h2 class="font-weight-light mb-0 mt-3">{{subject.description ? subject.description :"N/A" }}</h2>
                <small>Description</small>

                <h2 class="font-weight-light mb-0 mt-3">{{subject.created_at | human_date }}</h2>
                <small>Created At</small>

            </v-card-text>
        </v-card>
    </v-col>
</v-row>
    <v-dialog
        width="500px"
        persistent
        v-model="showEdit"
    >
        <new-subject @created="sb=>subject=sb" :subject="subject" :edit="true" @closed="showEdit=false"></new-subject>

    </v-dialog>
</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewSubject from "../../components/NewSubject";
export default {
    name: "preview",
    components: {NewSubject, TitleBarComponent},
    data(){
        return{
            subject:null,
            showEdit:false
        }
    },
    computed:{
        subjectName(){
            return this.subject ? "Subject: "+this.subject.name : "Subject:";
        }
    },
    methods:{
        getSubject(){

            axios.get("/subjects/"+this.$route.params.id)
            .then(res=>{
                this.subject = res.data.data;
            })
        }
    },
    mounted() {
        this.getSubject();
    }
}
</script>

<style scoped>

</style>

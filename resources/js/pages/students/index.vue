<template>
<span>
<title-bar-component
    @create="b=>NewStudent=b"
    add-label="Create new student"
></title-bar-component>


    <v-row>
        <v-col cols="12" sm="10" class="mx-auto">
            <v-skeleton-loader type="list-item@10" v-if="progress"></v-skeleton-loader>
            <v-list v-else>
              <student-item
                  v-for="student in students"
                  :key="student.id"
                  :student="student"
              ></student-item>
            </v-list>
        </v-col>
    </v-row>


    <v-dialog
        persistent
        width="40%"
        v-model="NewStudent"
        scrollable
    >
        <new-student
            @closed="NewStudent=false"
            @created="getStudents"
        ></new-student>
    </v-dialog>

</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewStudent from "../../components/NewStudent";
import StudentItem from "../../components/StudentItem";
export default {
    name: "index",
    components: {StudentItem, NewStudent, TitleBarComponent},
    data(){
        return{
            NewStudent:false,
            students:[],
            progress:false
        }
    },
    methods:{
        getStudents(){
            this.progress=true;
            axios.get('/students')
            .then(res=>{
                this.progress=false;
                this.students=res.data.data;
            })
            .catch(error=>{
                this.progress=false
            })

        }
    },
    mounted() {
        this.getStudents();
    }
}
</script>

<style scoped>

</style>

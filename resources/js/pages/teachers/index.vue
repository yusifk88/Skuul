<template>
<span>
    <title-bar-component
        add-label="Create new teacher"
        @create="b=>NewTeacher=b"
    ></title-bar-component>



    <v-row>
        <v-col cols="12" sm="10" class="mx-auto">
            <v-skeleton-loader type="list-item@10" v-if="progress"></v-skeleton-loader>
            <v-list v-else>
                <teacher-item-component
                    v-for="teacher in teachers"
                    :key="teacher.id"
                    :teacher="teacher"
                    @updated="getTeachers"
                ></teacher-item-component>
            </v-list>
        </v-col>
    </v-row>




    <v-dialog
        width="40%"
        :fullscreen="$vuetify.breakpoint.mobile"
        v-model="NewTeacher"
        persistent
        scrollable

    >
        <new-teacher
            @closed="NewTeacher=false"
        ></new-teacher>
    </v-dialog>
</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewTeacher from "../../components/NewTeacher";
import TeacherItemComponent from "../../components/TeacherItemComponent";

export default {
    name: "index",
    components: {TeacherItemComponent, NewTeacher, TitleBarComponent},
    data() {
        return {

            NewTeacher: false,
            teachers:[],
            progress:false
        }
    },
    mounted() {
      this.getTeachers();
    },
    methods:{
        getTeachers(){
            this.progress=true;
            axios.get('/teachers')
                .then(res=>{
                    this.teachers=res.data.data;
                    this.progress=false;

                })
            .catch(error=>{
                this.progress=false;
            })

        }
    }
}
</script>

<style scoped>

</style>

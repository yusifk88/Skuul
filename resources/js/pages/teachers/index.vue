<template>
<span>
    <title-bar-component
        add-label="Create new teacher"
        @create="b=>NewTeacher=b"
    ></title-bar-component>



    <v-row>
        <v-col cols="12" sm="10" class="mx-auto">
            <v-list>
                <v-list-item
                    v-for="teacher in teachers"
                    :key="teacher.id"
                    two-line
                >
                    <v-list-item-content>
                        <v-list-item-title>{{teacher.first_name}} {{teacher.last_name}} {{teacher.other_names}}</v-list-item-title>
                        <v-list-item-subtitle>
                            <strong>Phone Number: </strong>{{teacher.phone_number}}
                            <strong>Gender: </strong>{{teacher.gender==='F' ? 'Female' : 'Male'}}

                           <span v-if="teacher.rank">
                            <strong>Rank: </strong>{{teacher.rank}}

                           </span>
                        </v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
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

export default {
    name: "index",
    components: {NewTeacher, TitleBarComponent},
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

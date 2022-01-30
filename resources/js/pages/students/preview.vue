<template>
<span>
    <title-bar-component :title="title" :show-add-btn="false"></title-bar-component>

    <v-row>
        <v-col cols="12" sm="8" class="mx-auto">
            <v-skeleton-loader type="card" v-if="!student"></v-skeleton-loader>
            <v-card flat v-else>
                <v-card-title>
                   <photo-selector :preview="student.photo_url" style="width: 150px;"></photo-selector> <h2 class="font-weight-light ml-4">{{student.first_name}} {{student.last_name}} {{student.other_names}}</h2> <v-spacer></v-spacer>
                    <student-menu @edited="getStudent" :student="student" ></student-menu>
                </v-card-title>
                <v-card-text>
                    <v-row>

                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.dob | human_date}}</h2>
                        <small>Date Of Birth</small>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.address}}</h2>
                        <small>Address</small>
                        </v-col>

                    </v-row>


                    <v-row>

                        <v-col cols="12">
                            <v-subheader>Academic Information</v-subheader>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.previous_school}}</h2>
                        <small>Previous School</small>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-btn text small :color="$store.state.app.ThemeColor" :to="'/classes/'+student.class_id">{{student.student_class.name}}</v-btn>
                        <small class="d-block">Class</small>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.residential_status}}</h2>
                        <small>Residential Status</small>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light">{{student.admission_date | human_date}}</h2>
                        <small class="d-block">Date Admitted</small>
                        </v-col>

                    </v-row>


                    <v-row>

                        <v-col cols="12">
                            <v-subheader>Guardian Information</v-subheader>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.guardian_first_name}} {{student.guardian_last_name}}</h2>
                        <small>Name</small>
                        </v-col>


                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.guardian_phone_number}}</h2>
                        <small>Phone Number</small>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <h2 class="font-weight-light mb-0">{{student.guardian_email}}</h2>
                        <small>E-Mail</small>
                        </v-col>


                    </v-row>


                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import StudentMenu from "../../components/StudentMenu";
import PhotoSelector from "../../components/PhotoSelector";
export default {
    name: "preview",
    components: {PhotoSelector, StudentMenu, TitleBarComponent},
    data(){
        return{
            student:null
        }
    },
    computed:{
      title(){
          return this.student ? "Student: "+this.student.first_name +" "+this.student.last_name : "Student";
      }
    },
    methods:{
        getStudent(){
            axios.get('/students/'+this.$route.params.id)
            .then(res=>{
                this.student = res.data.data;
            })
        }
    },
    mounted() {
        this.getStudent();
    }
}
</script>

<style scoped>

</style>

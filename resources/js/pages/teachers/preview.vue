<template>
    <span>
        <title-bar-component
            :title="'Teacher Infor: '+TeacherName"
            :show-add-btn="false"
        ></title-bar-component>
<v-row dense>

    <v-col cols="12" sm="8" class="mx-auto">
        <v-skeleton-loader type="card" v-if="progress"></v-skeleton-loader>
        <v-card flat v-else>
            <v-card-title class="border-bottom">
            <h1 class="font-weight-light">
               <v-avatar>
                   <v-img src="/img/photo.png"></v-img>
               </v-avatar> {{ TeacherName }}
            </h1>

                <v-spacer></v-spacer>
                <teacher-menu-component @updated="GetTeacher" v-if="teacher" :teacher="teacher"></teacher-menu-component>
            </v-card-title>
            <v-card-text v-if="teacher">
                <v-row>
                    <v-col cols="12" sm="4">
                <v-list>
                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.gender === 'F' ? 'Female' : 'Male' }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Gender</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-black">{{ teacher.phone_number }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Phone Number</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-black">
                        <template v-if="teacher.dob">

                            {{ teacher.dob | human_date }}
                        </template>

                            <template v-else>
                                N/A
                            </template>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Date of Birth</v-list-item-subtitle>
                    </v-list-item-content>





                    </v-list-item>


                    <v-list-item>

                         <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.id_number ? teacher.id_number : "N/A" }}</v-list-item-title>
                        <v-list-item-subtitle
                            class="text--disabled">ID Number(Notional ID,Voter ID, ETC)</v-list-item-subtitle>
                    </v-list-item-content>

                    </v-list-item>
                    <v-list-item>
                         <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.email ? teacher.email : "N/A" }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Email</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                    </v-col>
                    <v-col cols="12" sm="4">
                <v-list>
                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.staff_id ? teacher.staff_id : 'N/A' }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Staff Number</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.academic_qualification ? teacher.academic_qualification : "N/A" }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Academic Qualification</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-black">
                            {{ teacher.professional_qualification ? teacher.professional_qualification : "N/A" }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Date of Birth</v-list-item-subtitle>
                    </v-list-item-content>





                    </v-list-item>


                    <v-list-item>

                         <v-list-item-content>
                        <v-list-item-title class="font-weight-black">
                            <template v-if="teacher.appointment_date">
                                                           {{ teacher.appointment_date | human_date }}

                            </template>
                            <template v-else>
                                N/A
                            </template>

                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Date Appointed</v-list-item-subtitle>
                    </v-list-item-content>

                    </v-list-item>
                    <v-list-item>
                         <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">


                            <template v-if="teacher.date_assumed">
                                                           {{ teacher.date_assumed | human_date }}

                            </template>
                            <template v-else>
                                N/A
                            </template>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Assumed Post On</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                    </v-col>
                    <v-col cols="12" sm="4">
                <v-list>
                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.academic_qualification ? teacher.academic_qualification : 'N/A' }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Academic Qualification</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">{{ teacher.professional_qualification ? teacher.professional_qualification : "N/A" }}</v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Professional Qualification</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-black">
                            {{ rank_name ? rank_name : "N/A" }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Rank</v-list-item-subtitle>
                    </v-list-item-content>

                    </v-list-item>


                    <v-list-item>
                         <v-list-item-content>
                        <v-list-item-title class="font-weight-black">
                            {{teacher.bank ? teacher.bank : "N/A"}}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Bank Name</v-list-item-subtitle>
                    </v-list-item-content>

                    </v-list-item>
                    <v-list-item>
                         <v-list-item-content>
                        <v-list-item-title
                            class="font-weight-black">
                           {{teacher.account_number ? teacher.account_number : "N/A"}}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text--disabled">Account Number</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                    </v-col>

                </v-row>


            </v-card-text>
        </v-card>
    </v-col>

    <v-col cols="12" sm="8" class="mx-auto">
        <v-skeleton-loader type="card" v-if="progress"></v-skeleton-loader>
        <teacher-rocord-tabs v-else :teacher="teacher"></teacher-rocord-tabs>
    </v-col>
</v-row>
            </span>

</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import TeacherMenuComponent from "../../components/TeacherMenuComponent";
import TeacherRocordTabs from "../../components/TeacherRocordTabs";

export default {
    name: "preview",
    components: {TeacherRocordTabs, TeacherMenuComponent, TitleBarComponent},
    data() {
        return {
            teacher: null,
            progress: false,

        }
    },
    computed: {
        rank_name(){
          const rank =this.$store.state.ranks.find(rank=>{
              return rank.value === this.teacher.rank;
          })
            return rank ? rank.text : "";
        },
        TeacherID() {
            return this.$route.params.id;
        },
        TeacherName() {
            return this.teacher ? this.teacher.first_name + " " + this.teacher.last_name : null
        }
    },
    watch: {
        TeacherID() {
            this.GetTeacher();
        }
    },
    methods: {
        GetTeacher() {
            this.progress = true;
            axios.get('/teacher/' + this.TeacherID)
                .then(res => {
                    this.teacher = res.data.data;
                    this.progress = false;
                })
                .catch(error => {
                    this.progress = false;
                })
        }
    },
    mounted() {
        this.GetTeacher();
    }
}
</script>

<style scoped>

</style>

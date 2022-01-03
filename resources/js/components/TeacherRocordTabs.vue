<template>
    <v-card flat v-if="teacher">



            <v-tabs
                v-model="tab"
                icons-and-text
                :color="$store.state.app.ThemeColor"

            >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#classes-tab" >

                    {{teacher.first_name }}'s Subjects & Classes
                </v-tab>

                <v-tab href="#log-tab">
                    {{teacher.first_name }}'s usage logs
                </v-tab>

                <v-tab href="#feedback-tab">
                    {{teacher.first_name }}'s concerns and feedback
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item

                    value="classes-tab"
                >
                    <v-card flat>
                        <v-card-text>
                            <subject-assiggnment-component :teacher="teacher"></subject-assiggnment-component>

                        </v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item

                    value="log-tab"
                >
                    <v-card flat>
                        <v-card-text><h1>feedback tab here</h1></v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item

                    value="feedback-tab"
                >
                    <v-card flat>
                        <v-card-text><h1>feedback tab here</h1></v-card-text>
                    </v-card>
                </v-tab-item>


            </v-tabs-items>

    </v-card>
</template>

<script>
import SubjectAssiggnmentComponent from "./SubjectAssiggnmentComponent";
export default {
    name: "TeacherRocordTabs",
    components: {SubjectAssiggnmentComponent},
    props:['teacher'],
    data(){
        return{
            tab:'classes-tab'
        }
    }
}
</script>

<style scoped>

</style>

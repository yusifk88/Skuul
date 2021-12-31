<template>

    <v-dialog
        :width="!done ? '80%' : '500px'"
        v-model="show"
        persistent
    >
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="6" v-if="!done">
                        <v-card flat height="100%">
                            <v-card-text>
                                <center style="margin-top: 20%;">
                                    <v-img
                                        src="/img/start.svg"
                                        fluid
                                        width="250px"
                                        class="m-5"
                                    ></v-img>
                                    <h1
                                        :class="$store.state.ThemeText"
                                        class="mt-5 font-weight-light"
                                    >Hello {{ $store.state.user.first_name }}</h1>

                                    <h3 class="font-weight-light mt-5" :class="$store.state.ThemeText" >Let's get you up and running</h3>
                                    <h1
                                        :class="$store.state.ThemeText"
                                        class="mt-5 font-weight-light"
                                    >Setup your Skuul to continue</h1>

                                </center>
                            </v-card-text>
                        </v-card>


                    </v-col>
                    <v-col :cols="done ? 12 : 6">
                        <v-stepper v-model="step" style="box-shadow: none !important;">
                            <v-stepper-items style="box-shadow: none !important;">

                                <v-stepper-content step="1">
                                    <new-school-component
                                        @schoolCreated="school_created"
                                    ></new-school-component>
                                </v-stepper-content>

                                <v-stepper-content step="2">

                                    <center>

                                        <h3 :class="$store.state.ThemeText" class="font-weight-light">One more thing,
                                            {{ $store.state.user.first_name }}</h3>
                                        <h2 :class="$store.state.ThemeText" class="font-weight-light mb-5">Setup how you compute academic
                                            records</h2>

                                    </center>

                                    <settings-component v-if="school"
                                                        :settings="school.settings"
                                                        @settingsUpdated="step=3;done=true"
                                    ></settings-component>

                                </v-stepper-content>
                                <v-stepper-content step="3">
                                    <center>
                                        <h1 class="m-4 mt-15 font-weight-light teal--text">Congratulations🎉🎉🎉🎉🎉🎉</h1>
                                        <h3 :class="$store.state.ThemeText" class="font-weight-light">You are all set to get started</h3>
                                        <v-btn
                                            class="mt-5"
                                            :color="$store.state.app.ThemeColor"
                                            rounded
                                            text
                                            block
                                            large
                                            depressed

                                            @click="finish"
                                        >Go to {{ $store.state.AppName }} !
                                        </v-btn>
                                    </center>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>

                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import NewSchoolComponent from "./NewSchoolComponent";
import SettingsComponent from "./SettingsComponent";

export default {
    name: "GetStartedComponent",
    components: {SettingsComponent, NewSchoolComponent},
    data() {
        return {
            show: true,
            step: 1,
            school: null,
            done:false
        }
    },
    methods: {
        school_created(school) {
            this.step = 2;
            this.school = school;
        },
        finish(){
            window.location.reload();
        }
    }
}
</script>

<style scoped>

</style>

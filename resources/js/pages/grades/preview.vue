<template>
<span>
    <title-bar-component :title="title" :show-add-btn="false"></title-bar-component>

    <v-row>
        <v-col cols="12" sm="6" class="mx-auto">
            <v-row>
                <v-col cols="6">
                    <v-card flat>
                        <v-card-text class="text-center">
                            <v-icon x-large>mdi-account-multiple-outline</v-icon>
                            <h1 class="mb-0 pb-0 black--text font-weight-light">{{ grade ? grade.students : 0 }}</h1>
                            <small>Students</small>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card flat>
                        <v-card-text class="text-center">
                            <v-icon x-large>mdi-home-outline</v-icon>
                            <h1 class="mb-0 pb-0 black--text font-weight-light">{{ grade ? grade.classes : 0 }}</h1>
                            <small>Classes</small>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-skeleton-loader type="card" v-if="!grade"></v-skeleton-loader>
                    <v-card flat v-else>
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn color="red" text small rounded>Delete</v-btn>
                            <v-btn :color="$store.state.app.ThemeColor" text small rounded @click="showEdit=true">Edit</v-btn>
                        </v-card-title>
                        <v-card-text>
                            <h3 class="font-weight-light mb-0">{{ grade.name }}</h3>
                            <small>Name</small>
                          <h3 class="font-weight-light mb-0 mt-3">{{
                                  grade.description ? grade.description : "N/A"
                              }}</h3>
                            <small>Description</small>

                            <h3 class="font-weight-light mb-0 mt-3">{{ grade.created_at | human_date }}</h3>
                            <small>Created At</small>

                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>



            <v-row>
                <v-col cols="12">

                <v-skeleton-loader type="lita-item@10" v-if="!classes"></v-skeleton-loader>
                <v-card flat v-else>
                    <v-card-title class="font-weight-light">
                        Classes in {{grade ? grade.name : "N/A"}}
                    </v-card-title>
                    <v-card-text>
                        <v-list v-if="classes.length">
                            <v-list-item v-for="item in classes" :key="item.id" :to="'/classes/'+item.id">
                                <v-list-item-content>

                                <v-list-item-title>{{item.name}}</v-list-item-title>
                                <v-list-item-subtitle>Created At: {{item.created_at | human_date}}</v-list-item-subtitle>
                                </v-list-item-content>
  <v-list-item-action-text>
                            <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action-text>

                            </v-list-item>
                        </v-list>
                        <no-records-component v-else-if="grade" :title="'No classes found in '+grade.name" description="consider creating some classes in this grade"></no-records-component>

                    </v-card-text>
                </v-card>
                </v-col>

            </v-row>
        </v-col>

    </v-row>


    <v-dialog width="500px" v-model="showEdit" persistent>
        <new-grade :edit="true" :grade="grade" @closed="showEdit=false" @created="g=>grade=g"></new-grade>
    </v-dialog>
</span>


</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NoRecordsComponent from "../../components/NoRecordsComponent";
import NewGrade from "../../components/NewGrade";

export default {
    name: "preview",
    components: {NewGrade, NoRecordsComponent, TitleBarComponent},
    data() {
        return {
            grade: null,
            classes: [],
            teachers: [],
            showEdit:false
        }
    },
    computed: {
        title() {
            return this.grade ? "Grade: " + this.grade.name : " Grade: "
        }
    },
    methods: {
        getClasses() {
            axios.get("/grade/" + this.$route.params.id + "/classes")
                .then(res => {
                    this.classes = res.data.data;
                })
        },
        getGrade() {
            axios.get("/grade/" + this.$route.params.id)

                .then(res => {
                    this.grade = res.data.data;
                })

        }
    },
    mounted() {
        this.getGrade();
        this.getClasses();
    }
}
</script>

<style scoped>

</style>

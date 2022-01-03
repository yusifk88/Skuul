<template>
<span>
    <v-row>
        <v-col cols="12" sm="3" offset="9">
            <v-btn
                :color="$store.state.app.ThemeColor"
                rounded
                depressed
                dark
                @click="AddDialog=true"

            >Assign. New</v-btn>
        </v-col>
    </v-row>
    <v-simple-table>
        <thead>
        <tr>
            <th>Subject</th>
            <th>Class</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="assignment in assignments"
            :key="assignment.id"
        >
            <td>

                <v-btn
                    class="pa-0"
                    text
                    :color="$store.state.app.ThemeColor"
                    small
                    :to="'/subjects/'+assignment.subject_id"
                    target="_blank"
                >
                {{assignment.subject.name}} <v-icon x-small>mdi-arrow-top-right</v-icon>
                </v-btn>

            </td>
            <td>
            <v-btn
                class="pa-0"
                text
                :color="$store.state.app.ThemeColor"
                small
                :to="'/classes/'+assignment.class_id"
                target="_blank"
            >

                {{assignment.class.name}} <v-icon x-small>mdi-arrow-top-right</v-icon>
            </v-btn>

            </td>

            <td>

<!--                <v-btn -->
<!--                    :color="$store.state.app.ThemeColor" -->
<!--                    small -->
<!--                    text-->
<!--                >Edit</v-btn>-->

                <v-btn
                    color="red"
                    text
                    small
                    class="pa-0"
                    @click="SelectedAssignment=assignment; detach_warning_dialog=true;"
                >Detach</v-btn>
            </td>
        </tr>

        </tbody>
    </v-simple-table>

    <v-dialog v-model="AddDialog" persistent width="500px">
        <v-card>
            <v-card-title
                class="font-weight-light"
                :class="$store.state.app.ThemeText">Assign subject and claas to teacher</v-card-title>

            <v-card-text>
                <v-form ref="assign_form">
                    <subject-selector-component @selected="sub=>subject_id=sub.id"></subject-selector-component>
                    <class-selctor @selected="clsID=>class_id=clsID"></class-selctor>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="AddDialog=false">Cancel</v-btn>
                <v-btn :loading="progress" @click="assign" text :color="$store.state.app.ThemeColor">Assign.</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog width="400px" v-model="detach_warning_dialog">
        <v-card>
            <v-card-title class="font-weight-light">Confirm detach subject assignment</v-card-title>
            <v-card-text>
                <h4 class="font-weight-light">DO you want to detach this subject and class from this teacher ?</h4>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="detach_warning_dialog=false">cancel</v-btn>
                <v-btn
                    :loading="detaching"
                    text
                    color="red"
                    @click="detach"

                >Detach</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</span>
</template>

<script>
import ClassSelctor from "./ClassSelctor";
import SubjectSelectorComponent from "./SubjectSelectorComponent";

export default {
    components: {SubjectSelectorComponent, ClassSelctor},
    props: ['teacher'],
    name: "SubjectAssiggnmentComponent",
    data() {
        return {
            AddDialog: false,
            subject_id: null,
            class_id: null,
            progress: false,
            getting: false,
            assignments: [],
            SelectedAssignment:null,
            detach_warning_dialog:false,
            detaching:false
        }
    },
    methods: {
        detach(){

            this.detaching=false;
            axios.delete('/teacher/detach/subject/assignment/'+this.SelectedAssignment.id)
                .then(res=>{
                    this.detaching=false;
                    this.GetAssignments();
                    this.detach_warning_dialog=false;
                })
            .catch(error=>{
                this.detaching=false;
            })

        },
        assign() {
            if (this.$refs.assign_form.validate()) {
                this.progress = true;
                const formData = new FormData();
                formData.append('class_id', this.class_id);
                formData.append('subject_id', this.subject_id);
                axios.post('/teacher/' + this.teacher.id + "/assign/subject", formData)
                    .then(res => {
                        this.progress = false;
                        this.GetAssignments();
                    })
                    .catch(error => {
                        this.progress = false;
                    })
            }
        },
        GetAssignments() {
            this.getting = false;
            axios.get('/teacher/' + this.teacher.id + '/subject/assignments')
                .then(res => {

                    this.assignments = res.data.data;
                    this.getting = false;

                })
                .catch(error => {
                    this.getting = false;
                })

        }
    },
    mounted() {
        this.GetAssignments();
    }
}
</script>

<style scoped>

</style>

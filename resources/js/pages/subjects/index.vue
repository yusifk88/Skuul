<template>
<span>
    <title-bar-component
        add-label="Create Subject"
        @create="b=>NewSUbject=b"
    ></title-bar-component>

    <v-row>
        <v-col cols="12" sm="6" class="mx-auto">
            <v-skeleton-loader
                type="list-item@10"
                v-if="progress"
            ></v-skeleton-loader>
            <v-list v-else>
                <v-list-item
                    v-for="subject in subjects"
                    :key="subject.id"
                    two-line
                    :to="'/subjects/'+subject.id"
                    class="border-bottom border-1"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{subject.name}}</v-list-item-title>
                        <v-list-item-subtitle v-if="subject.description">{{subject.description}}</v-list-item-subtitle>
                        <v-list-item-subtitle><strong>Type:</strong>{{subject.type}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>


    <v-dialog
        width="500px"
        :fullscreen="$vuetify.breakpoint.mobile"
        v-model="NewSUbject"
        persistent
    >
        <new-subject
            @closed="NewSUbject=false"
            @created="subjectCreated"
        ></new-subject>

    </v-dialog>
</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewSubject from "../../components/NewSubject";

export default {
    name: "index",
    components: {NewSubject, TitleBarComponent},
    data() {
        return {
            NewSUbject: false,
            subjects: [],
            progress: false
        }
    },
    methods: {
        getSubjects() {
            this.progress = true;
            axios.get('/subjects')
                .then(res => {
                    this.subjects = res.data.data;
                    this.progress = false;
                })
                .catch(error => {
                    this.progress = false;
                })

        },
        subjectCreated(subject) {
            this.getSubjects();
        }
    },
    mounted() {
        this.getSubjects();
    }
}
</script>

<style scoped>

</style>

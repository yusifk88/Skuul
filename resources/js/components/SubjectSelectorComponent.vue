<template>
    <v-autocomplete
        :loading="progress"
        :items="subjects"
        :item-color="$store.state.app.ThemeColor"
        item-text="name"
        item-value="id"
        filled
        :color="$store.state.app.ThemeColor"
        outlined
        label="Subject"
        :rules="$store.state.requiredRules"
        v-model="subject"
        @change="$emit('selected',subject)"
        return-object
    >

        <template v-slot:prepend-item>
            <v-btn @click="AddDialog=true" text :color="$store.state.app.ThemeColor" block>Create New Subject</v-btn>

            <v-dialog width="500px" v-model="AddDialog" >
                <new-subject
                    @closed="AddDialog=false"
                    @created="SubjectCreated"
                ></new-subject>
            </v-dialog>
        </template>

    </v-autocomplete>
</template>

<script>
import NewSubject from "./NewSubject";
export default {
    name: "SubjectSelectorComponent",
    components: {NewSubject},
    data() {
        return {
            subjects: [],
            progress: false,
            subject:null,
            AddDialog:false
        }
    },
    methods: {
        getSubjects() {
            this.progress = true;
            axios.get('/subjects')
                .then(res => {
                    this.subjects = res.data.data;
                    this.progress=false;
                })
                .catch(error => {
                    this.progress = false;
                })
        },
        SubjectCreated(subject){
            this.subjects.unshift(subject);
            this.subject = subject;
            this.$emit('selected',subject);
            this.AddDialog=false;

        }
    },
    mounted() {
        this.getSubjects();
    }
}
</script>

<style scoped>

</style>

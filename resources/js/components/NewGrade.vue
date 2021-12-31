<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="grade_form">

                <v-text-field
                    outlined
                    filled
                    :color="$store.state.app.ThemeColor"
                    label="Name*"
                    autofocus
                    v-model="name"
                    :rules="$store.state.requiredRules"
                ></v-text-field>

                <v-textarea
                    outlined
                    filled
                    v-model="description"
                    label="Description"
                    :color="$store.state.app.ThemeColor"
                    auto-grow
                    rows="2"
                ></v-textarea>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="progress" text @click="$emit('closed')">Cancel</v-btn>
            <v-btn :loading="progress" @click="save" text :color="$store.state.app.ThemeColor">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "NewGrade",
    props: ['edit'],
    data() {
        return {
            name: "",
            description: "",
            progress: false
        }
    },
    computed: {
        title() {
            return this.edit ? "Edit Grade" : "Create New Grade/Level"
        }
    },
    methods: {
        done(grade) {
            this.name = "";
            this.description = '';
            this.$emit('created', grade);
            this.$emit('closed');
        },

        save() {
            if (this.$refs.grade_form.validate()) {

                this.progress = true;
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('description', this.description);
                axios.post('/grade', formData)
                    .then(res => {
                        this.progress = false;
                        this.done(res.data.data);
                    })
                    .catch(error => {
                        this.progress = false;
                    })

            }

        }
    }
}
</script>

<style scoped>

</style>

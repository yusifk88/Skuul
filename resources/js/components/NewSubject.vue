<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="subject_form" @keyup.native.enter="save">
                <v-text-field
                    outlined
                    label="Name*"
                    filled
                    :color="$store.state.app.ThemeColor"
                    v-model="name"
                    autofocus
                    :rules="$store.state.requiredRules"
                ></v-text-field>
                <v-select
                    outlined
                    filled
                    v-model="type"
                    label="Type*"
                    :items="types"
                    :color="$store.state.app.ThemeColor"
                    item-color="teal"
                    :rules="$store.state.requiredRules"

                >
                </v-select>
                <v-textarea
                    filled
                    outlined
                    label="Description"
                    :color="$store.state.app.ThemeColor"
                    v-model="description"
                    auto-grow
                    rows="2"
                >

                </v-textarea>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded @click="$emit('closed')" text :disabled="progress">cancel</v-btn>
            <v-btn rounded text :color="$store.state.app.ThemeColor" @click="save" :loading="progress">Save
                {{ edit ? "Changes" : "" }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "NewSubject",
    props: ['edit', "subject"],
    data() {
        return {
            type: 'core',
            name: "",
            description: "",
            progress: false,
            types: [
                {
                    text: "Core Subject",
                    value: "core"
                },
                {
                    text: "Elective Subject",
                    value: "elective"
                }
            ]
        }
    },
    computed: {
        title() {
            return this.edit ? "Edit subject" : "Create new subject";
        }
    },
    watch: {
        subject() {

            if (this.edit) {

                this.name = this.subject.name;
                this.description = this.subject.description;
                this.type = this.subject.type;
            }

        }
    },
    methods: {
        done(subject) {
            if (!this.edit) {
                this.name = '';
                this.description = '';

            }
            this.$emit('created', subject);
            this.$emit('closed');
        },
        save() {

            if (this.$refs.subject_form.validate()) {

                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('description', this.description);
                formData.append('type', this.type);
                const url = this.edit ? "/subject/" + this.subject.id : "/subject";

                axios.post(url, formData)
                    .then(res => {
                        this.progress = false;
                        this.done(res.data.data);
                    })
                    .catch(error => {
                        this.progress = false;
                    })
            }

        }
    },
    mounted() {
        if (this.edit) {

            this.name = this.subject.name;
            this.description = this.subject.description;
            this.type = this.subject.type;
        }
    }
}
</script>

<style scoped>

</style>

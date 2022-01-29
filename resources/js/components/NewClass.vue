<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="class_form">
                <v-text-field
                    v-model="name"
                    outlined
                    :color="$store.state.app.ThemeColor"
                    filled
                    label="Class Name *"
                    autofocus
                    :rules="$store.state.requiredRules"
                ></v-text-field>

                <grade-selector
                    @selected="id=>grade_id=id"
                    :id="grade_id"
                ></grade-selector>

                <v-textarea
                    v-model="description"
                    outlined
                    filled
                    :color="$store.state.app.ThemeColor"
                    label="Description"
                    rows="2"
                    auto-grow

                >

                </v-textarea>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closed')">Cancel</v-btn>
            <v-btn text :color="$store.state.app.ThemeColor" rounded @click="save" :loading="progress">Save
                {{ edit ? "Changes" : "" }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import GradeSelector from "./GradeSelector";

export default {
    name: "NewClass",
    components: {GradeSelector},
    props: ['edit', "defaultClass"],
    data() {
        return {
            name: "",
            description: "",
            grade_id: null,
            progress: false
        }
    },

    computed: {
        title() {
            return this.edit ? "Edit class" : "Create new class";
        }
    },
    watch: {
        defaultClass() {
            this.defaultClass();
        }
    },
    methods: {
        setValues() {
            this.name = this.defaultClass.name;
            this.description = this.defaultClass.description;
            this.grade_id = this.defaultClass.grade_id;
        },
        done(Schoolclass) {
            if (!this.edit) {
                this.name = "";
                this.description = "";
            }

            this.$emit('created', Schoolclass);
            this.$emit('closed');
        },
        save() {
            if (this.$refs.class_form.validate()) {
                this.progress = true;
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('description', this.description);
                formData.append('grade_id', this.grade_id);
                const url = this.edit ? "/class/" + this.defaultClass.id : "/class";

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
            this.setValues();
        }
    }
}
</script>

<style scoped>

</style>

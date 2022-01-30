<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="grade_form" @keyup.native.enter="save">

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
    props: ['edit', 'grade'],
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
        },
        defaultGrade(){
            return this.grade;
        }
    },
    watch:{
        defaultGrade(){
          this.setValues();
      }
    },
    methods: {
        setValues() {
            this.name = this.grade.name;
            this.description = this.grade.description;
            console.log(this.grade)
        },
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
                const url = this.edit ? '/grade/' + this.grade.id : "/grade";
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
        this.setValues();
    }
}
</script>

<style scoped>

</style>

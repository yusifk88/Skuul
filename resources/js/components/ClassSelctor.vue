<template>
    <v-autocomplete
        outlined
        :color="$store.state.app.ThemeColor"
        filled
        label="Class"
        :rules="$store.state.requiredRules"
        :items="classes"
        v-model="class_id"
        item-color="teal"
        item-value="id"
        item-text="name"
        :loading="progress"
        @change="selected"

    >
        <template v-slot:prepend-item>
            <v-btn rounded block color="teal" text @click="NewClass=true">Create new class</v-btn>
            <v-dialog width="500px" v-model="NewClass">
                <new-class @closed="NewClass=false" @created="classCreated"></new-class>
            </v-dialog>
        </template>
        <template v-slot:no-data>
            <span
                class="text--disabled w-100 text-center pa-3">You do not have classes yet, create your first class</span>
        </template>


    </v-autocomplete>
</template>

<script>
import NewClass from "./NewClass";

export default {
    name: "ClassSelctor",
    components: {NewClass},
    data() {
        return {
            classes: [],
            progress: false,
            class_id: null,
            NewClass: false
        }
    },
    methods: {
        classCreated(cls) {
            this.classes.unshift(cls);
            this.class_id = cls.id;
            this.selected();
        },
        selected() {

            this.$emit('selected', this.class_id);

        },
        getClasses() {
            this.progress = false;
            axios.get('/classes')
                .then(res => {
                    this.classes = res.data.data;
                    this.progress = false;
                })
                .catch(error => {
                    this.progress = false;
                })

        }
    },
    mounted() {
        this.getClasses();
    }
}
</script>

<style scoped>

</style>

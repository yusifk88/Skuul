<template>

    <span>

    <v-menu transition="scale-transition">
        <template v-slot:activator="{on,attr}">
            <v-btn
                icon
                large
                depressed
                :color="$store.state.app.ThemeColor"
                v-on="on"
                v-bind="attr"
            >
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item :to="'/students/'+student.id">
                <v-list-item-title>
                    Preview
                </v-list-item-title>

            </v-list-item>
            <v-list-item @click="showEdit=true">
                <v-list-item-title>
                    Edit
                </v-list-item-title>

            </v-list-item>
            <v-list-item>

                <v-list-item-title class="orange--text">
                    Withdraw/Deactivate
                </v-list-item-title>
            </v-list-item>
            <v-list-item color="red">
                <v-list-item-title class="red--text">
                    Delete
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
<v-dialog scrollable persistent width="40%" v-model="showEdit">
    <new-student @created="done" :student="student" :edit="true" @closed="showEdit=false"></new-student>
</v-dialog>
            </span>

</template>

<script>
import NewStudent from "./NewStudent";
export default {
    name: "StudentMenu",
    components: {NewStudent},
    props:['student'],
    data(){
        return{
            showEdit:false
        }
    },
    methods:{
        done(student){
            this.$emit("edited",student);
        }
    }
}
</script>

<style scoped>

</style>

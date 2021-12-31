<template>
    <span>

<v-menu transition="scale-transition">
    <template v-slot:activator="{on,attr}">
        <v-btn
            icon
            :color="$store.state.app.ThemeColor"
            v-on="on"
            v-bind="attr"
        ><v-icon>mdi-dots-horizontal</v-icon></v-btn>
    </template>
    <v-list>

        <v-list-item
            :to="'/teachers/'+teacher.id"
        >
            <v-list-item-title>Preview</v-list-item-title>
        </v-list-item>

        <v-list-item @click="ShowEditDialog=true">
            <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>

        <v-list-item>
            <v-list-item-title>Manage Assignments</v-list-item-title>
        </v-list-item>

        <v-list-item>
            <v-list-item-title class="red--text">Delete</v-list-item-title>
        </v-list-item>


    </v-list>


</v-menu>

          <v-dialog

              v-model="ShowEditDialog"
              width="40%"
              :fullscreen="$vuetify.breakpoint.mobile"
              persistent
              scrollable
          >
        <new-teacher
            :edit="true"
            :teacher="teacher"
            :id="teacher.id"
            @closed="ShowEditDialog=false"
            @saved="saved"
        ></new-teacher>

    </v-dialog>

            </span>

</template>

<script>
import NewTeacher from "./NewTeacher";
export default {
    components: {NewTeacher},
    props:['teacher'],
    name: "TeacherMenuComponent",
    data(){
        return{
            ShowEditDialog:false
        }
    },
    methods:{
        saved(teacher){
            this.$emit("updated",teacher);
        }
    }
}
</script>

<style scoped>

</style>

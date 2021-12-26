<template>
<span>
    <title-bar-component
        add-label="Create new teacher"
        @create="b=>NewTeacher=b"
    ></title-bar-component>

    <v-dialog
        width="40%"
        :fullscreen="$vuetify.breakpoint.mobile"
        v-model="NewTeacher"
        persistent
    >
        <new-teacher></new-teacher>
    </v-dialog>
</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewTeacher from "../../components/NewTeacher";

export default {
    name: "index",
    components: {NewTeacher, TitleBarComponent},
    data() {
        return {

            NewTeacher: false
        }
    }
}
</script>

<style scoped>

</style>

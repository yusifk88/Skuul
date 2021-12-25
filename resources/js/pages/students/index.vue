<template>
<span>
<title-bar-component
    @create="b=>NewStudent=b"
></title-bar-component>


    <v-dialog
        persistent
        width="50%"
        v-model="NewStudent"
        scrollable
    >
        <new-student @closed="NewStudent=false"></new-student>
    </v-dialog>

</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewStudent from "../../components/NewStudent";
export default {
    name: "index",
    components: {NewStudent, TitleBarComponent},
    data(){
        return{
            NewStudent:false
        }
    }
}
</script>

<style scoped>

</style>

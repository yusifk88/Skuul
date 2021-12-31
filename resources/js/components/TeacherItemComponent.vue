<template>
    <v-list-item

        three-line
        class="border-bottom"
        link
    >
        <v-list-item-avatar>
            <v-img src="/img/photo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>
            <v-btn
                :to="'/teachers/'+teacher.id"
                class="pa-0"
                text
                :color="$store.state.app.ThemeColor">
                {{teacher.first_name}} {{teacher.last_name}} {{teacher.other_names}}

            </v-btn>

            </v-list-item-title>
            <v-list-item-subtitle>
                <strong>Phone Number: </strong>{{teacher.phone_number}}
                <strong>Gender: </strong>{{teacher.gender==='F' ? 'Female' : 'Male'}}

                <span v-if="teacher.rank">
                            <strong>Rank: </strong>{{teacher.rank}}

                           </span>
            </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
            <teacher-menu-component
                :teacher="teacher"
                @updated="updated"
            ></teacher-menu-component>
        </v-list-item-action>

    </v-list-item>

</template>

<script>
import TeacherMenuComponent from "./TeacherMenuComponent";
export default {
    components: {TeacherMenuComponent},
    props:['teacher'],
    name: "TeacherItemComponent",
    methods:{
        updated(teacher){
            this.$emit('updated',teacher);
        }
    }
}
</script>

<style scoped>

</style>

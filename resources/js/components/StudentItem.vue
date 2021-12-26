<template>
    <v-list-item

        link
        two-line
        style="border-bottom: 1px solid rgba(128,128,128,0.07)"

    >
        <v-list-item-avatar>
            <v-img
                :src="student.photo_url"
            ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>

                <v-btn text color="teal" rounded class="pa-0" :to="'/students/'+student.id">
                {{student.first_name}} {{student.last_name}} {{student.other_names}}
                </v-btn>
                <v-chip x-small color="green lighten-5 green--text"
                        v-if="student.residential_status==='day'"
                >Day Student</v-chip>
                <v-chip x-small color="orange lighten-5 orange--text" v-else>Boarding Student</v-chip>


                    <v-chip
                        color="green lighten-5 green--text"
                        x-small
                        v-if="student.active"
                    >Active<v-icon x-small>mdi-check</v-icon></v-chip>


            </v-list-item-title>
            <v-list-item-subtitle>
                <strong>Gender:</strong>{{student.gender==='M' ? 'Male' : 'Female'}}
                <strong>Current Class:</strong>{{student.student_class.name}}
                <strong>Address:</strong>{{student.address}}
            </v-list-item-subtitle>

            <v-list-item-subtitle>
                <strong>Guardian Name:</strong>{{student.guardian_first_name}} {{student.guardian_last_name}}
                <strong>Guardian Phone Number:</strong>{{student.guardian_phone_number}}
                <strong>Guardian Email:</strong>{{student.guardian_email}}
            </v-list-item-subtitle>


        </v-list-item-content>
        <v-list-item-action>

            <student-menu :student="student"></student-menu>
        </v-list-item-action>

    </v-list-item>
</template>

<script>
import StudentMenu from "./StudentMenu";
export default {
    name: "StudentItem",
    components: {StudentMenu},
    props:['student']
}
</script>

<style scoped>

</style>

<template>
<v-card>
    <v-card-title class="font-weight-light teal--text">{{title}}</v-card-title>
    <v-card-text>
        <v-form>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                        outlined
                        filled
                        color="teal"
                        label="First Name*"
                        :rules="$store.state.requiredRules"
                        autofocus
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        outlined
                        filled
                        color="teal"
                        label="last Name*"
                        :rules="$store.state.requiredRules"
                    ></v-text-field>
                </v-col>

            </v-row>


            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                        outlined
                        filled
                        color="teal"
                        label="other Names"
                        autofocus
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        outlined
                        filled
                        color="teal"
                        label="Date of birth"
                        :rules="$store.state.requiredRules"
                    ></v-text-field>
                </v-col>

            </v-row>

            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                        outlined
                        filled
                        color="teal"
                        label="Rank"
                        autofocus
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        outlined
                        filled
                        color="teal"
                        label="Date of birth"
                        :rules="$store.state.requiredRules"
                    ></v-text-field>
                </v-col>

            </v-row>

        </v-form>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    name: "NewTeacher",
    props:['edit','id'],
    computed:{
        title(){
            return this.edit ?  "Edit teacher" : "Create new teacher";
        }
    }
}
</script>

<style scoped>

</style>

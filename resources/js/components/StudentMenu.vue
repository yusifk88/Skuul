<template>

    <v-menu transition="scale-transition">
        <template v-slot:activator="{on,attr}">
            <v-btn
                icon
                large
                depressed
                color="teal"
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
            <v-list-item>
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
</template>

<script>
export default {
    name: "StudentMenu",
    props:['student']
}
</script>

<style scoped>

</style>

<template>
<v-snackbar
    color="green"
    dark
    v-model="$store.state.flashSuccess"
    timeout="6000"
    absolute
    app
    top
    right
    tile
    transition="slide-x-reverse-transition"
>
    {{$store.state.successMessage}}
    <v-icon>mdi-check-circle</v-icon>
    <template v-slot:action="{ attrs }">
        <v-btn
            text
            dark
            v-bind="attrs"
            @click="$store.state.flashSuccess = false"
        >
            Okay
        </v-btn>
    </template>
</v-snackbar>
</template>

<script>
export default {
    name: "SuccessComponent",

}
</script>

<style scoped>

</style>

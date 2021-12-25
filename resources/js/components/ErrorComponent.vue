<template>
    <v-snackbar
        color="red"
        v-if="$store.state.errors"
        v-model="$store.state.flashErro"
        timeout="9000"
        absolute
        app
        top
        right
        text
        tile
        transition="slide-x-reverse-transition"
    >

        <h3>{{$store.state.errors.message}}</h3>
            <ul
                v-if="$store.state.errors && $store.state.errors.errors"
                v-for="key in keys"
                :key="key"
            >
                <li>{{$store.state.errors.errors[key][0]}}</li>
            </ul>

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                dark
                v-bind="attrs"
                color="red"
                @click="$store.state.flashErro = false"
                rounded
            >
                Okay
            </v-btn>
        </template>
    </v-snackbar>

</template>

<script>
export default {
    name: "ErrorComponent",
    computed:{
        keys(){
            return this.$store.state.errors && this.$store.state.errors.errors ?Object.keys(this.$store.state.errors.errors) : [];

        }
    }
}
</script>

<style scoped>

</style>

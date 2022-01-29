<template>
<span class="w-100 text-center">
    <center>
<v-img width="200px" src="/img/empty.svg"></v-img>
    <h2 class="font-weight-light">{{title}}</h2>
    <small class="text--disabled">{{description}}</small>
    </center>

</span>
</template>

<script>
export default {
    name: "NoRecordsComponent",
    props: {
        title: {
            type: String,
            default: "No record found"
        },
        description: {
            type: String,
            default: "We could not find anything on this page"
        }
    }
}
</script>

<style scoped>

</style>

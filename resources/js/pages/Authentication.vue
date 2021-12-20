<template>
<v-row>
    <v-col cols="12" sm="8" class="mx-auto">
        <v-container>

        <v-card flat tile>

            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-card-text class="text-center">
                        <v-img src="/img/students.svg"></v-img>
                        <h1
                            class="mt-5 teal--text font-weight-light"
                        >Welcome to Skull</h1>
                        <h3 class="teal--text font-weight-light">
                            All your students/administration information and more  in the cloud...
                        </h3>
                    </v-card-text>

                </v-col>
                <v-col cols="12" sm="6">
                    <v-card-text>
                        <router-view></router-view>

                    </v-card-text>


                </v-col>

            </v-row>

        </v-card>
        </v-container>


    </v-col>
    <bottom-design></bottom-design>
</v-row>
</template>

<script>
import BottomDesign from "../components/BottomDesign";
export default {
    name: "Authentication",
    components: {BottomDesign},
    mounted() {
    }
}
</script>

<style scoped>

</style>

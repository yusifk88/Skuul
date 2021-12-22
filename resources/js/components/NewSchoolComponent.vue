<template>

    <v-form>
        <v-row dense>
            <v-col cols="4">
                <photo-selector
                    @fileSelected="setPhoto"
                    @imageRemoved="crest=null"
                ></photo-selector>
                <strong>Select School Crest</strong>
            </v-col>

            <v-col cols="12">

                <v-text-field
                    label="Name of school"
                    filled
                    color="teal"
                    outlined
                    v-model="name"
                    :rules="$store.state.requiredRules"
                ></v-text-field>

                <v-text-field
                    type="tel"
                    label="School Tel. Number"
                    filled
                    color="teal"
                    outlined
                    v-model="phone_number"
                ></v-text-field>

                <v-text-field
                    type="email"
                    label="School Email Address"
                    filled
                    color="teal"
                    outlined
                    v-model="email"
                ></v-text-field>


                <v-textarea
                    label="Address"
                    filled
                    color="teal"
                    outlined
                    rows="2"
                    auto-grow
                    v-model="address"
                ></v-textarea>
                <v-btn
                    block
                    color="teal"
                    rounded
                    large
                    depressed
                    dark
                    @click="saveSchool"
                    :loading="progress"
                >Create School
                </v-btn>
            </v-col>

        </v-row>

    </v-form>

</template>

<script>
import PhotoSelector from "./PhotoSelector";

export default {
    name: "NewSchoolComponent",
    components: {PhotoSelector},
    data() {
        return {
            name: "",
            phone_number: "",
            email: "",
            address: "",
            crest: null,
            progress: false

        }
    },
    methods: {
        setPhoto(photo) {
            this.crest = photo;
        },
        saveSchool() {
            this.progress = true;
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('address', this.address);
            formData.append('email', this.email);
            formData.append('phone_number', this.phone_number);
            formData.append('crest', this.crest);

            axios.post('/school', formData)
                .then(res => {

                    this.$emit('schoolCreated', res.data.data);
                    this.progress = false;

                })
                .catch(error => {
                    this.progress = false;
                })
        }
    }
}
</script>

<style scoped>

</style>

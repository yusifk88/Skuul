<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="student_form">
                <v-row>
                    <v-col cols="12" sm="3">
                        <photo-selector
                            preview="/img/photo.png"
                            @fileSelected="file=>photo=file"
                        ></photo-selector>
                        <strong>Student Photo</strong>
                    </v-col>
                </v-row>
                <v-row dense>

                    <v-col cols="12">
                        <v-subheader>Personal Information</v-subheader>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="first_name"
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
                            v-model="last_name"
                            outlined
                            filled
                            color="teal"
                            label="Last Name*"
                            :rules="$store.state.requiredRules"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="other_names"
                            outlined
                            filled
                            color="teal"
                            label="Other Names"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-menu
                            v-model="dob_menu"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                            :close-on-content-click="false"
                        >

                            <template v-slot:activator="{on,atttrs}">

                                <v-text-field
                                    outlined
                                    filled
                                    color="teal"
                                    label="Date of birth*"
                                    v-on="on"
                                    v-bind="atttrs"
                                    v-model="dob"
                                    readonly
                                    :rules="$store.state.requiredRules"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                color="teal"
                                no-title
                                @input="dob_menu=false"
                                v-model="dob"

                            >

                            </v-date-picker>
                        </v-menu>

                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-select
                            outlined
                            filled
                            color="teal"
                            item-color="teal"
                            label="Gender *"
                            :items="genders"
                            v-model="gender"
                            :rules="$store.state.requiredRules"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-textarea
                            v-model="address"
                            outlined
                            filled
                            color="teal"
                            label="Residential Address"
                            rows="2"
                            auto-grow
                        ></v-textarea>
                    </v-col>

                    <v-col cols="12">
                        <v-subheader>Academic Information</v-subheader>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
                            label="Previous School"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <class-selctor @selected="id=>class_id=id"></class-selctor>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-select
                            outlined
                            filled
                            color="teal"
                            label="Residence Type*"
                            :items="ResidentialStatuses"
                            v-model="residential_status"
                            :rules="$store.state.requiredRules"
                            item-color="teal"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-menu
                            v-model="date_menu"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                            :close-on-content-click="false"
                        >

                            <template v-slot:activator="{on,atttrs}">

                                <v-text-field
                                    outlined
                                    filled
                                    color="teal"
                                    label="Date admitted*"
                                    v-on="on"
                                    v-bind="atttrs"
                                    v-model="admission_date"
                                    @focus="date_menu=true"
                                    readonly
                                    :rules="$store.state.requiredRules"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                color="teal"
                                no-title
                                @input="date_menu=false"
                                v-model="admission_date"
                            >

                            </v-date-picker>
                        </v-menu>

                    </v-col>


                    <v-col cols="12">
                        <v-subheader>Guardian Information</v-subheader>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="guardian_first_name"
                            outlined
                            filled
                            color="teal"
                            label="First Name*"
                            :rules="$store.state.requiredRules"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="guardian_last_name"
                            outlined
                            filled
                            color="teal"
                            label="Last Name*"
                            :rules="$store.state.requiredRules"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="guardian_email"
                            outlined
                            filled
                            type="email"
                            color="teal"
                            label="Email"

                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="guardian_phone_number"
                            outlined
                            filled
                            type="tel"
                            color="teal"
                            label="Phone Number*"
                            :rules="$store.state.requiredRules"
                        ></v-text-field>
                    </v-col>


                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text rounded @click="$emit('closed')">Cancel</v-btn>
            <v-btn text rounded color="teal" :loading="process" @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import PhotoSelector from "./PhotoSelector";
import ClassSelctor from "./ClassSelctor";

export default {
    name: "NewStudent",
    components: {ClassSelctor, PhotoSelector},
    props: ['edit'],
    data() {
        return {
            residential_status: 'day',
            ResidentialStatuses: [
                {
                    value: "day",
                    text: "Day Student"
                },
                {
                    value: "boarding",
                    text: "Boarding Student"
                },

            ],
            genders: [
                {
                    value: "M",
                    text: "Male"
                },
                {
                    value: "F",
                    text: "Female"
                }
            ],
            gender: 'M',
            first_name: "",
            last_name: "",
            other_names: "",
            previous_school: "",
            dob: "",
            admission_date: "",
            dob_menu: false,
            date_menu: false,
            address: "",
            guardian_first_name: "",
            guardian_last_name: "",
            guardian_email: "",
            guardian_phone_number: "",
            class_id: null,
            process: false,
            photo: null
        }
    },
    computed: {
        title() {
            return this.edit ? "Edit student" : "Create New Student";
        },
        today() {
            return dayjs().format('YYYY-MM-DD');
        }
    },
    methods: {
        done(student) {
            this.first_name = "";
            this.last_name = "";
            this.other_names = "";
            this.dob = "";
            this.address = "";
            this.guardian_first_name = "";
            this.guardian_last_name = "";
            this.guardian_email = "";
            this.guardian_phone_number = "";
            this.admission_date = this.today;
            this.$emit('created',student);
            this.$emit('closed');

        },
        save() {
            if (this.$refs.student_form.validate()) {
                this.process = true;
                const formData = new FormData();
                formData.append('first_name', this.first_name);
                formData.append('last_name', this.last_name);
                formData.append('other_names', this.other_names);
                formData.append('gender', this.gender);
                formData.append('previous_school', this.previous_school);
                formData.append('dob', this.dob);
                formData.append('admission_date', this.admission_date);
                formData.append('residential_status', this.residential_status);
                formData.append('address', this.address);
                formData.append('guardian_first_name', this.guardian_first_name);
                formData.append('guardian_last_name', this.guardian_last_name);
                formData.append('guardian_email', this.guardian_email);
                formData.append('guardian_phone_number', this.guardian_phone_number);
                formData.append('class_id', this.class_id);
                formData.append('photo', this.photo);
                axios.post('/student', formData)
                    .then(res => {
                        this.process = false;
                        this.done(res.data.data);
                    })
                    .catch(error => {

                        this.process = false;
                    })
            }

        }

    },
    mounted() {
        this.admission_date = this.today;
    }
}
</script>

<style scoped>

</style>

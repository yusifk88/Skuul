<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="student_form" @keyup.native.enter="save">
                <v-row v-if="!edit">
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
                            :color="$store.state.app.ThemeColor"
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
                            :color="$store.state.app.ThemeColor"
                            label="Last Name*"
                            :rules="$store.state.requiredRules"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="other_names"
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
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
                                    :color="$store.state.app.ThemeColor"
                                    label="Date of birth*"
                                    v-on="on"
                                    v-bind="atttrs"
                                    v-model="dob"
                                    readonly
                                    :rules="$store.state.requiredRules"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                :color="$store.state.app.ThemeColor"
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
                            :color="$store.state.app.ThemeColor"
                            :item-color="$store.state.app.ThemeColor"
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
                            :color="$store.state.app.ThemeColor"
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
                            :color="$store.state.app.ThemeColor"
                            label="Previous School"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <class-selctor @selected="id=>class_id=id" :id="class_id"></class-selctor>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-select
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
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
                                    :color="$store.state.app.ThemeColor"
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
                                :color="$store.state.app.ThemeColor"
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
                            :color="$store.state.app.ThemeColor"
                            label="First Name*"
                            :rules="$store.state.requiredRules"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="guardian_last_name"
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
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
                            :color="$store.state.app.ThemeColor"
                            label="Email"

                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            v-model="guardian_phone_number"
                            outlined
                            filled
                            type="tel"
                            :color="$store.state.app.ThemeColor"
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
            <v-btn text rounded :color="$store.state.app.ThemeColor" :loading="process" @click="save">Save
                {{ edit ? "Changes" : "" }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import PhotoSelector from "./PhotoSelector";
import ClassSelctor from "./ClassSelctor";

export default {
    name: "NewStudent",
    components: {ClassSelctor, PhotoSelector},
    props: ['edit', "student"],
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

        setValues() {

            this.first_name = this.student.first_name;
            this.last_name = this.student.last_name;
            this.other_names = this.student.other_names;
            this.dob = dayjs(this.student.dob).format('YYYY-MM-DD');
            this.address = this.student.address;
            this.guardian_first_name = this.student.guardian_first_name;
            this.guardian_last_name = this.student.guardian_last_name;
            this.guardian_email = this.student.guardian_email;
            this.guardian_phone_number = this.student.guardian_phone_number;
            this.admission_date = dayjs(this.student.admission_date).format('YYYY-MM-DD');
            this.previous_school = this.student.previous_school;
            this.class_id = this.student.class_id;

        },
        done(student) {
            if (!this.edit) {


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
            }

            this.$emit('created', student);
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

                const url = this.edit ? '/student/' + this.student.id : '/student';
                axios.post(url, formData)
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
        if (this.edit) {

            this.setValues();
        }
    }
}
</script>

<style scoped>

</style>

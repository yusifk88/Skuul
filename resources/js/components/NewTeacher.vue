<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="teacher_form" @keyup.native.enter="save">
                <v-row dense>
                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="First Name*"
                            v-model="first_name"
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
                            label="last Name*"
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
                        <v-select
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Gender"

                            :items="genders"
                            v-model="gender"
                            item-color="teal"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-menu
                            transition="scale-transition"
                            v-model="dob_menu"
                            :close-on-content-click="false"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                        >
                            <template v-slot:activator="{on,attr}">
                                <v-text-field
                                    readonly
                                    v-on="on"
                                    v-bind="attr"
                                    outlined
                                    filled
                                    :color="$store.state.app.ThemeColor"
                                    label="Date of birth"
                                    :rules="$store.state.requiredRules"
                                    v-model="dob"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                no-title
                                @input="dob_menu=false"
                                v-model="dob"
                                color="teal"
                            ></v-date-picker>
                        </v-menu>

                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            type="tel"
                            label="Phone Number *"
                            v-model="phone_number"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            type="email"
                            label="Email"
                            v-model="email"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Staff Number"
                            v-model="staff_number"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="National ID Number"
                            v-model="id_number"
                            persistent-hint
                            hint="Social security number or passport number or driver's license, or any identity number "
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-select
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Rank *"
                            :items="ranks"
                            v-model="rank"
                            :rules="$store.state.requiredRules"
                            :item-color="$store.state.app.ThemeColor"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Academic Qualification"
                            v-model="accademic_qualification"
                        ></v-text-field>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Professional Qualification"
                            v-model="professional_qualification"

                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-menu
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                            :close-on-content-click="false"
                            v-model="date_menu2"
                        >
                            <template v-slot:activator="{on,attr}">

                                <v-text-field
                                    outlined
                                    filled
                                    :color="$store.state.app.ThemeColor"
                                    label="Date Appointed"
                                    readonly
                                    v-on="on"
                                    v-model="appointed_date"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                no-title
                                :color="$store.state.app.ThemeColor"
                                v-model="appointed_date"
                                @input="date_menu2=false"
                            ></v-date-picker>
                        </v-menu>

                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-menu
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                            :close-on-content-click="false"
                            v-model="date_menu1"
                        >
                            <template v-slot:activator="{on,attr}">

                                <v-text-field
                                    outlined
                                    filled
                                    :color="$store.state.app.ThemeColor"
                                    label="Date Assumed at Post"
                                    readonly
                                    v-on="on"
                                    v-model="assumed_date"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                no-title
                                :color="$store.state.app.ThemeColor"
                                v-model="assumed_date"
                                @input="date_menu1=false"
                            ></v-date-picker>
                        </v-menu>

                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Bank Name"
                            v-model="bank_name"
                        ></v-text-field>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            :color="$store.state.app.ThemeColor"
                            label="Bank Account Number"
                            v-model="bank_account_number"
                        ></v-text-field>
                    </v-col>

                </v-row>

            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closed')">cancel</v-btn>
            <v-btn @click="save" :color="$store.state.app.ThemeColor" text>Save {{ edit ? "Changes" : '' }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "NewTeacher",
    props: ['edit', 'id', 'teacher'],
    data() {
        return {
            id_number: "",
            first_name: "",
            last_name: "",
            other_names: "",
            dob_menu: false,
            date_menu1: false,
            date_menu2: false,
            assumed_date: dayjs().format('YYYY-MM-DD'),
            accademic_qualification: "",
            professional_qualification: "",
            appointed_date: dayjs().format('YYYY-MM-DD'),
            dob: '',
            bank_name: "",
            bank_account_number: "",
            rank: null,
            staff_number: "",
            email: "",
            phone_number: "",


            genders: [
                {
                    value: 'M',
                    text: "Male"
                },
                {
                    value: 'F',
                    text: "Female"
                }
            ],
            gender: 'F',
            progress: false
        }
    },
    computed: {
        ranks() {
            return this.$store.state.ranks
        },
        title() {
            return this.edit ? "Edit teacher" : "Create new teacher";
        }
    },
    methods: {
        save() {
            if (this.$refs.teacher_form.validate()) {
                this.progress = true;
                const formData = new FormData();
                formData.append('first_name', this.first_name);
                formData.append('last_name', this.last_name);
                formData.append('other_names', this.other_names);
                formData.append('gender', this.gender);
                formData.append('id_number', this.id_number);
                formData.append('academic_qualification', this.accademic_qualification);
                formData.append('professional_qualification', this.professional_qualification);
                formData.append('appointment_date', this.appointed_date);
                formData.append('date_assumed', this.assumed_date);
                formData.append('bank', this.bank_name);
                formData.append('rank', this.rank);
                formData.append('dob', this.dob);
                formData.append('account_number', this.bank_account_number);
                formData.append('email', this.email);
                formData.append('phone_number', this.phone_number);
                formData.append('staff_id', this.staff_number);

                const url = this.edit ? "/teacher/" + this.teacher.id : "teacher";

                axios.post(url, formData)
                    .then(res => {
                        this.done(res.data.data);
                        this.progress = false;
                    })
                    .catch(error => {
                        this.progress = false;
                    })

            }

        },
        done(teacher) {

            const url = "/teachers/" + teacher.id;
            if (!this.edit){

            this.$router.push({path: url})
            }
            this.$emit('closed');
            this.$emit('saved', teacher);
        },
        SetTeacher(teacher) {
            this.first_name = teacher.first_name;
            this.last_name = teacher.last_name;
            this.other_names = teacher.other_names;
            this.gender = teacher.gender;
            this.rank = teacher.rank;
            this.staff_number = teacher.staff_id;
            this.bank_name = teacher.bank;
            this.bank_account_number = teacher.account_number;
            this.phone_number = teacher.phone_number;
            this.id_number = teacher.id_number;
            this.appointed_date = teacher.appointment_date ? dayjs(teacher.appointment_date).format('YYYY-MM-DD') : '';
            this.assumed_date = teacher.date_assumed ? dayjs(teacher.date_assumed).format('YYYY-MM-DD') : '';
            this.email = teacher.email;
            this.dob = teacher.dob ? dayjs(teacher.dob).format('YYYY-MM-DD') : '';
            this.accademic_qualification = teacher.academic_qualification;
            this.professional_qualification = teacher.professional_qualification;

        }
    },
    mounted() {
        if (this.edit && this.teacher) {

            this.SetTeacher(this.teacher);


        }
    }
}
</script>

<style scoped>

</style>

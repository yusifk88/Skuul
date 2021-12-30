<template>
    <v-card>
        <v-card-title class="font-weight-light teal--text">{{ title }}</v-card-title>
        <v-card-text>
            <v-form ref="teacher_form">
                <v-row dense>
                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
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
                            color="teal"
                            label="last Name*"
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
                        <v-select
                            outlined
                            filled
                            color="teal"
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
                                    color="teal"
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
                            color="teal"
                            type="tel"
                            label="Phone Number *"
                            v-model="phone_number"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
                            type="email"
                            label="Email"
                            v-model="email"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
                            label="Staff Number"
                            v-model="staff_number"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
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
                            color="teal"
                            label="Rank *"
                            :items="ranks"
                            v-model="rank"
                            :rules="$store.state.requiredRules"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
                            label="Academic Qualification"
                            v-model="accademic_qualification"
                        ></v-text-field>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
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
                                    color="teal"
                                    label="Date Appointed"
                                    readonly
                                    v-on="on"
                                    v-model="appointed_date"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                no-title
                                color="teal"
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
                                    color="teal"
                                    label="Date Assumed at Post"
                                    readonly
                                    v-on="on"
                                    v-model="assumed_date"
                                ></v-text-field>

                            </template>
                            <v-date-picker
                                no-title
                                color="teal"
                                v-model="assumed_date"
                                @input="date_menu1=false"
                            ></v-date-picker>
                        </v-menu>

                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
                            label="Bank Name"
                            v-model="bank_name"
                        ></v-text-field>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-text-field
                            outlined
                            filled
                            color="teal"
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
            <v-btn @click="save" color="teal" text>Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "NewTeacher",
    props: ['edit', 'id'],
    data() {
        return {
            id_number:"",
            first_name:"",
            last_name:"",
            other_names:"",
            dob_menu: false,
            date_menu1:false,
            date_menu2:false,
            assumed_date:dayjs().format('YYYY-MM-DD'),
            accademic_qualification:"",
            professional_qualification:"",
            appointed_date:dayjs().format('YYYY-MM-DD'),
            dob: '',
            bank_name:"",
            bank_account_number:"",
            rank:null,
            staff_number:"",
            email:"",
            phone_number:"",


            ranks: [
                {
                    value: 'supi',
                    text: "Sup. i"
                },
                {
                    value: 'supii',
                    text: "Sup. ii"
                },
                {
                    value: 'Snr_sup_i',
                    text: "Snr. Sup. i"
                },
                {
                    value: 'Snr_sup_ii',
                    text: "Snr. Sup. ii"
                } ,
                {
                    value: 'asst_dr_i',
                    text: "Asst. Dir. i"
                }
                ,
                {
                    value: 'asst_dr_ii',
                    text: "Asst. Dir. ii"
                },
                {
                    value: 'dr_i',
                    text: "Dir. i"
                },
                {
                    value: 'dr_ii',
                    text: "Dir. ii"
                } ,
                {
                    value: 'other',
                    text: "Other"
                }
            ],
            genders:[
                {
                value:'M',
                text:"Male"
            },
                {
                value:'F',
                text:"Female"
            }
            ],
            gender:'F',
            progress:false
        }
    },
    computed: {
        title() {
            return this.edit ? "Edit teacher" : "Create new teacher";
        }
    },
    methods:{
        save(){
            if (this.$refs.teacher_form.validate()){
                this.progress=true;
                const formData = new FormData();
                formData.append('first_name',this.first_name);
                formData.append('last_name',this.last_name);
                formData.append('other_names',this.other_names);
                formData.append('gender',this.gender);
                formData.append('id_number',this.id_number);
                formData.append('academic_qualification',this.accademic_qualification);
                formData.append('professional_qualification',this.professional_qualification);
                formData.append('appointment_date',this.appointed_date);
                formData.append('date_assumed',this.assumed_date);
                formData.append('bank',this.bank_name);
                formData.append('account_number',this.bank_account_number);
                formData.append('email',this.email);
                formData.append('phone_number',this.phone_number);
                formData.append('staff_id',this.staff_number);

                axios.post('/teacher',formData)
                    .then(res=>{
                        this.done(res.data.data);
                        this.progress=false;
                    })
                .catch(error=>{
                    this.progress=false;
                })

            }

        },
        done(teacher){

            const url = "/teachers/"+teacher.id;
            this.$router.push({path:url})
            this.$emit('closed');
        }
    }
}
</script>

<style scoped>

</style>

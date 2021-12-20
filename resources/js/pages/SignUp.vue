<template>
    <v-form v-model="formValid" ref="signup_form">

        <h2 class="ma-5 font-weight-light teal--text w-100 text-center">
            Signup now for free

        </h2>
        <v-row dense>
            <v-col cols="12">
        <v-text-field
            type="text"
            outlined
            filled
            label="First Name"
            color="teal"
            :rules="requiredRules"
            v-model="first_name"
            flat
        ></v-text-field>
        <v-text-field
            v-model="last_name"
            type="text"
            outlined
            filled
            label="Last Name"
            color="teal"
            :rules="requiredRules"

        ></v-text-field>

        <v-text-field
            v-model="phone_number"
            type="tel"
            outlined
            filled
            label="Phone Number"
            color="teal"
            :rules="requiredRules"

        ></v-text-field>

        <v-text-field
            v-model="email"
            type="Email"
            outlined
            filled
            label="Last Name"
            color="teal"
            :rules="emailRules"

        ></v-text-field>

        <v-text-field
            v-model="password"
            type="password"
            outlined
            filled
            label="Password"
            color="teal"
            :rules="requiredRules"

        ></v-text-field>

        <v-text-field
            v-model="password_confirmation"
            type="password"
            outlined
            filled
            label="Re-enter Password"
            color="teal"
            :rules="requiredRules"

        ></v-text-field>
        <v-btn
            color="teal"
            block
            rounded
            large
            depressed
            :dark="formValid"
            :disabled="!formValid"
            :loading="progress"
            @click="signup"
        >Login</v-btn>
            </v-col>

        </v-row>


        <center>
            <p class="mt-5" style="z-index: 999!important;">Already have an account?
                <v-btn to="/auth/login" text color="teal" small>Login</v-btn></p>

        </center>
    </v-form>
</template>

<script>
export default {
    name: "SignUp",
    data(){
        return{
            first_name:"",
            last_name:"",
            phone_number:"",
            password:"",
            email:"",
            password_confirmation:"",
            formValid:false,
            progress:false,
            requiredRules: [
                v => !!v || 'This field is required'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
        }
    },
    methods:{
        signup(){
            if (this.$refs.signup_form.validate()){
                this.progress=true;
                const formData = new FormData();
                formData.append("first_name",this.first_name);
                formData.append("last_name",this.last_name);
                formData.append("phone_number",this.phone_number);
                formData.append("password",this.password);
                formData.append("email",this.email);
                formData.append("password_confirmation",this.password_confirmation);

                axios.post('/admin/signup',formData)
                    .then(res=>{
                        console.log(res.data);
                        this.progress=false;
                    })

                .catch(error=>{
                    this.progress=false;
                })
            }

        }
    }
}
</script>

<style scoped>

</style>

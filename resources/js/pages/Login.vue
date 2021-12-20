<template>
  <v-form>

      <h2 class="ma-5 font-weight-light teal--text">Log in to your dashboard</h2>
      <v-text-field
          type="email"
            outlined
          filled
          label="E-mail"
          color="teal"
      ></v-text-field>
      <v-text-field
          type="password"
            outlined
          filled
          label="Password"
          color="teal"
      ></v-text-field>
      <v-btn
          color="teal"
          block
          rounded
          large
          depressed
            dark
      >Login</v-btn>

      <center>
          <p class="mt-5">Are you new here?
              <v-btn to="/auth/signup" text color="teal" small>Signup Now!</v-btn></p>

      </center>
  </v-form>

</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>

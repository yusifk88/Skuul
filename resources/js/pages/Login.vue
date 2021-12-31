<template>
  <v-form>

      <h2 class="ma-5 font-weight-light teal--text">Log in to your dashboard</h2>
      <v-text-field
          type="email"
            outlined
          filled
          label="E-mail"
          :color="$store.state.app.ThemeColor"
      ></v-text-field>
      <v-text-field
          type="password"
            outlined
          filled
          label="Password"
          :color="$store.state.app.ThemeColor"
      ></v-text-field>
      <v-btn
          :color="$store.state.app.ThemeColor"
          block
          rounded
          large
          depressed
            dark
      >Login</v-btn>


  </v-form>

</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>

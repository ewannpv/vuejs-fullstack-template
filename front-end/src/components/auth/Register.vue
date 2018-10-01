<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-alert v-if="error"
            :value="true"
            type="error">
          <v-toolbar-title>{{error}}</v-toolbar-title>
          </v-alert>
          <v-toolbar v-else dark color="grey darken-2">
            <v-toolbar-title>Sign up !</v-toolbar-title>
          </v-toolbar>
          <v-form
           @submit.prevent="onRegister"
           autocomplete="off">
          <v-card-text>
              <v-text-field v-model="email" prepend-icon="alternate_email" name="emmail" label="Email" type="email" :rules="emailRules" required></v-text-field>
              <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password" :rules="[checkPassword]" required></v-text-field>
              <v-text-field v-model="confPassword" prepend-icon="lock" name="confPassword" label="Confirm password" type="password" :rules="[checkConfPassword]" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <router-link class='link' :to="{name: 'login'}">Login</router-link>
            <v-spacer></v-spacer>
            <v-btn color="green accent-3" type="submit">Register</v-btn>
          </v-card-actions>
        </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AuthentificationService from '@/services/authentificationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      confPassword: '',
      error: null,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid'
      ]
    }
  },
  watch: {
    email: function (value) {
      this.email = value.toLowerCase()
    }
  },
  computed: {
    checkPassword () {
      return this.password.length < 8 ? 'Password is too short' : true
    },
    checkConfPassword () {
      return this.password !== this.confPassword && this.password.length < 8 ? 'Password do not match' : true
    }
  },
  methods: {
    async onRegister () {
      this.error = null
      this.succes = null
      try {
        const response = await AuthentificationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setSuccessAlert', response.data.succes)
        this.$router.push({
          name: 'login'
        })
      } catch (error) {
        this.password = this.confPassword = ''
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}

</script>

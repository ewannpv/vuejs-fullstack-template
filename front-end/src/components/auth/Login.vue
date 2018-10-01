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
          <v-alert v-if="this.$store.state.successAlert"
            :value="true"
            type="success">
          <v-toolbar-title>{{this.$store.state.successAlert}}</v-toolbar-title>
          </v-alert>
          <v-toolbar v-if="!error && !this.$store.state.successAlert" dark color="grey darken-2">
            <v-toolbar-title>Welcome back !</v-toolbar-title>
          </v-toolbar>
          <v-form @submit.prevent="onLogin">
          <v-card-text>
              <v-text-field v-model="email" prepend-icon="alternate_email" name="emmail" label="Email" type="email" :rules="emailRules" required></v-text-field>
              <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password" :rules="[checkPassword]" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <router-link class='link' :to="{name: 'register'}">Register</router-link>
            <v-spacer></v-spacer>
            <v-btn color="green accent-3" type="submit">Login</v-btn>
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
      error: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
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
    }
  },
  methods: {
    async onLogin () {
      this.error = null
      this.$store.dispatch('setSuccessAlert', null)
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'board'
        })
      } catch (error) {
        this.password = ''
        this.error = error.response.data.error
      }
    }
  },
  beforeDestroy () {
    if (this.$store.state.successAlert) {
      this.$store.dispatch('setSuccessAlert', null)
    }
  }
}

</script>

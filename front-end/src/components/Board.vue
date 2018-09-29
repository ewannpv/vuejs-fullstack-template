<template>
<v-app id="inspire" dark>
  <v-navigation-drawer v-model="drawer" fixed clipped app>
    <v-list dense>
      <v-list-tile @click="pushComponent('board')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="pushComponent('login')">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title
           v-if="!$store.state.isUserLoggedIn"
           @click="pushComponent('login')"
           >Login</v-list-tile-title>
           <v-list-tile-title
            v-if="$store.state.isUserLoggedIn"
            @click="logOut()"
            >Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar clipped-left fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="home">Board</v-toolbar-title>
    <div class="spacer"></div>
    <div class="v-toolbar__items" v-if="!$store.state.isUserLoggedIn">
      <div @click="pushComponent('login')" class="v-btn v-btn--flat v-btn--router theme--dark">
        <div class="v-btn__content">
          <span class="hidden-sm-and-down">Login</span>
        </div>
      </div>
    </div>
    <div class="v-toolbar__items" v-if="!$store.state.isUserLoggedIn">
      <div @click="pushComponent('register')" class="v-btn v-btn--flat v-btn--router theme--dark">
        <div class="v-btn__content">
          <span class="hidden-sm-and-down">Register</span>
        </div>
      </div>
    </div>
    <div class="v-toolbar__items" v-if="$store.state.isUserLoggedIn">
      <div @click="logOut()" class="v-btn v-btn--flat v-btn--router theme--dark">
        <div class="v-btn__content">
          <span class="hidden-sm-and-down">Logout</span>
        </div>
      </div>
    </div>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
      </v-layout>
      <router-link :to="{path: '/login'}"></router-link>
    </v-container>
  </v-content>
  <v-footer app>
    <span class="white--text">&copy; Ewskr0 - 2018</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    pushComponent (component) {
      this.$router.push({
        name: component
      })
    },
    logOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

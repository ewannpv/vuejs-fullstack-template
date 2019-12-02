<template>
  <v-app id="inspire" dark>
    <v-toolbar clipped-left fixed app>
      <v-toolbar-title class="home" @click="pushComponent('board')">Board</v-toolbar-title>
      <div class="spacer"></div>
      <div class="v-toolbar__items">
        <div @click="pushComponent('login')" class="v-btn text">
          <div class="v-btn__content">
            <span class="hidden-sm-and-down">Login</span>
          </div>
      </div>
      </div>
      <div class="v-toolbar__items">
        <div @click="pushComponent('register')" class="v-btn text">
          <div class="v-btn__content">
            <span class="hidden-sm-and-down">Register</span>
          </div>
      </div>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <router-view></router-view>
        </v-layout>
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
  }),
  methods: {
    pushComponent (component) {
      this.$router.push({ name: component })
    }
  }
}
</script>

<style>
.link{
  text-decoration: none;
  color: #00E676;
  font-weight: bold;
}

</style>

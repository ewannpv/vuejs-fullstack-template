import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [VuexPersistedState()],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    successAlert: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setSuccessAlert (state, successAlert) {
      state.successAlert = successAlert
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setSuccessAlert ({ commit }, successAlert) {
      commit('setSuccessAlert', successAlert)
    }
  }
})

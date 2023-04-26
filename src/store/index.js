import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticate: false,
    token: ''
  },
  getters: {
  },
  mutations: {
    onStart(state) {
      let token = localStorage.getItem('token')
      if (token) {
        state.isAuthenticate = true
        state.token = token
      } else {
        state.isAuthenticate = false
        state.token = ''
      }
    },
    login(state, token) {
      if (token) {
        state.isAuthenticate = true
        state.token = token
        localStorage.setItem('token', token)
      } else {
        state.isAuthenticate = false
        state.token = ''
        localStorage.removeItem('token')
      }
    },
    logout(state) {
      state.isAuthenticate = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  modules: {
  }
})

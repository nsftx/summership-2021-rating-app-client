import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {
      numOfEmotions: 3,
      thankYouMsg: 'Thank you for your rating!',
      msgTimeout: 5
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getSettings (state) {
      return state.settings
    }
  }
})

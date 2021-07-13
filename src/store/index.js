import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import emoticons from './modules/emoticons'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    settings,
    emoticons
  }
})

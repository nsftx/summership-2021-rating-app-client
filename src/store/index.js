import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {
      numOfEmotions: 3,
      thankYouMsg: 'Thank you for your rating!',
      msgTimeout: 5
    },
    emoticonsArr: [
      { bgColor: 'rgba(0, 168, 107,1)', imgName: 'emoticon-outline.svg' },
      { bgColor: 'rgba(65, 179, 233,1)', imgName: 'emoticon-happy-outline.svg' },
      { bgColor: 'rgba(122, 122, 122,1)', imgName: 'emoticon-neutral-outline.svg' },
      { bgColor: 'rgba(255, 186, 19,1)', imgName: 'emoticon-sad-outline.svg' },
      { bgColor: 'rgba(249, 88, 90,1)', imgName: 'emoticon-angry-outline.svg' }
    ]
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
    },
    getEmoticonsArr (state) {
      return state.emoticonsArr
    }
  }
})

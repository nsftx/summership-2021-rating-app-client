export default {
  state: {
    settings: {
      numOfEmoticons: null,
      timeout: null,
      msg: null
    }
  },
  getters: {
    getSettings (state) {
      return state.settings
    }
  },
  mutations: {
    setSettings (state, data) {
      state.settings = data
    }
  }
}

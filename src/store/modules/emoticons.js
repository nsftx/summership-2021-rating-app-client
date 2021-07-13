export default {
  state: {
    emoticons: [
      { color: 'rgba(0, 168, 107,1)', name: 'emoticon-outline.svg', type: 'VERY_HAPPY' },
      { color: 'rgba(65, 179, 233,1)', name: 'emoticon-happy-outline.svg', type: 'HAPPY' },
      { color: 'rgba(122, 122, 122,1)', name: 'emoticon-neutral-outline.svg', type: 'MEH' },
      { color: 'rgba(255, 186, 19,1)', name: 'emoticon-sad-outline.svg', type: 'SAD' },
      { color: 'rgba(249, 88, 90,1)', name: 'emoticon-angry-outline.svg', type: 'VERY_SAD' }
    ],
    voted: false
  },
  getters: {
    getEmoticons (state) {
      return state.emoticons
    }
  },
  mutations: {
    userVoted (state) {
      state.voted = !state.voted
    }
  }
}

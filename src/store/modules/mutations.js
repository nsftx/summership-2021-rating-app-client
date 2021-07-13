export default {
  userVoted (state) {
    state.voted = !state.voted
  },
  setSettings (state, data) {
    state.settings = data
  }
}

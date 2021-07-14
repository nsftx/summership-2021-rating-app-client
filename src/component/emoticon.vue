<template>
  <div class="main"
       v-on:click="vote()">
    <div class="left-border"
         :style="{ 'background-color': data.color }">
    </div>
      <img :src="require('../assets/'+ this.data.src)"
           alt="Emoticon"
           :style="{ 'background-color': this.data.color}">
    </div>
</template>
<script>
import { HTTP } from '../API/axios'
export default {
  name: 'Emoticon',
  props: {
    data: Object
  },
  data: function () {
    return {
    }
  },
  computed: {
    timeout () {
      return this.$store.getters.getSettings.timeout
    }
  },
  methods: {
    vote () {
      // Method that is called when user votes his experience.
      // Sending POST request and catching all errors.
      HTTP.post('rating', {
        emojiId: this.data.id
      })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
      // Hiding message view if the message isn't set.
      if (this.$store.state.settings.msg === null) {
        return
      }
      // changing the voted variable in store that is used to switch between rating and msg view.
      this.$store.commit('userVoted')
      // after 5 seconds the view resets to rating.
      setTimeout(function () { this.$store.commit('userVoted') }.bind(this), this.timeout * 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 141px;
  margin: 0 62px 62px 0;
  .left-border{
    height: 100%;
    width: 5px;
    display: inline-block;
    margin-right: -5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  img{
    width: 64px;
    height: 64px;
    padding: 38.5px 62.5px;
    border-radius: 5px;
    opacity: 0.3;
  }
}
</style>

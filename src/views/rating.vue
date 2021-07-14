<template>

    <div class="rating-wrapper">
      <div v-if="!clicked">
        <img class="like-img"
          src="../assets/positive-vote.svg"
          alt="thumbs-up">
        <p>Rate our service!</p>
        <div class="emoticon-wrapper">
          <Emoticon v-bind:data="{color: item.color, src: item.image, id: item.id}"
                    v-for="item in emoticons"
                    v-bind:key="item.id"
                    />
        </div>
      </div>
      <div v-else>
        <img class="check-img"
          src="../assets/check.svg"
          alt="checkmark">
        <p>{{this.message}}</p>
      </div>
    </div>
</template>

<script>
import Emoticon from '../component/emoticon'
import { HTTP } from '../API/axios'
export default {
  name: 'Rating',
  data: function () {
    return {
    }
  },
  components: {
    Emoticon
  },
  computed: {
    message () {
      return this.$store.getters.getSettings.msg
    },
    emoticons () {
      return this.$store.getters.getEmoticons
    },
    clicked () {
      return this.$store.state.voted
    }
  },
  methods: {
  },
  created () {
    HTTP.get('rating/settings')
      .then(response => this.$store.commit('setSettings', response.data))
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
    HTTP.get('emoji')
      .then(response => this.$store.commit('setEmoticons', response.data))
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
  }
}
</script>

<style lang="scss" scoped>

.rating-wrapper {
   margin: 0 auto;
   min-height: 100vh;
   height: 100%;
   width: 70%;
  .like-img {
   display: block;
   margin: 287px auto 0 auto;
  }
  p{
    color: rgba(255,255,255, 0.7);
    font-size: 32px;
    text-align: center;
    font-family: Roboto-Regular, Helvetica;
  }
  .emoticon-wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
 .check-img{
   display: block;
   margin: 477px auto 0 auto;
   width: 52px;
   height: 51px;
 }
 }
</style>

<template>

    <div class="rating-wrapper">
      <div v-if="!clicked">
        <img class="like-img"
          src="../assets/positive-vote.svg">
        <p>Rate our service!</p>
        <div class="emoticon-wrapper">
          <Emoticon v-bind:data="{color: item.color, src: item.name, type: item.type}"
                    v-for="item in emoticons"
                    v-bind:key="item.name"
                    />
        </div>
      </div>
      <div v-else>
        <img class="check-img"
          src="../assets/check.svg">
        <p>{{this.message}}</p>
      </div>
    </div>
</template>

<script>
import Emoticon from '../component/emoticon'
import axios from 'axios'

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
      return this.$store.state.emoticons.voted
    }
  },
  methods: {
  },
  created () {
    axios.get('http://192.168.88.250:8080/api/rating/settings/')
      .then(response => this.$store.commit('setSettings', response.data))
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
   margin: 0 auto;
   margin-top: 287px;
   width: 154px;
   height: 157px;
  }
  p{
    color: rgba(255,255,255, 0.7);
    font-size: 32px;
    text-align: center;
    font-family: Roboto-Regular;
  }
  .emoticon-wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
 .check-img{
   display: block;
   margin: 0 auto;
   margin-top: 477px;
   width: 52px;
   height: 51px;
 }
 }
</style>

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
import axios from 'axios'
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
      this.$store.commit('userVoted')
      axios.post('http://192.168.88.247:8080/api/rating/', {
        emoji_id: this.data.id,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
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

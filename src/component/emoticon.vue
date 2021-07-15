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
export default {
  name: 'Emoticon',
  props: {
    data: Object
  },
  data: function () {
    return {
      timeout: this.data.timeout,
      msg: this.data.msg
    }
  },
  computed: {
  },
  methods: {
    vote () {
      // Emiting post request
      // Hiding message view if the message isn't set.
      if (this.data.msg === null) {
        return
      }
      // changing the voted variable in store that is used to switch between rating and msg view.
      this.$emit('userVoted', { id: this.data.id })
      // after 5 seconds the view resets to rating.
      setTimeout(function () { this.$emit('userVoted') }.bind(this), this.timeout * 1000)
    }
  },
  created () {
    console.log('settings:' + this.data.timeout)
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

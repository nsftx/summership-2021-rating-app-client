<template>
  <div class="main"
       v-on:click="vote()">
    <div class="left-border"
         :style="{ 'background-color': this.data.color }">
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
    }
  },
  computed: {
  },
  methods: {
    vote () {
      this.$root.$emit('post', { id: this.data.id })
      // Emmiting post request
      // Hiding message view if the message isn't set.
      if (this.data.msg === null) {
        return
      }
      // changing the voted variable that is used to switch between rating and msg view.
      this.$emit('userVoted')
      // after 5 seconds the view resets to rating.
      setTimeout(function () { this.$emit('userVoted') }.bind(this), this.data.timeout * 1000)
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 141px;
  margin: 2rem;
  .left-border{
    height: 100%;
    width: 5px;
    display: inline-block;
    margin-right: -5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  img{
    max-width: 64px;
    height: auto;
    padding: 38.5px 62.5px;
    border-radius: 5px;
    opacity: 0.3;
  }
}
</style>

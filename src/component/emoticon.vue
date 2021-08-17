<template>
  <div class="main"
       v-on:click="vote()">
    <div class="left-border"
         :style="{ 'background-color': this.data.color }">
    </div>
    <div class="container">
      <div class="background" :style="{ 'background-color': this.data.color}"></div>
      <img :src="this.data.src"
           alt="Emoticon">
    </div>
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
      this.$root.$emit('post', this.data.id)
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
    width: 3px;
    display: inline-block;
    margin-right: -3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .container{
    display: inline-block;
    position: relative;
    .background {
      height: 141px;
      width: 100%;
      padding: 70px 95px;
      opacity: 0.2;
      border-radius: 5px;
      &::before {
        border-radius: 5px;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top:0;
        right: 0;
        background-color: white;
        opacity: 0.4;
      }
    }
    img{
      max-width: 64px;
      height: auto;
      border-radius: 5px;
      opacity: 0.9;
      position: absolute;
      top: calc(50% - 32px);
      right: calc(50% - 32px);
    }
  }
}
</style>

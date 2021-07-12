<template>
  <div class="main" v-on:click="change()">
    <div class="left-border"
         :style="{ 'background-color': data.bgColor }">
    </div>
      <img :src="require('../assets/'+ this.data.imgSrc)"
           alt="Emoticon"
           :style="{ 'background-color': this.data.bgColor}">
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
    timeout () {
      return this.$store.getters.getSettings.msgTimeout
    }
  },
  methods: {
    change () {
      this.$store.commit('changeUserVoted')
      setTimeout(function () { this.$store.commit('changeUserVoted') }.bind(this), this.timeout * 1000)
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

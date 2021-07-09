<template>

    <div class="rating-wrapper">
      <div v-if="!clicked">
        <img class="like-img"
          src="../assets/positive-vote.svg">
        <p>Rate our service!</p>
        <div class="emoticon-wrapper">
          <Emoticon v-on:click ="change()"
                    v-bind:data="{bgColor: item.bgColor, imgSrc:item.imgName}"
                    v-for="item in emoticonsArr"
                    v-bind:key="item.imgName"
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
export default {
  name: 'rating',
  data: function () {
    return {
      clicked: false
    }
  },
  components: {
    Emoticon
  },
  computed: {
    message () {
      return this.$store.getters.getSettings.thankYouMsg
    },
    timeout () {
      return this.$store.getters.getSettings.msgTimeout
    },
    emoticonsArr () {
      return this.$store.getters.getEmoticonsArr
    }
  },
  methods: {
    change () {
      this.clicked = !this.clicked
      console.log('change')
      setTimeout(function () { this.clicked = !this.clicked }.bind(this), this.timeout * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.rating-wrapper {
   margin: 0 auto;
   height: 100vh;
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
    justify-content: space-between;
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

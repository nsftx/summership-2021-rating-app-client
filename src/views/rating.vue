<template>
    <div class="rating-wrapper">
      <div v-if="!voted">
        <img class="like-img"
          src="../assets/positive-vote.svg"
          alt="thumbs-up">
        <p>Rate our service!</p>
        <div class="emoticon-wrapper">
          <Emoticon v-bind:data="{src: item.image, color: item.color, id: item.id, timeout: settings.timeout, msg: settings.msg}"
                    v-for="item in emoticons"
                    v-bind:key="item.id"
                    @userVoted="userVoted()"
                    />
        </div>
      </div>
      <div v-else>
        <img class="check-img"
          src="../assets/check.svg"
          alt="checkmark">
        <p>{{this.ratingData[0].msg}}</p>
      </div>
    </div>
</template>

<script>
import Emoticon from '../component/emoticon'
export default {
  name: 'Rating',
  data: function () {
    return {
      emoticons: this.ratingData[1],
      settings: this.ratingData[0]
    }
  },
  props: {
    ratingData: Array
  },
  components: {
    Emoticon
  },
  computed: {
    voted () {
      return false
    }
  },
  methods: {
    userVoted () {
      this.voted = !this.voted
    }
  },
  created () {
    console.log('Rating data: ' + this.ratingData)
    console.log('Emoticons data: ' + this.emoticons)
    console.log('Settings data: ' + this.settings)
    // get settings and get emoji
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

<template>
  <div class="rating-wrapper">
    <div v-show="!voted">
      <img class="like-img"
           src="../assets/positive-vote.svg"
           alt="thumbs-up">
      <p>Rate our service!</p>
      <div class="emoticon-wrapper">
        <Emoticon v-bind:data="{src: item.image, color: item.color, id: item.id, msg: settings.msg, timeout: settings.timeout}"
                  v-for="item in emoticons"
                  v-bind:key="item.id"
                  @userVoted="changeVoted"
        />
      </div>
    </div>
    <div v-show="voted">
      <img class="check-img"
           src="../assets/check.svg"
           alt="checkmark">
      <p>{{this.settings.msg}}</p>
    </div>
  </div>
</template>
<script>
import Emoticon from '../component/emoticon'
export default {
  name: 'Rating',
  data: function () {
    return {
      voted: false
    }
  },
  props: {
    settings: Object,
    emoticons: Array
  },
  components: {
    Emoticon
  },
  computed: {
  },
  methods: {
    changeVoted () {
      this.voted = !this.voted
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

.rating-wrapper {
   margin: 0 auto;
   min-height: 100vh;
   height: 100%;
   width: 90%;
  .like-img {
    display: block;
    margin: 0 auto;
    margin-top: clamp(80px, 18%, 287px);
    margin-bottom: 31px;
    max-width: 35%;
    height: auto;
  }
  p{
    color: rgba(255,255,255, 0.7);
    font-size: 32px;
    text-align: center;
    margin-bottom: 35px;
    font-family: "Roboto", Helvetica;
  }
  .emoticon-wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
 .check-img{
   display: block;
   margin: 0 auto;
   margin-bottom: 38px;
   margin-top: clamp(40vh, 18%, 287px);
   width: 52px;
   height: 51px;
 }
 }
</style>

<template>

    <div class="rating-wrapper">
      <div v-if="!clicked">
        <img class="like-img"
          @click="change()"
          src="../assets/positive-vote.svg">
        <p>Rate our service!</p>
      </div>
      <div v-else>
        <img class="check-img"
          src="../assets/check.svg">
        <p>{{this.message}}</p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'rating',
  data: function () {
    return {
      clicked: false
    }
  },
  computed: {
    message () {
      return this.$store.getters.getSettings.thankYouMsg
    },
    timeout () {
      return this.$store.getters.getSettings.msgTimeout
    }
  },
  methods: {
    change () {
      this.clicked = !this.clicked
      setTimeout(function () { this.clicked = !this.clicked }.bind(this), this.timeout * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>

   .rating-wrapper {
     margin: 0 auto;
     height: 100vh;
     width:70%;

     .like-img {
       display: block;
       margin: 0 auto;
       margin-top: 287px;
       width: 154px;
       height: 157px;
     }

     .check-img{
       display: block;
       margin: 0 auto;
       margin-top: 477px;
       width: 52px;
       height: 51px;

     }
       p{
         color: rgba(255,255,255, 0.7);
         font-size: 32px;
         text-align: center;
         font-family: Roboto-Regular;
       }
     }
</style>

<template>
  <div id="app">
    <Rating />
  </div>
</template>

<script>
import Rating from './views/rating'

export default {
  mode: 'history',
  name: 'app',
  components: {
    Rating
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100%;
  min-width: 100%;
  background-color: #1B1E24;
}
</style>

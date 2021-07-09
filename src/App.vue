<template>
  <div id="app">
    <rating />
  </div>
</template>

<script>
import rating from './views/rating'

export default {
  mode: 'history',
  name: 'app',
  components: {
    rating
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

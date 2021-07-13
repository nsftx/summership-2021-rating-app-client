import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Emoticon from './component/emoticon'
import Rating from './views/rating'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default {
  install (Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.')
    }

    options.store.registerModule('rating-app-client', store)

    Vue.component('dummy-button', Emoticon, Rating)
  }
}

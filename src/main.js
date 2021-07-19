import Vue from 'vue'
import App from './App.vue'
// vue event bus
export const bus = new Vue()
Vue.config.productionTip = false

const Public = new Vue({
  render: h => h(App)
}).$mount('#app')

export default {
  Public
}

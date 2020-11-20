
import Vue from 'vue'
import App from './App.vue'
import './Firebase'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})

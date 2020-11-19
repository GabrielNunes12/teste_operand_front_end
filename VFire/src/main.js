
import Vue from 'vue'
import App from './App.vue'
import './Firebase'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})

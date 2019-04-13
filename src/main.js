import Vue from 'vue'
import Vant from 'vant'
import '@/assets/css/index.css'

import App from './App'
import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()
import router from './router'
import store from './store'
import './permission' // permission control
import * as filters from './filters'

function mJudge() {
  var html = document.documentElement
  var hWidth = html.getBoundingClientRect().width
  if (hWidth > 750) {
    html.style.fontSize = '50px'
  } else {
    html.style.fontSize = hWidth / 15 + 'px'
  }
}

mJudge()
Vue.config.productionTip = false
Vue.use(Vant)
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

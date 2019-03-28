import Vue from 'vue'
import Vant from 'vant'
import '@/assets/css/index.css'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './store'
import './permission' // permission control
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
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

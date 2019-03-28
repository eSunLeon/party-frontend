import Vue from 'vue'
import Vant from 'vant'
import '@/assets/css/index.css'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './store'
import './permission' // permission control

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

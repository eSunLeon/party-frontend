import Vue from 'vue'
import MintUI from 'mint-ui'
import './assets/css/mint-ui.css'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import './permission' // permission control

Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

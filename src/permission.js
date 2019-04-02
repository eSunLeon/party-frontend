import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  store.dispatch('setBg', to.meta.bg)
  next()
})

router.afterEach(() => {
  // NProgress.done()
})

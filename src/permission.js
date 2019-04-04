import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  store.dispatch('setBg', to.meta.bg)
  next()
  if (!isNaN(to.meta.icon)) {
    store.dispatch('setSelect', to.meta.icon)
  }
})

router.afterEach(() => {
  // NProgress.done()
})

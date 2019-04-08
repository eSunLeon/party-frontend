import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  store.dispatch('setBg', to.meta.bg)
  if (to.meta.login) {
    if (store.getters.userMsg) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
  if (!isNaN(to.meta.icon)) {
    store.dispatch('setSelect', to.meta.icon)
  }
})

router.afterEach(() => {
  // NProgress.done()
})

import router from './router'
import store from './store'
import { myInfo } from '@/api/my'
import { removeLocal } from '@/utils/storage'
// var whiteList = ['/login']
router.beforeEach((to, from, next) => {
  store.dispatch('setBg', to.meta.bg)
  if (to.path === '/login') {
    next()
  } else {
    if (store.getters.userMsg) {
      if (store.getters.info) {
        next()
      } else {
        myInfo().then(res => {
          if (res.returnCode === '200') {
            store.dispatch('setInfo', res.data)
            next()
          } else {
            removeLocal('info')
          }
        }).catch(() => {
          removeLocal('info')
          next('/login')
          store.dispatch('setBg', '#fff')
        })
      }
      if (!isNaN(to.meta.icon)) {
        store.dispatch('setSelect', to.meta.icon)
      }
    } else {
      next('/login')
      store.dispatch('setBg', '#fff')
    }
  }
})

router.afterEach(() => {
  // NProgress.done()
})

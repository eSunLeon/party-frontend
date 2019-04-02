import axios from 'axios'
import { Notify } from 'vant'

import store from '@/store'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 20000
})

service.interceptors.request.use(config => {
  console.log(config)
  if (store.getters.token) {
    // config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.retCode === 0) {
      return res
    }
  },
  error => {
    Notify({
      message: '通知内容',
      duration: 1000,
      background: '#1989fa'
    })
    return Promise.reject(error)
  })

export default service

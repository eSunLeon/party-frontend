import axios from 'axios'
import { Notify } from 'vant'

import store from '@/store'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 20000
})

service.interceptors.request.use(config => {
  if (store.getters.userMsg) {
    console.log(store.getters.userMsg)
    config.headers['ACCESSTOEKN'] = store.getters.userMsg.token
    config.headers['USERID'] = store.getters.userMsg.userId
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
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

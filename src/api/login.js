import request from '@/utils/request'
export function sendPhone(phone) {
  return request({
    method: 'post',
    url: `/public/sendmsg/${phone}/1`
  })
}
export function login(phone) {
  return request({
    method: 'post',
    url: `/public/login/${phone}`
  })
}
export function logout(phone) {
  return request({
    method: 'post',
    url: `/public/loginout/${phone}`
  })
}

import request from '@/utils/request'
export function sendPhone(phone) {
  return request({
    method: 'post',
    url: `/public/sendmsg/${phone}/1`
  })
}
export function login(phone, msg) {
  return request({
    method: 'post',
    url: `/public/login/${phone}/${msg}`
  })
}
export function logout(phone) {
  return request({
    method: 'post',
    url: `/public/loginout/${phone}`
  })
}

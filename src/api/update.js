import request from '@/utils/request'
export function updateUser(pramas) {
  return request({
    method: 'post',
    url: '/public/updateuser',
    data: pramas
  })
}

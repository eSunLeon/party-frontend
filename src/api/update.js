import request from '@/utils/request'
export function updateUser(pramas) {
  return request({
    method: 'put',
    url: '/dj/my/info',
    data: pramas
  })
}

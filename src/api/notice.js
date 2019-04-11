import request from '@/utils/request'
export function publicList() {
  return request({
    method: 'get',
    url: '/dj/informed/notice'
  })
}

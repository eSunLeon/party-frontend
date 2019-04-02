import request from '@/utils/request'
export function createActivity() {
  return request({
    method: 'get',
    url: '/activity/items/-2'
  })
}

import request from '@/utils/request'
/**
 * 公示公告列表
 */
export function publicList() {
  return request({
    method: 'get',
    url: '/dj/informed/notice'
  })
}
/**
 * 公示公告详情
 */

export function publicDetail(id) {
  return request({
    method: 'get',
    url: '/dj/informed/notice/' + id
  })
}
/**
 * 党内通报 列表
 */
export function innerPartyList() {
  return request({
    method: 'get',
    url: '/dj/informed/notification'
  })
}


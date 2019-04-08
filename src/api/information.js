import request from '@/utils/request'

/**
 *  type 列表
 */
export function typeList() {
  return request({
    method: 'get',
    url: '/dj/news/types'
  })
}

/**
 *  资讯列表
 * @param type
 */
export function newsList(type) {
  return request({
    method: 'get',
    url: '/dj/news/items/' + type
  })
}

/**
 * 资讯详情
 * @param id
 */
export function newDetail(id) {
  return request({
    method: 'get',
    url: '/dj/news/content/' + id
  })
}

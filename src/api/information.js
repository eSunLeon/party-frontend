import request from '@/utils/request'

/**
 *  type 列表
 */
export function typeList() {
  return request({
    method: 'get',
    url: '/dj/news/types/1'
  })
}

/**
 *  资讯类目下列表
 * @param type
 */
export function newsList(type) {
  return request({
    method: 'get',
    url: '/dj/news/items/' + type
  })
}
/**
 *  资讯列表
 * @param type
 */
export function infoList(type) {
  return request({
    method: 'get',
    url: '/dj/news/list/' + type
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

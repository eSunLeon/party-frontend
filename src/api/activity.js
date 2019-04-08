import request from '@/utils/request'

/**
 *  创建活动
 * @param params
 */
export function createActivity(params) {
  return request({
    method: 'post',
    url: '/dj/activity/create',
    data: params
  })
}

/**
 * 上传图片
 */
export function uploadImg(params) {
  return request({
    method: 'post',
    url: '/public/file/upload/img',
    header: {
      contentType: 'multipart/form-data'
    },
    data: params
  })
}
/**
 *  活动详情
 * @param id
 */
export function activityDetail(id) {
  return request({
    method: 'get',
    url: '/dj/activity/details/' + id
  })
}

export function joinActivity(params) {
  return request({
    method: 'post',
    url: '/dj/activity/join',
    data: params
  })
}

/**
 * 我的活动
 * @param state
 */
export function myActivity(state) {
  return request({
    method: 'get',
    url: '/dj/activity/items/' + state
  })
}

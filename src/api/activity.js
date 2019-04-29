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
 *  推荐活动
 */
export function recommendActivity(page, size) {
  return request({
    method: 'get',
    url: `/dj/activity/recommend?offset=${page}&limit=${size}`
  })
}
/**
 *  热门活动
 */
export function hotActivity(page, size) {
  return request({
    method: 'get',
    url: `/dj/activity/hot?offset=${page}&limit=${size}`
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
/**
 *  活动列表
 */
export function activityList(type, state) {
  return request({
    method: 'get',
    url: `/dj/activity/list/${type}/${state}`
  })
}
/**
 *  搜索活动列表
 */
export function searchActivityList(type, name) {
  return request({
    method: 'get',
    url: `/dj/activity/list/${type}/-2?name=${name}`
  })
}
/**
 *  活动类型类型
 */
export function activityTypeList(type) {
  return request({
    method: 'get',
    url: '/dj/activity/types/' + type
  })
}

export function joinActivity(params) {
  return request({
    method: 'post',
    url: '/dj/activity/join',
    data: params
  })
}

//查看活动参与人列表信息
export function joinMemberList(params) {
	console.log(123)
//return request({
//  method: 'get',
//  url: '/dj/activity/join',
//  data: params
//})
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

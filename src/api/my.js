import request from '@/utils/request'

/**
 * 我的活动
 * @param state
 */
export function myActivity(type, state) {
  return request({
    method: 'get',
    url: '/dj/activity/items/' + type + '/' + state
  })
}

/**
 * 我的积分
 * @param state
 */
export function myAward() {
  return request({
    method: 'get',
    url: '/dj/my/award'
  })
}
/**
 * 我的足迹
 * @param state
 */
export function myTrack() {
  return request({
    method: 'get',
    url: '/dj/my/track'
  })
}
/**
 * 我的足迹
 * @param state
 */
export function myTrackDetail() {
  return request({
    method: 'get',
    url: '/dj/my/track/flow'
  })
}

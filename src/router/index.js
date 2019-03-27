import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index') },
  {
    path: '',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views/index/index'),
        name: 'index',
        meta: { title: '首页', icon: 'icon-users' }
      },
      {
        path: '/group',
        component: () => import('@/views/group/group'),
        name: 'group',
        meta: { title: '党群', icon: 'icon-users' }
      },
      {
        path: '/my',
        component: () => import('@/views/my/manage'),
        name: 'my',
        meta: { title: '我的', icon: 'icon-users' }
      }
    ]
  },
  {
    path: '/information',
    component: () => import('@/views/information/information'),
    name: 'information',
    meta: { title: '资讯', icon: 'icon-users' }
  },
  {
    path: '/activity',
    component: () => import('@/views/activity/activity'),
    name: 'activity',
    meta: { title: '活动', icon: 'icon-users' }
  },
  {
    path: '/notice',
    component: () => import('@/views/notice/notice'),
    name: 'notice',
    meta: { title: '公告', icon: 'icon-users' }
  },
  {
    path: '/notice-list',
    component: () => import('@/views/notice-list/list'),
    name: 'noticeList',
    meta: { title: '公告列表', icon: 'icon-users' }
  },
  {
    path: '/notice/activity/:id',
    component: () => import('@/views/notice-detail/activity'),
    name: 'noticeActivity',
    meta: { title: '活动通知', icon: 'icon-users' }
  },
  {
    path: '/notice/inner-party/:id',
    component: () => import('@/views/notice-detail/inner-party'),
    name: 'innerParty',
    meta: { title: '党内通报', icon: 'icon-users' }
  },
  {
    path: '/notice/public/:id',
    component: () => import('@/views/notice-detail/public-notice'),
    name: 'publicNotice',
    meta: { title: '公示公告', icon: 'icon-users' }
  },
  {
    path: '/integral',
    component: () => import('@/views/my-integral/integral'),
    name: 'integral',
    meta: { title: '我的积分', icon: 'icon-users' }
  },
  {
    path: '/integral-detail',
    component: () => import('@/views/my-integral/integral-detail'),
    name: 'integralDetail',
    meta: { title: '积分明细', icon: 'icon-users' }
  },
  {
    path: '/my-activity',
    component: () => import('@/views/my-activity/activity'),
    name: 'myActivity',
    meta: { title: '我的活动', icon: 'icon-users' }
  },
  {
    path: '/task',
    component: () => import('@/views/my-task/task'),
    name: 'task',
    meta: { title: '我的任务', icon: 'icon-users' }
  },
  {
    path: '/history',
    component: () => import('@/views/my-history/history'),
    name: 'history',
    meta: { title: '我的足迹', icon: 'icon-users' }
  },
  {
    path: '/setting',
    component: () => import('@/views/setting/setting'),
    name: 'setting',
    meta: { title: '设置', icon: 'icon-users' }
  },
  {
    path: '/search',
    component: () => import('@/views/search/search'),
    name: 'search',
    meta: { title: '搜索', icon: 'icon-users' }
  },
  { path: '*', redirect: '/' }
]

export default new Router({
  // mode: 'history.vue', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
  // base: '/admin'
})

export const asyncRouterMap = [
]

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), meta: { title: '登录', bg: '#fff' }},
  {
    path: '',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views/index/index'),
        name: 'index',
        meta: { title: '首页', icon: 0, bg: '#F0F0F0' }
      },
      {
        path: '/group',
        component: () => import('@/views/group/group'),
        name: 'group',
        meta: { title: '党群', icon: 1, bg: '#F0F0F0' }
      },
      {
        path: '/my',
        component: () => import('@/views/my/manage'),
        name: 'my',
        meta: { title: '我的', icon: 2, bg: '#F0F0F0' }
      }
    ]
  },
  {
    path: '/information',
    component: () => import('@/views/information/information'),
    name: 'information',
    meta: { title: '资讯', bg: '#fff', login: true }
  },
  {
    path: '/information-detail/:id',
    component: () => import('@/views/information/information-detail'),
    name: 'informationDetail',
    meta: { title: '资讯详情', bg: '#fff', login: true }
  },
  {
    path: '/activity',
    component: () => import('@/views/activity/activity'),
    name: 'activity',
    meta: { title: '活动', bg: '#F0F0F0' }
  },
  {
    path: '/join',
    component: () => import('@/views/join/join'),
    name: 'join',
    meta: { title: '立即报名', bg: '#F0F0F0' }
  },
  {
    path: '/create-activity',
    component: () => import('@/views/create-activity/create-activity'),
    name: 'createActivity',
    meta: { title: '创建活动', bg: '#F0F0F0', login: true }
  },
  {
    path: '/notice',
    component: () => import('@/views/notice/notice'),
    name: 'notice',
    meta: { title: '公告', bg: '#fff' }
  },
  {
    path: '/notice-list',
    component: () => import('@/views/notice-list/list'),
    name: 'noticeList',
    meta: { title: '公告列表', icon: 'icon-users' }
  },
  {
    path: '/notice/activity',
    component: () => import('@/views/notice-detail/activity'),
    name: 'noticeActivity',
    meta: { title: '活动通知', bg: '#F0F0F0' }
  },
  {
    path: '/notice/inner-party',
    component: () => import('@/views/notice-detail/inner-party'),
    name: 'innerParty',
    meta: { title: '党内通报', bg: '#fff' }
  },
  {
    path: '/notice/public',
    component: () => import('@/views/notice-detail/public-notice'),
    name: 'publicNotice',
    meta: { title: '公示公告', icon: 'icon-users' }
  },
  {
    path: '/notice/public-detail',
    component: () => import('@/views/notice-detail/public-detail'),
    name: 'publicDetail',
    meta: { title: '公示详情', bg: '#fff' }
  },
  {
    path: '/integral',
    component: () => import('@/views/my-integral/integral'),
    name: 'integral',
    meta: { title: '我的积分', bg: '#F0F0F0', login: true }
  },
  {
    path: '/integral-detail',
    component: () => import('@/views/my-integral/integral-detail'),
    name: 'integralDetail',
    meta: { title: '积分明细', bg: '#F0F0F0', login: true }
  },
  {
    path: '/my-activity',
    component: () => import('@/views/my-activity/activity'),
    name: 'myActivity',
    meta: { title: '我的活动', bg: '#F0F0F0', login: true }
  },
  {
    path: '/task',
    component: () => import('@/views/my-task/task'),
    name: 'task',
    meta: { title: '我的任务', bg: '#F0F0F0', login: true }
  },
  {
    path: '/history',
    component: () => import('@/views/my-history/history'),
    name: 'history',
    meta: { title: '我的足迹', bg: '#fff', login: true }
  },
  {
    path: '/setting',
    component: () => import('@/views/setting/setting'),
    name: 'setting',
    meta: { title: '设置', bg: '#F0F0F0', login: true }
  },
  {
    path: '/about',
    component: () => import('@/views/about/about'),
    name: 'about',
    meta: { title: '关于', bg: '#F0F0F0' }
  },
  {
    path: '/profile',
    component: () => import('@/views/profile/profile'),
    name: 'profile',
    meta: { title: '个人资料', bg: '#F0F0F0', login: true }
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

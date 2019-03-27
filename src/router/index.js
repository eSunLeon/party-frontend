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
        path: '/user',
        component: () => import('@/views/user/manage'),
        name: 'user',
        meta: { title: '我的', icon: 'icon-users' }
      }
    ]
  },
  {
    path: '/information',
    component: () => import('@/views/user/manage'),
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
    meta: { title: '公告', icon: 'icon-users' }
  },
  { path: '*', redirect: '/' }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
  // base: '/admin'
})

export const asyncRouterMap = [
]

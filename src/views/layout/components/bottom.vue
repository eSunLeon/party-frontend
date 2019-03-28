<template>
  <van-tabbar v-model="selected">
    <van-tabbar-item to="/">
      <span>首页</span>
      <img
        slot="icon"
        src="./img/tab.jpg"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/group">
      <span>党群</span>
      <img
        slot="icon"
        src="./img/tab.jpg"
      >
    </van-tabbar-item>
    <van-tabbar-item to="my">
      <span>我的</span>
      <img
        slot="icon"
        src="./img/tab.jpg"
      >
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
  export default {
    name: 'bottom',
    data() {
      return {
        selected: 0,
        fixed: false
      }
    }
  }
</script>
<style>
</style>

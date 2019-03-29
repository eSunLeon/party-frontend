<template>
  <van-tabbar v-model="selected">
    <van-tabbar-item to="/">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? indexSelectedImg : indexImg"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/group">
      <span>党群</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? groupSelectedImg : groupImg"
      >
    </van-tabbar-item>
    <van-tabbar-item to="my">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? mySelectedImg : myImg"
      >
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
  import groupImg from './img/group.png'
  import groupSelectedImg from './img/group-selected.png'
  import indexImg from './img/index.png'
  import indexSelectedImg from './img/index-selected.png'
  import myImg from './img/my.png'
  import mySelectedImg from './img/my-selected.png'
  export default {
    name: 'bottom',
    data() {
      return {
        selected: 0,
        fixed: false,
        groupImg,
        groupSelectedImg,
        indexImg,
        indexSelectedImg,
        myImg,
        mySelectedImg
      }
    },
    created() {
      this.selected = this.$route.meta.icon
    }
  }
</script>

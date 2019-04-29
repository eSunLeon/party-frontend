<template>
  <div>
    <header-nav title="我的足迹"></header-nav>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="text">
          {{item.title}}
        </div>
        <img :src="item.mainImg" class="banner">
        <div class="time">
          {{item.createdTime * 1000 | formatCustomDate('-')}}
<!--          <div class="number">-->
<!--            <img src="../../assets/img/view.png" class="view-icon">-->
<!--            324-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import { myTrack } from '@/api/my'
  import headerNav from '@/components/header'
  export default {
    name: 'history',
    components: {
      headerNav
    },
    data() {
      return {
        list: []
      }
    },
    created() {
      myTrack().then(res => {
        if (res.returnCode === '200') {
          this.list = res.data
        }
      })
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .list {
    padding: 10/@r 20/@r 0;
    background-color: #fff;
  }
  .item {
    height: 218/@r;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    position: relative;
    padding-top: 44/@r;
    .banner {
      position: absolute;
      top: 30/@r;
      right: 0;
      width: 220/@r;
      height: 158/@r;
      border-radius: 8/@r;
    }
  }
  .text {
    width: 453/@r;
    line-height: 36/@r;
    font-size: 26/@r;
    color: #1a1a1a;
  }
  .time {
    position: absolute;
    bottom: 30/@r;
    left: 0;
    font-size: 22/@r;
    color: #999;
    .number {
      position: absolute;
      left: 364/@r;
      top: 0;
      padding-left: 52/@r;
    }
  }
</style>

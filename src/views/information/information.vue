<template>
  <div>
    <header-nav title="党建资讯"></header-nav>
    <div class="tab-bar">
      <div :key="index" class="tab" :class="{'active': index === 1}" v-for="(item, index) in tabList">{{item}}</div>
    </div>
    <div class="list">
      <router-link to="/information-detail" class="item">
        小支部大作为 党建引领凝聚前进力量引
        领凝聚前进力量
        <img src="../../assets/img/banner.png" class="src"/>
        <div class="time">
          2019-03-11
          <div class="view">
            <img class="view-icon" src="../../assets/img/view.png"/>5555
          </div>
        </div>
      </router-link>
      <div class="item">

      </div>
    </div>
  </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'information',
    components: {
      headerNav
    },
    data() {
      return {
        tabList: [
          '我的我的',
          '我的我的',
          '我的我的',
          '我的我的',
          '我的我的',
          '我的我的',
          '我的我的',
          '我的我的',
          '我的我的'
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @r: 50rem;
  .tab-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    font-size: 26 / @r;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    background:rgba(240,240,240,1);
    box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
    &::-webkit-scrollbar {
      display: none;
    }
    .tab {
      height: 72/@r;
      line-height: 72/@r;
      padding: 0 20/@r;
      color: #222;
    }
    .active {
      color: #F24040;
    }
  }
  .list {
    padding: 0 20/@r;
    background-color: #fff;
  }
  .item {
    display: block;
    position: relative;
    font-size: 26/@r;
    line-height: 36/@r;
    color: #1A1A1A;
    height: 219/@r;
    padding-top: 44/@r;
    padding-right: 257/@r;
    box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
  }
  .src {
    position: absolute;
    top: 30/@r;
    right: -1/@r;
    width: 220/@r;
    height: 158/@r;
  }
  .time {
    color: #666;
    position: absolute;
    bottom: 31/@r;
    left:0;
    font-size: 22/@r;
    .view {
      position: absolute;
      bottom: 0;
      left: 364/@r;
      padding-left: 52/@r;
    }
  }
</style>


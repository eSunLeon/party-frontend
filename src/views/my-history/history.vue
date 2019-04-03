<template>
  <div>
    <header-nav title="我已阅读"></header-nav>
    <div class="list">
      <div class="item">
        <div class="text">
          小支部大作为 党建引领凝聚前进力量引
          领凝聚前进力量
        </div>
        <img src="../../assets/img/banner.png" class="banner">
        <div class="time">
          2019-03-11
          <div class="number">
            <img src="../../assets/img/view.png" class="view-icon">
            324
          </div>
        </div>
      </div>
      <div class="item">
        <div class="text">
          小支部大作为 党建引领凝聚前进力量引
          领凝聚前进力量
        </div>
        <img src="../../assets/img/banner.png" class="banner">
        <div class="time">
          2019-03-11
          <div class="number">
            <img src="../../assets/img/view.png" class="view-icon">
            3243
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import headerNav from '@/components/header'
  export default {
    name: 'history',
    components: {
      headerNav
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

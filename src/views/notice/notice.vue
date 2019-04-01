<template>
  <div>
    <header-nav title="通知公告"></header-nav>
    <div class="list">
      <router-link to="/notice/activity" class="item">
        <img src="./img/huodong.png">
        <div class="item-title">
          活动通知
          <div class="time">2019-03-11</div>
        </div>
        <div class="item-text">
          "两学一做"学习教育。指的是要好好学习等。"两学一做"学习教育。指的是要好好学习等。
        </div>
      </router-link>
      <router-link to="/notice/inner-party" class="item">
        <img src="./img/tongbao.png">
        <div class="item-title">
          党内通报
          <div class="time">2019-03-11</div>
        </div>
        <div class="item-text">
          "两学一做"学习教育。指的是要好好学习等。"两学一做"学习教育。指的是要好好学习等。
        </div>
      </router-link>
      <router-link to="/notice/public" class="item">
        <img src="./img/gongshi.png">
        <div class="item-title">
          公示公告
          <div class="time">2019-03-11</div>
        </div>
        <div class="item-text">
          "两学一做"学习教育。指的是要好好学习等。"两学一做"学习教育。指的是要好好学习等。
        </div>
      </router-link>
    </div>

  </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'notice',
    components: {
      headerNav
    }
  }
</script>
<style lang="less" scoped>
 @r:50rem;
  .list {
    padding: 0 20/@r;
  }
  .item {
    display: block;
    padding-left: 70/@r;
    padding-top: 49/@r;
    position: relative;
    border-bottom: 1px solid #E6E6E6;
    height: 170/@r;
    img {
      width: 50/@r;
      position: absolute;
      top: 40/@r;
      left: 0;
    }
  }
  .item-title {
    position: relative;
    font-size: 32/@r;
    color: #1a1a1a;
    padding-bottom: 23/@r;
    .time {
      position: absolute;
      right: 0;
      top: 5/@r;
      font-size: 22/@r;
      color: #666;
    }
  }
  .item-text {
    width: 564/@r;
    font-size: 26/@r;
    height: 26/@r;
    color: #666;
    overflow:hidden;
    white-space:nowrap;
    text-overflow : ellipsis;
  }
</style>

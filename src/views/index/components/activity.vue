<template>
  <div class="activity">
    <div class="title">
      社区活动
      <span class="more">查看更多</span>
    </div>
    <div class="activity-list">
      <div class="activity-item">
        <div class="img">

        </div>
        <div class="activity-name">
          湖畔郊游烧烤钓鱼活动
        </div>
        <div class="activity-address">
          深圳龙岗区大鹏新城五零深圳龙岗区大鹏新城五零
        </div>
        <div class="activity-time">
          2019-04-12
        </div>
      </div>
      <div class="activity-item">
        <div class="img">

        </div>
        <div class="activity-name">
          湖畔郊游烧烤钓鱼活动
        </div>
        <div class="activity-address">
          深圳龙岗区大鹏新城五零
        </div>
        <div class="activity-time">
          2019-04-12
        </div>
      </div>
      <div class="activity-item">
        <div class="img">

        </div>
        <div class="activity-name">
          湖畔郊游烧烤钓鱼活动
        </div>
        <div class="activity-address">
          深圳龙岗区大鹏新城五零
        </div>
        <div class="activity-time">
          2019-04-12
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'activity'
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .activity {
    width: 100%;
    background-color: #fff;
    padding: 0 20/@r;
    margin-bottom: 19/@r;
    .title {
      color: #1a1a1a;
      padding-top: 30/@r;
      font-weight: bold;
      font-size: 26/@r;
      position: relative;
    }
  }
  .more {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #808080;
    font-size: 24/@r;
    font-weight: 500;
  }
  .activity-list {
    padding-top: 20/@r;
    height: 376/@r;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    white-space:nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    .activity-item {
      display: inline-block;
      position: relative;
      /*float: left;*/
      width: 350/@r;
      vertical-align: top;
    }
    .img {
      height: 210/@r;
      background-color: #000;
      overflow: hidden;
      border-radius: 8/@r;
    }
    .activity-name {
      padding: 20/@r 0;
      font-size: 28/@r;
      color: #1A1A1A;
    }
    .activity-address, .activity-time {
      color: #666;
      font-size: 22/@r;
      position: relative;
      padding-left: 33/@r;
    }
    .activity-address {
      overflow:hidden;
      width: 294/@r;
      padding-bottom: 10/@r;
      text-overflow : ellipsis;
    }
  }
</style>

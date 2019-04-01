<template>
    <div>
      <header-nav title="公示公告"></header-nav>
      <div class="list">
        <router-link to="/notice/public-detail" class="item">
          <div class="title">
            党内十三届全国人大二次会议在京开幕
          </div>
          <div class="time">
            2019-03-11 09:10
          </div>
        </router-link>
      </div>
    </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'innerParty',
    components: {
      headerNav
    }
  }
</script>
<style lang="less" scoped>
@r:50rem;
  .list {
    padding: 10/@r 40/@r;
  }
  .item {
    display: block;
    height: 149/@r;
    border-bottom: 1/@r solid #e6e6e6;
    padding-top: 30/@r;
    >div {
      padding-left: 46/@r;
    }
    .title {
      background: url("../../assets/img/gonggao.png") left top no-repeat;
      background-size: 30/@r 35/@r;
      font-size: 34/@r;
      color: #2e2e2e;
      padding-bottom: 29/@r;
    }
    .time {
      font-size: 26/@r;
      color: #999;
    }
  }
</style>

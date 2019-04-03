<template>
    <div>
      <header-nav title="公示公告"></header-nav>
      <div class="list">
        <router-link to="/notice/public-detail" class="item">
          <div class="title">
            <img src="../../assets/img/gonggao.png" class="title-icon">
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
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    padding-top: 30/@r;
    >div {
      padding-left: 46/@r;
    }
    .title {
      position: relative;
      font-size: 34/@r;
      color: #2e2e2e;
      padding-bottom: 29/@r;
      .title-icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 30/@r;
      }
    }
    .time {
      font-size: 26/@r;
      color: #999;
    }
  }
</style>

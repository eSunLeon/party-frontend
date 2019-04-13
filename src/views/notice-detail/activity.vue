<template>
  <div>
    <header-nav title="活动通知"></header-nav>
    <div class="list">
      <router-link :to="'/join/'+ item.id" class="item" v-for="(item, index) in list" :key="index">
        <div class="header">
          <div class="title">
            {{item.title}}
          </div>
          <div class="time">{{item.activityTime | formatCustomDateTime('-')}}</div>
        </div>
        <div class="banner">
          <img :src="item.mainImg"/>
        </div>
        <div class="address">
          <img src="./img/location.png" class="address-icon">
          {{item.site}}
        </div>
        <div class="detail">
          活动详情
          <img src="../../assets/img/more.png" class="more-icon"/>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import headerNav from '@/components/header'
  import { activityList } from '@/api/activity'
  export default {
    name: 'activity',
    components: {
      headerNav
    },
    data() {
      return {
        list: []
      }
    },
    created() {
      this.queryList()
    },
    methods: {
      queryList() {
        activityList(3, -2).then(res => {
          if (res.returnCode === '200') {
            this.list = res.data
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .list {
    padding: 40/@r 20/@r 0;
  }
  .item {
    display: block;
    background-color: #fff;
    border-radius: 8/@r;
    height: 582/@r;
    padding: 8/@r 20/@r 0;
  }
  .header {
    padding: 0 10/@r;
    .title {
      font-size: 34/@r;
      color: #2E2E2E;
      padding: 20/@r 0;
    }
    .time {
      color: #666;
      font-size: 22/@r;
      margin-bottom: 27/@r;
    }
  }
  .banner {
    border-radius: 8/@r;
    overflow: hidden;
    margin-bottom: 12/@r;
    img {
      width: 100%;
      height:300/@r;
    }
  }
  .address {
    position: relative;
    color: #666;
    font-size: 26/@r;
    padding: 18/@r 40/@r;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    .address-icon {
      position: absolute;
      top: 50%;
      left:0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 20/@r;
    }
  }
  .detail {
    color: #1a1a1a;
    font-size: 26/@r;
    padding: 21/@r 0;
    position: relative;
    .more-icon {
      width: 13/@r;
      position: absolute;
      top: 50%;
      right: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
</style>

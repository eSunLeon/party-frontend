<template>
  <div>
    <header-nav></header-nav>
    <div class="list">
      <router-link to="/join" class="item">
        <img src="../../assets/img/banner.png"/>
        <div class="bottom">
          福大志愿义诊活动福大志愿义诊活动
          <button class="btn">立即参加</button>
        </div>
      </router-link>
      <router-link to="/join" class="item">
        <img src="../../assets/img/banner.png"/>
        <div class="bottom">
          福大志愿义诊活动福大志愿义诊活动
          <button class="btn">立即参加</button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import headerNav from './components/header'
  import { activityList } from '@/api/activity'
  export default {
    name: 'activity',
    components: {
      headerNav
    },
    data() {
      return {
        type: 1,
        list: []
      }
    },
    created() {
      this.type = this.$route.params.activityClass
      this.queryList()
    },
    methods: {
      queryList() {
        activityList(this.type).then(res => {
          if (res.returnCode === '200') {
            this.list = res.data.items
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
@r: 50rem;
  .list {
    padding: 40/@r 20/@r 20/@r;
    .item{
      display: block;
      height: 400/@r;
      -webkit-box-shadow:0px 3/@r 7/@r 0px rgba(4,0,0,0.12);
      box-shadow:0px 3/@r 7/@r 0px rgba(4,0,0,0.12);
      border-radius:8/@r;
      overflow: hidden;
      &+.item {
        margin-top: 30/@r;
      }
      img {
        display: block;
        width:100%;
        height:320/@r;
      }
      .bottom {
        position: relative;
        padding:25/@r 20/@r;
        background-color: #fff;
        font-size: 30/@r;
        color: #2E2E2E;
      }
      .btn {
        position: absolute;
        right: 20/@r;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width:150/@r;
        padding-top: 13/@r;
        padding-bottom: 13/@r;
        background-color:rgba(255,59,60,1);
        -webkit-box-shadow:0px 2/@r 1px 0px rgba(192,16,17,0.8);
        box-shadow:0px 2/@r 1px 0px rgba(192,16,17,0.8);
        border-radius:6/@r;
        border: none;
        font-size: 26/@r;
        color: #fff;
      }
    }
  }
</style>

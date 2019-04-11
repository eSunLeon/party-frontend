<template>
    <div>
      <header-nav title="公示公告"></header-nav>
      <div class="list">
        <router-link v-for="(item, index) in list" :key="index" :to="'/notice/public-detail/'+item.id" class="item">
          <div class="title">
            <img src="../../assets/img/gonggao.png" class="title-icon">
            {{item.title}}
          </div>
          <div class="time">
            {{item.downTime | formatCustomDateTime('-')}}
          </div>
        </router-link>
      </div>
    </div>
</template>
<script>
  import headerNav from '@/components/header'
  import { publicList } from '@/api/notice'
  export default {
    name: 'innerParty',
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
        publicList().then(res => {
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

<template>
    <div>
      <header-nav title="党内通报"></header-nav>
      <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="title">
            <img src="../../assets/img/gonggao.png" class="title-icon">
            {{item.name}}
          </div>
          <div class="time">
            <b>时间:</b>{{item.startTime | formatCustomDateTime('-')}}
          </div>
          <div class="time">
            <b>地址:</b>{{item.address}}
          </div>
          <div class="time">
            <b>发起人:</b>{{item.createdBy}}
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import headerNav from '@/components/header'
  import { innerPartyList } from '@/api/notice'
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
        innerPartyList().then(res => {
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
    padding: 20/@r 40/@r 0;
  }
  .item {
    height: 223/@r;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    padding-top: 20/@r;
    >div {
      padding-left: 50/@r;
    }
  }
  .title {
    position: relative;
    font-size: 34/@r;
    color: #2E2E2E;
    margin-bottom: 14/@r;
    .title-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 30/@r;
    }
  }
  .time {
    font-size: 26/@r;
    margin-top: 15/@r;
    color: #1a1a1a;
    b {
      color: #666;
      font-weight: normal;
      margin-right: 10/@r;
    }
  }
</style>

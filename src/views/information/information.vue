<template>
  <div>
    <header-nav title="党建资讯"></header-nav>
    <div class="tab-bar">
      <div :key="index" class="tab" :class="{'active': item.id === id}"
           v-for="(item, index) in tabList"
      @click="changeTab(item.id)">{{item.name}}</div>
    </div>
    <div class="list">
      <router-link :to="'/information-detail/'+ item.id" class="item"
      v-for="(item, index) in dataList" :key="index">
        {{item.title}}
        <img :src="item.mainImg" class="src"/>
        <div class="time">
          {{item.createTime | formatCustomDate('-')}}
          <div class="view">
            <img class="view-icon" src="../../assets/img/view.png"/>{{item.readTotal}}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import headerNav from '@/components/header'
  import { typeList, newsList } from '@/api/information'
  export default {
    name: 'information',
    components: {
      headerNav
    },
    data() {
      return {
        tabList: [],
        id: 0,
        dataList: []
      }
    },
    created() {
      typeList().then(res => {
        if (res.returnCode === '200') {
          this.tabList = res.data.items
          this.id = res.data.items[0].id
          this.queryList()
        }
      }).catch(() => {})
    },
    methods: {
      changeTab(id) {
        if (this.id === id) {
          return
        }
        this.id = id
        this.dataList = []
        this.queryList()
      },
      queryList() {
        newsList(this.id).then(res => {
          if (res.returnCode === '200') {
            this.dataList = res.data.items
          }
        })
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
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    &::-webkit-scrollbar {
      display: none;
    }
    .tab {
      padding: 22/@r 20/@r;
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
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
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


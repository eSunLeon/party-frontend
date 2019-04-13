<template>
    <div>
      <header-nav title="搜索"></header-nav>
      <div class="list">
        <router-link v-for="(item,index) in list" :key="index" :to="'/join/'+ item.id" class="item">
          <img :src="item.mainImg"/>
          <div class="bottom">
            {{item.title}}
            <button class="btn">立即参加</button>
          </div>
        </router-link>
      </div>
    </div>
</template>
<script>
  import { searchActivityList } from '@/api/activity'
  import headerNav from '@/components/header'
  export default {
    name: 'search',
    data() {
      return {
        list: []
      }
    },
    components: {
      headerNav
    },
    created() {
      this.queryList()
    },
    methods: {
      queryList() {
        searchActivityList(1, this.$route.query.name).then(res => {
          if (res.returnCode === '200' && res.data.length > 0) {
            this.list.push(res.data)
          }
        })
        searchActivityList(2, this.$route.query.name).then(res => {
          if (res.returnCode === '200' && res.data.length > 0) {
            this.list.push(...res.data)
            console.log(this.list)
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

<template>
  <div>
    <header-nav title="我的活动"></header-nav>
    <van-row>
      <van-col span="12">
        <div class="tab-title" :class="{'active': type === 1}" @click="typeChange(1)">我发布的</div>
      </van-col>
      <van-col span="12">
        <div class="tab-title" :class="{'active': type === 2}" @click="typeChange(2)">我参与的</div>
      </van-col>
    </van-row>
   <div class="tab-bar" v-if="type === 1">
     <div class="bar" :class="{'active': active === -2}" @click="queryList(-2)">
       全部
     </div>
     <div class="bar" :class="{'active': active === 0}" @click="queryList(0)">
       待审核
     </div>
     <div class="bar" :class="{'active': active === 1}" @click="queryList(1)">
       已通过
     </div>
     <div class="bar" :class="{'active': active === -1}" @click="queryList(-1)">
       未通过
     </div>
     <div class="bar" :class="{'active': active === 2}" @click="queryList(2)">
       已结束
     </div>
   </div>
    <div class="tab-bar" v-if="type === 2">
      <div class="bar" :class="{'active': active === -2}" @click="queryList(-2)">
        全部
      </div>
      <div class="bar" :class="{'active': active === 3}" @click="queryList(3)">
        待开始
      </div>
      <div class="bar" :class="{'active': active === 4}" @click="queryList(4)">
        进行中
      </div>
      <div class="bar" :class="{'active': active === 2}" @click="queryList(2)">
        已结束
      </div>
    </div>
    <div class="list">
      <router-link  :to="'/join/'+ item.id" class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.mainImg"/>
        <div class="bottom">
          {{item.title}}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import { myActivity } from '@/api/my'
  import headerNav from '@/components/header'

  export default {
    name: 'task',
    components: {
      headerNav
    },
    data() {
      return {
        active: -2,
        type: 1,
        list: []
      }
    },
    created() {
      this.queryList(-2)
    },
    methods: {
      queryList(active) {
        this.active = active
        myActivity(this.type, this.active).then(res => {
          if (res.returnCode === '200') {
            this.list = res.data.items
          }
        })
      },
      typeChange(type) {
        this.type = type
        this.active = -2
        this.queryList(-2)
      }
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .tab-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 72/@r;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
  }
  .bar {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    line-height: 72/@r;
    text-align: center;
    color: #222;
    font-size: 28/@r;
    &.active {
      color: #F24040;
    }
  }
  &.tab-title {
    padding-top: 22/@r;
    padding-bottom: 20/@r;
    text-align: center;
    font-size: 26/@r;
    font-weight: bold;
    color: #474747;
    border-bottom: 4/@r solid #F0F0F0;
    &.active{
      color: #DF3031;
      border-bottom-color: #DF3031;
    }
  }
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

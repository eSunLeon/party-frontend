<template>
    <div class="tab">
      <van-row>
        <van-col span="8">
          <div class="tab-title" :class="{'active': active === 1}" @click="queryActivityList">党建活动</div>
        </van-col>
        <van-col span="8">
          <div class="tab-title" :class="{'active': active === 2}" @click="queryActivityState">活动动态</div>
        </van-col>
        <van-col span="8">
          <div class="tab-title" :class="{'active': active === 3}" @click="queryInfoState">党建资讯</div>
        </van-col>
      </van-row>
      <div class="list" v-if="active === 1 && list.length > 0">
        <router-link :to="'/join/'+item.id" class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.mainImg" class="img"/>
          <div class="detail">
            {{item.title}}
            <div class="bottom">
              {{item.activityTime | formatCustomDate('-')}}
            </div>
          </div>
        </router-link>
      </div>
      <div class="list" v-if="active === 2 && list.length > 0">
        <router-link :to="'/join/'+item.id" class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.mainImg" class="img"/>
          <div class="detail">
            {{item.title}}
            <div class="bottom">
              {{item.activityTime | formatCustomDate('-')}}
            </div>
          </div>
        </router-link>
      </div>
      <div class="list" v-if="active === 3 && list.length > 0">
        <router-link :to="'/information-detail/'+ item.id" class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.mainImg" class="img"/>
          <div class="detail">
            {{item.title}}
            <div class="bottom">
              {{item.createTime * 1000 | formatCustomDate('-')}}
              <div class="number">
                <img class="view-icon" src="../../../assets/img/view.png"/>
                {{item.readTotal}}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    import { activityList } from '@/api/activity'
    import { infoList } from '@/api/information'
    export default {
      name: 'tab',
      data() {
        return {
          active: 1,
          list: []
        }
      },
      created() {
        activityList(1, -2).then(res => {
          if (res.returnCode === '200') {
            this.list = res.data
          }
        })
      },
      methods: {
        queryActivityList() {
          if (this.active === 1) {
            return
          }
          this.active = 1
          this.list = []
          activityList(1, -2).then(res => {
            if (res.returnCode === '200') {
              this.list = res.data
            }
          })
        },
        queryActivityState() {
          if (this.active === 2) {
            return
          }
          this.active = 2
          this.list = []
          activityList(1, 2).then(res => {
            if (res.returnCode === '200') {
              this.list = res.data
            }
          })
        },
        queryInfoState() {
          if (this.active === 3) {
            return
          }
          this.active = 3
          this.list = []
          infoList(1).then(res => {
            if (res.returnCode === '200') {
              this.list = res.data.items
            }
          })
        }
      }
    }
</script>

<style lang="less" scoped>
@r:50rem;
.tab {
  background-color: #fff;
  box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
}
  .tab-title {
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
    padding: 9/@r 20/@r 2px;
  }
  .item {
    display: block;
    padding: 30/@r 0;
    padding-left: 238/@r;
    position: relative;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
  }
  .img {
    width: 220/@r;
    height: 158/@r;
    position: absolute;
    top: 30/@r;
    left: -1/@r;
    border-radius: 8/@r;
  }
  .detail {
    padding-top: 14/@r;
    height: 159/@r;
    font-size: 26/@r;
    color: #1a1a1a;
    position: relative;
    line-height: 36/@r;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #666;
    font-size: 22/@r;
  }
  .number {
    position: absolute;
    left: 364/@r;
    bottom:-5/@r;
    padding-bottom: 5/@r;
    padding-top: 5/@r;
    padding-left: 52/@r;
    z-index: 1;
  }
</style>

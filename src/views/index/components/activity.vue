<template>
  <div class="activity">
    <div class="title">
      社区活动
      <span class="more" @click="$router.push('/activity/2')">查看更多</span>
    </div>
    <div class="activity-list">
      <router-link v-for="(item, index) in list" :key="index" class="activity-item" :to="'/join/'+item.id">
        <div class="img">
          <img :src="item.mainImg" />
        </div>
        <div class="activity-name">{{item.title}}</div>
        <div class="activity-address">
          <van-icon name="location"/>{{item.site}}
        </div>
        <div class="activity-time">
          <van-icon name="clock"/>{{item.activityTime | formatCustomDate('-')}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { activityList } from '@/api/activity'
export default {
  name: 'activity',
  data() {
    return {
      list: [],
      offset: 1,
      limit: 20
    }
  },
  created() {
    this.queryList()
  },
  methods: {
    queryList() {
      activityList(2, -2).then(res => {
        if (res.returnCode === '200') {
          this.list = res.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@r: 50rem;
.activity {
  width: 100%;
  background-color: #fff;
  padding: 0 20 / @r;
  margin-bottom: 19 / @r;
  box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
  .title {
    color: #1a1a1a;
    padding-top: 30 / @r;
    font-weight: bold;
    font-size: 26 / @r;
    position: relative;
  }
}
.more {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #808080;
  font-size: 24 / @r;
  font-weight: 500;
  cursor: pointer;
}
.activity-list {
  padding-top: 20 / @r;
  height: 376 / @r;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  font-size: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  .activity-item {
    display: inline-block;
    position: relative;
    width: 350 / @r;
    vertical-align: top;
    & + .activity-item {
      margin-left: 10 / @r;
    }
  }
  .img {
    height: 210 / @r;
    overflow: hidden;
    border-radius: 8 / @r;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .activity-name {
    padding: 20 / @r 0 15 / @r;
    font-size: 28 / @r;
    color: #1a1a1a;
    overflow: hidden;
    width: 330 / @r;
    text-overflow: ellipsis;
  }
  .activity-address,
  .activity-time {
    color: #666;
    font-size: 22 / @r;
    position: relative;
    padding-left: 33 / @r;
    padding-top: 5 / @r;
    padding-bottom: 5 / @r;
    .van-icon {
      position: absolute;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      color: #808080;
    }
  }
  .activity-address {
    overflow: hidden;
    width: 294 / @r;
    text-overflow: ellipsis;
    .van-icon-location {
      left: -3/@r;
      font-size: 28 / @r;
    }
  }
  .activity-time {
    .van-icon-clock {
      font-size: 22 / @r;
    }
  }
}
</style>

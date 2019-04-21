<template>
  <div>
    <header-nav title="通知公告"></header-nav>
    <div class="list">
      <router-link class="item" to="/notice/activity">
        <img src="./img/huodong.png">
        <div class="item-title">
          活动通知
          <div class="time">2019-03-11</div>
        </div>
        <!-- <div class="item-text">"两学一做"学习教育。指的是要好好学习等。"两学一做"学习教育。指的是要好好学习等。</div> -->
      </router-link>
      <router-link class="item" to="/notice/inner-party">
        <img src="./img/tongbao.png">
        <div class="item-title">
          党内通报
          <div class="time">{{innerPartyNew.startTime | formatCustomDate('-')}}</div>
        </div>
        <div class="item-text">{{innerPartyNew.name}}</div>
      </router-link>
      <router-link class="item" to="/notice/public">
        <img src="./img/gongshi.png">
        <div class="item-title">
          公示公告
          <div class="time">{{publicNew.downTime | formatCustomDate('-')}}</div>
        </div>
        <div class="item-text">{{publicNew.title}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import headerNav from '@/components/header'
import { publicList } from '@/api/notice'
import { innerPartyList } from '@/api/notice'
export default {
  name: 'notice',
  components: {
    headerNav
  },
  data() {
    return {
      publicNew: {},
      innerPartyNew: {
      }
    }
  },
  created() {
    publicList().then(res => {
      if (res.returnCode === '200') {
        this.publicNew = res.data[0]
      }
    })
    innerPartyList().then(res => {
      if (res.returnCode === '200') {
        this.innerPartyNew = res.data.length && res.data[0]
      }
    })
  }
}
</script>
<style lang="less" scoped>
@r: 50rem;
.list {
  padding: 0 20 / @r;
}
.item {
  display: block;
  padding-left: 70 / @r;
  padding-top: 49 / @r;
  position: relative;
  -webkit-box-shadow: 0px 1 / @r 0px 0px rgba(230, 230, 230, 1);
  box-shadow: 0px 1 / @r 0px 0px rgba(230, 230, 230, 1);
  height: 170 / @r;
  img {
    width: 50 / @r;
    position: absolute;
    top: 40 / @r;
    left: 0;
  }
}
.item-title {
  position: relative;
  font-size: 32 / @r;
  color: #1a1a1a;
  padding-bottom: 20 / @r;
  .time {
    position: absolute;
    right: 0;
    top: 5 / @r;
    font-size: 22 / @r;
    color: #666;
  }
}
.item-text {
  width: 564 / @r;
  font-size: 26 / @r;
  color: #666;
  padding-top: 3/@r;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

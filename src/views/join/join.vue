<template>
  <div class="join">
    <header-nav></header-nav>
    <img class="banner" src="../../assets/img/banner.png">
    <div class="form">
      <div class="title">福大志愿义诊活动福大志愿义诊活动</div>
      <div class="item">
        <img class="icon-20" src="./img/shijian.png">
        <span class="color-666">报名截止：</span>
        <span class="start">2019.03.02</span>
        至
        <span class="end">2019.03.04</span>
      </div>
      <div class="item">
        <img class="icon-20" src="./img/dizhi.png">
        福州市闽侯县溪源宫路福州大学(旗山校区)
      </div>
      <div class="item">
        <img class="icon-22" src="./img/faqi.png">
        福中医中医学院青年志愿者协会
      </div>
      <div class="item">
        <img class="icon-20" src="./img/renwu.png">
        <span class="color-666">联系人：</span>
        <span class="color-1a">马小跳</span>
      </div>
      <div class="item">
        <img class="icon-20" src="./img/mobile.png">
        <span class="color-666">联系方式：</span>
        <span class="color-FF7607">158 9987 8598</span>
      </div>
      <div class="item">
        <img class="icon-26" src="./img/xiangqing.png">
        <span class="color-666">活动详情：</span>
      </div>
      <div
        class="detail"
      >此次义诊活动为青协与医研合办，意在趁雷锋月学习之余，给大学生进行义诊实践。志愿者的主要工作为现场秩序的维持，以及义诊的工作。注意维护义诊点周围的卫生。</div>
      <div class="item">
        <img class="icon-30" src="./img/canyu.png">
        <span class="color-666">活动参与人:</span>
      </div>
      <div class="uers">
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
        <div class="user-img">
          <img src="./img/touxiang.png">
        </div>
      </div>
    </div>
    <div @click id="join">
      <div class="join-icon">
        <img class="icon-30" src="./img/canjia.png">
        立即参加
      </div>
    </div>
  </div>
</template>

<script>
import headerNav from './components/header'
import { activityDetail, joinActivity } from '@/api/activity'
export default {
  name: 'join',
  components: {
    headerNav
  },
  data() {
    return {
      activityParams: {}
    }
  },
  created() {
    activityDetail(this.$route.params.id).then(res => {
      console.log(res)
    })
  },
  methods: {
    join() {
      joinActivity({
        activityId: this.$route.params.id
      })
        .then(res => {
          if (res.returnCode === '200') {
            this.$toast.success('参加成功!')
          }
        })
        .catch(() => {
          this.$toast.fail('参加失败!')
        })
    }
  }
}
</script>

<style lang="less" scoped>
@r: 50rem;
.banner {
  display: block;
  width: 100%;
  height: 338 / @r;
}

.join {
  padding-bottom: 110 / @r;
}

.form {
  margin: 0 20 / @r;
  background-color: #fff;
  border-bottom-left-radius: 8 / @r;
  border-bottom-right-radius: 8 / @r;
}

.title {
  font-size: 36 / @r;
  color: #1a1a1a;
  padding: 20 / @r 20 / @r;
  line-height: 56 / @r;
}

.item {
  position: relative;
  padding: 10 / @r 20 / @r 10 / @r 60 / @r;
  font-size: 26 / @r;
  color: #212121;
  margin-bottom: 10 / @r;
  img {
    position: absolute;
    top: 50%;
    left: 20 / @r;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .icon-20 {
    width: 20 / @r;
  }
  .icon-22 {
    width: 22 / @r;
  }
  .icon-26 {
    width: 26 / @r;
  }
  .icon-30 {
    width: 30 / @r;
  }
  .color-666 {
    color: #666;
  }
  .color-1a {
    color: #1a1a1a;
  }
  .color-FF7607 {
    color: #ff7607;
    border-bottom: 1 / @r solid #ff7607;
  }
  .start {
    color: #0cd71a;
  }
  .end {
    color: #df3031;
  }
}

.detail {
  color: #212121;
  font-size: 26 / @r;
  line-height: 38 / @r;
  margin: 3 / @r 20 / @r 19 / @r;
  padding-left: 40 / @r;
  padding-right: 20 / @r;
  padding-bottom: 25 / @r;
  border-bottom: 1 / @r solid #ebebeb;
}

.uers {
  padding-right: 20 / @r;
  padding-left: 30 / @r;
  padding-bottom: 1 / @r;
  font-size: 0;
  .user-img {
    display: inline-block;
    width: 100 / @r;
    height: 100%;
    margin-right: 10 / @r;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10 / @r;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
#join {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100 / @r;
  text-align: center;
  background: rgba(255, 59, 60, 1);
  font-size: 32 / @r;
  color: #fff;
  -webkit-box-shadow: 0px -3 / @r 7 / @r 0px rgba(4, 0, 0, 0.27);
  box-shadow: 0px -3 / @r 7 / @r 0px rgba(4, 0, 0, 0.27);
  cursor: pointer;
  .icon-30 {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 30 / @r;
  }
  .join-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding-top: 10 / @r;
    padding-bottom: 10 / @r;
    padding-left: 50 / @r;
  }
}
</style>

<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <div>2</div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div>2</div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div>2</div>
      </mt-swipe-item>
    </mt-swipe>
    <notice-bar left-icon="volume-o" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"/>
    <!-- <input type="file" name="cover" accept="image/*" capture="camera" multiple/> -->
    <input name="cover" type="file">
  </div>
</template>

<script>
import NoticeBar from 'vant/lib/notice-bar'
import 'vant/lib/notice-bar/style'
export default {
  name: 'dashboard',
  components: {
    NoticeBar
  },
  methods: {
    test() {
      var ua = navigator.userAgent.toLowerCase()
      var isIos = ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1
      if (isIos) {
        console.log(1)
      }
    }
  }
}
</script>
<style lang="less">
.tip-box {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  .tip {
    position: absolute;
    white-space: nowrap;
    padding-left: 100%;
    transform: translate3d(0, 0, 0);
    animation: test 6s linear infinite;
  }
  @keyframes test {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>

<template>
  <div class="container">
    <navHeader></navHeader>
    <swipe></swipe>
    <activity></activity>
    <tab-bar></tab-bar>
    <div>sadffds</div>
    <!--<van-notice-bar left-icon="volume-o" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"/>-->
    <!-- <input type="file" name="cover" accept="image/*" capture="camera" multiple/> -->
    <!-- <input name="cover" type="file"> -->
  </div>
</template>

<script>
  import navHeader from './components/nav'
  import swipe from './components/swipe'
  import activity from './components/activity'
  import tabBar from './components/tab'
  export default {
    name: 'index',
    components: {
      navHeader,
      swipe,
      activity,
      tabBar
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
<style lang="less" scoped>
  @r: 50rem;
  .container {
    padding-bottom: 130/@r;
  }
</style>

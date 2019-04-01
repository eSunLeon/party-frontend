<template>
    <div class="header">
      我的积分
      <div class="back" @click="$router.back()">
        <img src="../../../assets/img/back.png" class="icon">
      </div>
      <router-link to="/integral-detail" class="router">积分明细</router-link>
    </div>
</template>

<script>
  export default {
    name: 'headerNav'
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .header {
    height: 90/@r;
    line-height: 90/@r;
    background-color: #DF3031;
    text-align: center;
    font-size: 32/@r;
    font-weight: 400;
    color: #fff;
    letter-spacing: 4/@r;
    position: relative;
  }
  .back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 33/@r 20/@r 0;
    .icon {
      width: 26/@r;
    }
  }
  .router {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 26/@r;
    padding-top: 36/@r;
    padding-right: 19/@r;
  }
</style>

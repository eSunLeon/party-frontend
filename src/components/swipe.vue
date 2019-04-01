<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img src="../assets/img/banner.png" class="swipe-item">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner.png" class="swipe-item">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner.png" class="swipe-item">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner.png" class="swipe-item">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'swipe'
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .swipe {
    padding: 16/@r 20/@r 20/@r 20/@r;
    .van-swipe {
      border-radius: 16/@r;
    }
    .swipe-item {
      width: 100%;
      height: 375/@r;
    }
  }
</style>

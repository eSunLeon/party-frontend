<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <div class="swipe-item">1</div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">1</div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">1</div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">1</div>
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
      height: 375/@r;
      background-color: #000;
      border-radius: 16/@r;
    }
  }
</style>

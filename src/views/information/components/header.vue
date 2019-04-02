<template>
  <div class="header">
    资讯详情
    <div class="back" @click="$router.back()">
      <img src="../../../assets/img/back-000.png" class="icon">
    </div>
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
    background-color: #fff;
    text-align: center;
    font-size: 32/@r;
    font-weight: 400;
    color: #333;
    position: relative;
    -webkit-box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
  }
  .back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 33/@r 28/@r 0;
    .icon {
      width: 25/@r;
      display: block;
    }
  }
</style>

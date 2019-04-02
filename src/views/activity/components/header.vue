<template>
    <div class="header">
      党建活动
      <div class="back" @click="$router.back()">
        <img src="../../../assets/img/back.png" class="icon">
      </div>
      <img src="../../../assets/img/add.png" class="add" @click="$router.push('/create-activity')"/>
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
      display: block;
    }
  }
  .add{
    position: absolute;
    right: 20/@r;
    top: 20/@r;
    width: 52/@r;
    cursor: pointer;
  }
</style>

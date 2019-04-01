<template>
    <router-link to="/notice" class="notice">
      <img src="./img/sound.png" class="left"/>
      【党建】职教中心党总支开展主题党日学习活动!
      <img src="../../../assets/img/more.png" class="right"/>
    </router-link>
</template>

<script>
  export default {
    name: 'notice'
  }
</script>

<style lang="less" scoped>
@r:50rem;
  .notice {
    display: block;
    padding: 23/@r 94/@r;
    position: relative;
    color: #333;
    font-size: 26/@r;
    white-space:nowrap;
    overflow: hidden;
    .left {
      position: absolute;
      left: 40/@r;
      bottom: 20/@r;
      width: 35/@r;
    }
    .right {
      position: absolute;
      right: 40/@r;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 13/@r;
    }

  }
</style>

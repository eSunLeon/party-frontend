<template>
    <div class="container">
      <top></top>
      <div>
        <router-link to="/integral" class="item">
          我的积分
          <div class="integral">100积分</div>
          <img src="../../assets/img/more.png" class="more">
        </router-link>
        <router-link to="/history" class="item">
          我已阅读
          <img src="../../assets/img/more.png" class="more">
        </router-link>
      </div>
      <div class="list">
        <router-link to="/setting" class="item">
          设置
          <img src="../../assets/img/more.png" class="more">
        </router-link>
        <router-link to="/about" class="item">
          关于
          <img src="../../assets/img/more.png" class="more">
        </router-link>
      </div>
    </div>
</template>
<script>
  import top from './components/top'
  export default {
    name: 'user',
    components: {
      top
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .list {
    margin-top: 10/@r;
  }
  .item {
    display: block;
    position: relative;
    height: 89/@r;
    background-color: #fff;
    padding: 29/@r 40/@r;
    font-size: 30/@r;
    color: #1a1a1a;
    &+.item {
      -webkit-box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
      box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    }
  }
  .more {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 27/@r;
    width: 13/@r;
  }
  .integral {
    position: absolute;
    top: 31/@r;
    right: 61/@r;
    font-size: 26/@r;
    color:#808080;
  }
</style>

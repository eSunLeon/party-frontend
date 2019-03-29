<template>
  <div class="tab-box">
    <router-link to="/information" class="tab-item">
      <img src="./img/zixun.png" class="icon"/>
      <div>党群资讯</div>
    </router-link>
    <router-link to="/activity" class="tab-item">
      <img src="./img/huodong.png" class="icon"/>
      <div>党建活动</div>
    </router-link>
    <a href="#" class="tab-item">
      <img src="./img/zhuanti.png" class="icon"/>
      <div>专题教育</div>
    </a>
    <a  href="#" class="tab-item">
      <img src="./img/zhiyuanzhe.png" class="icon"/>
      <div>志愿者申请</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar'
  }
</script>

<style lang="less" scoped>
@r:50rem;
  .tab-box{
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding: 47/@r 0 42/@r;
    .tab-item {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      /*display: block;*/
      font-size: 28/@r;
      color: #1A1A1A;
      text-align: center;
      .icon {
        display: block;
        margin: 0 auto 19/@r;
        width: 98/@r;
      }
    }
  }
</style>

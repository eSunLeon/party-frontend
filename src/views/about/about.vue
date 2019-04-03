<template>
  <div>
    <header-nav title="关于"></header-nav>
    <div class="img">
      <img src="./img/tubiao.png"/>
    </div>
    <div class="version">
      版本号
      <span>V1.0</span>
    </div>
  </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'about',
    components: {
      headerNav
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .img {
    height: 521/@r;
    line-height: 520/@r;
    text-align: center;
    background-color: #fff;
    img {
      width: 148/@r;
    }
  }
  .version {
    position: relative;
    background-color: #fff;
    height: 90/@r;
    line-height: 90/@r;
    color: #1A1A1A;
    font-size: 26/@r;
    padding-left: 40/@r;
    -webkit-box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    span {
      position: absolute;
      top: 33/@r;
      right: 40/@r;
      color: #999;
    }
  }
</style>

<template>
  <div>
    <header-nav title="设置"></header-nav>
    <div class="list">
      <div class="item">
        清理缓存
        <div class="number">128MB</div>
      </div>
    </div>
    <button class="login-out">
      退出登录
    </button>
  </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'setting',
    components: {
      headerNav
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .list {
    padding-top: 21/@r;
  }
  .item {
    background-color: #fff;
    position: relative;
    height: 91/@r;
    line-height: 91/@r;
    color: #1a1a1a;
    font-size: 26/@r;
    padding-left: 40/@r;
  }
  .number {
    position: absolute;
    top: 33/@r;
    right: 41/@r;
    color: #999;
    font-size: 26/@r;
  }
  .login-out {
    position: fixed;
    bottom: 131/@r;
    width:361/@r;
    height:76/@r;
    border: none;
    background:rgba(255,59,60,1);
    border-radius:38/@r;
    font-size: 32/@r;
    color: #fff;
    -webkit-transform: translate(50%);
    transform: translate(50%)
  }
</style>

<template>
  <div>
    <header-nav title="个人资料"></header-nav>
    <div class="user">
      <div class="user-img">
        头像
        <img src="./img/touxiang.png" class="img"/>
        <img src="../../assets/img/more.png" class="icon"/>
      </div>
      <div class="user-name">
        真实姓名
        <span>吴优秀</span>
        <img src="../../assets/img/more.png" class="icon"/>
      </div>
    </div>
    <div class="title">资料设置</div>
    <div class="list">
      <div class="item">
        性别
        <span>女</span>
        <img src="../../assets/img/more.png" class="icon"/>
      </div>
      <div class="item">
        手机号
        <span>1326599659</span>
        <img src="../../assets/img/more.png" class="icon"/>
      </div>
    </div>
  </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'profile',
    components: {
      headerNav
    }
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .user {
    margin-top: 30/@r;
    background-color: #fff;
    padding: 0 28/@r;
    font-size: 32/@r;
    color: #222;
  }
  .title {
    color: #666;
    padding-top: 42/@r;
    padding-left: 29/@r;
    padding-bottom: 17/@r;
    font-size: 28/@r;
  }
  .user-img {
    position: relative;
    height: 131/@r;
    line-height: 130/@r;
    border-bottom: 1/@r solid #e6e6e6;
  }
  .user-name {
    height: 90/@r;
    line-height: 90/@r;
    position: relative;
  }
  .img {
    position: absolute;
    top: 16/@r;
    right: 40/@r;
    width: 99/@r;
  }
  .icon {
    position: absolute;
    top: 50%;
    right: -1/@r;
    width: 13/@r;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .list{
    background-color: #fff;
    padding: 0 28/@r;
    color: #222;
  }
  .item {
    font-size: 32/@r;
    height: 91/@r;
    line-height: 90/@r;
    position: relative;
    border-bottom: 1/@r solid #e6e6e6;
  }
  .user-name span, .item span {
    position: absolute;
    top: 32/@r;
    right: 42/@r;
    color: #999;
    font-size: 28/@r;
  }
</style>

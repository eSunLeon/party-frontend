<template>
  <div class="top">
    <div class="title">
      我的
      <router-link to="/profile" class="router">
        <img src="../img/setting.png">
      </router-link>
    </div>
    <div class="name">
      <img src="../img/touxiang.png">
      <div class="user-name">
        吴优秀
      </div>
      <div class="user-level">
        <div class="level">党委书记</div>
      </div>
    </div>
    <div class="bottom">
      <router-link to="/task">
        <img src="../img/renwu.png" class="icon-task"/>
        <div>
          日常任务
        </div>
      </router-link>
      <router-link to="/my-activity">
        <img src="../img/huodong.png" class="icon-activity"/>
        <div>
          我的活动
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top'
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .top{
    height: 520/@r;
    width: 100%;
    background: url("../img/bg.png") no-repeat;
    background-size: cover;
    margin-bottom: 9/@r;
  }
  .title {
    padding: 33/@r;
    text-align: center;
    font-size: 30/@r;
    color: #fff;
    position: relative;
  }
  .router {
    padding-top: 30/@r;
    padding-right: 27/@r;
    position: absolute;
    top: 0;
    right: 0;
    img {
      width: 37/@r;
    }
  }
  .name {
    text-align: center;
    padding: 12/@r;
    img {
      width: 111/@r;
    }
    .user-name {
      font-size: 30/@r;
      padding-top: 30/@r;
      color: #fff;
      letter-spacing: 5/@r;
    }
    .user-level {
      padding-top: 11/@r;
      padding-bottom: 20/@r;
      border-bottom: 1px solid rgba(232, 232, 232, 0.2);
    }
    .level {
      width: 130/@r;
      height: 36/@r;
      line-height: 36/@r;
      color: #8A6173;
      font-size: 22/@r;
      background:linear-gradient(0deg,rgba(255,126,0,1),rgba(255,163,32,1),rgba(255,233,87,1));
      border-radius:8/@r;
      margin: 0 auto;
    }
  }
  .bottom{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding: 45/@r 122/@r 0;
    a {
      flex: 1;
      text-align: center;
      div {
        font-size: 24/@r;
        margin-top: 15/@r;
        color: #fff;
      }
    }
    .icon-task {
      display: block;
      margin: 0 auto;
      width: 49/@r;
    }
    .icon-activity {
      display: block;
      margin: 0 auto;
      width: 46/@r;
    }
  }
</style>

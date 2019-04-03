<template>
    <div>
      <header-nav></header-nav>
      <div class="integral">
        <div class="number">
          <div class="detail">64654</div>
          <div>积分</div>
        </div>
      </div>
      <div>
        <div class="title">
          积分排行榜
        </div>
        <div class="list">
          <div class="item">
            <img src="./img/touxiang.png"/>
            吴优秀
            <div class="fen">+ 998分</div>
          </div>
          <div class="item">
            <img src="./img/touxiang.png"/>
            吴优秀
            <div class="fen">+ 998分</div>
          </div>
          <div class="item">
            <img src="./img/touxiang.png"/>
            吴优秀
            <div class="fen">+ 998分</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import headerNav from './components/header'
  export default {
    name: 'integral',
    components: {
      headerNav
    }
  }
</script>
<style lang="less" scoped>
  @r: 50rem;
  .integral{
    background-color: #fff;
    padding: 40/@r 75/@r;
    margin-top: 30/@r;
  }
  .number {
    height:240/@r;
    background:linear-gradient(90deg,rgba(255,180,131,1),rgba(255,210,180,1),rgba(255,180,131,1));
    border-radius:10/@r;
    color: #1a1a1a;
    text-align: center;
    font-size: 24/@r;
  }
  .detail {
    padding-top: 78/@r;
    padding-bottom: 14/@r;
    font-size: 42/@r;
  }
  .title {
    color: #666;
    font-size: 29/@r;
    padding: 40/@r 28/@r 17/@r;
  }
  .item {
    height: 91/@r;
    line-height: 90/@r;
    background-color: #fff;
    -webkit-box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    font-size: 26/@r;
    color: #1a1a1a;
    position: relative;
    padding-left: 130/@r;
    img {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      left: 45/@r;
      width: 60/@r;
    }
    .fen {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 40/@r;
      font-size: 28/@r;
      color: #999;
    }
  }
</style>

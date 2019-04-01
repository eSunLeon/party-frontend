<template>
    <div>
      <header-nav title="日常任务"></header-nav>
      <div class="list">
        <div class="item">
          <img src="./img/wenzhang.png"/>
          认真阅读文章
          <div class="fen">领 98分</div>
        </div>
        <div class="item">
          <img src="./img/huodong.png"/>
          发布活动
          <div class="fen">领 98分</div>
        </div>
      </div>
    </div>
</template>
<script>
  import headerNav from '@/components/header'

  export default {
    name: 'task',
    components: {
      headerNav
    }
  }
</script>
<style lang="less" scoped>
  @r: 50rem;
  .list {
    padding-top: 24/@r;
  }
  .item {
    height: 91/@r;
    line-height: 90/@r;
    background-color: #fff;
    border-bottom: 1px solid #E8E8E8;
    font-size: 26/@r;
    color: #1a1a1a;
    position: relative;
    padding-left: 100/@r;
    img {
      position: absolute;
      top: 26/@r;
      left: 40/@r;
      width: 40/@r;
    }
    .fen {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 18/@r;
      height: 46/@r;
      width: 140/@r;
      line-height: 44/@r;
      text-align: center;
      font-size: 24/@r;
      color: #EB8C36;
      border-radius: 8/@r;
      border: 2/@r solid #FFA24F;
    }
  }
</style>

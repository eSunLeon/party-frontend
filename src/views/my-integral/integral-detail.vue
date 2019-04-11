<template>
  <div>
    <header-nav title="积分详情"></header-nav>
    <div class="list">
      <div class="item" v-for="(item, index) in integral" :key="index">
<!--        <img src="./img/wenzhang.png"/>-->
        {{item}}
        <div class="fen">+ {{item}}分</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { myTrackDetail } from '@/api/my'
  import headerNav from '@/components/header'

  export default {
    name: 'integralDetail',
    data() {
      return {
        integral: []
      }
    },
    components: {
      headerNav
    },
    created() {
      myTrackDetail().then(res => {
        if (res.returnCode === '200') {
          this.integral = res.data
        }
      })
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
    -webkit-box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px -1/@r 0px 0px rgba(230,230,230,1);
    font-size: 26/@r;
    color: #1a1a1a;
    position: relative;
    padding-left: 20/@r;
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

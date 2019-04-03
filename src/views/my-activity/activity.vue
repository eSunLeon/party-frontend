<template>
  <div>
    <header-nav title="我的活动"></header-nav>
   <div class="tab-bar">
     <div class="bar" :class="{'active': active === 0}" @click="active=0">
       全部
     </div>
     <div class="bar" :class="{'active': active === 1}" @click="active=1">
       待审核
     </div>
     <div class="bar" :class="{'active': active === 2}" @click="active=2">
       已通过
     </div>
     <div class="bar" :class="{'active': active === 3}" @click="active=3">
       未通过
     </div>
     <div class="bar" :class="{'active': active === 4}" @click="active=4">
       已结束
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
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .tab-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 72/@r;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
  }
  .bar {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    line-height: 72/@r;
    text-align: center;
    color: #222;
    font-size: 28/@r;
  }
  .active {
    color: #F24040;
  }
</style>

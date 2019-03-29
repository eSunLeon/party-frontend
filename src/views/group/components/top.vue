<template>
  <div class="top">
    <swipe></swipe>
    <nav-bar></nav-bar>
    <notice></notice>
  </div>
</template>

<script>
  import navBar from './nav-bar'
  import swipe from './swipe'
  import notice from './notice'
  export default {
    name: 'top',
    components: {
      navBar,
      swipe,
      notice
    }
  }
</script>

<style lang="less" scoped>
@r:50rem;
  .top {
    background-color: #fff;
    padding-top: 20/@r;
  }
</style>

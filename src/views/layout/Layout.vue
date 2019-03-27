<template>
  <div>
    <router-view></router-view>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import bottomBar from './components/bottom'
export default {
  name: 'layout',
  components: {
    bottomBar
  }
}
</script>

<style lang="less" scoped>

</style>

<template>
  <mt-tabbar :fixed="fixed" v-model="selected">
    <mt-tab-item id="index">
      <img slot="icon" src="./img/tab.jpg">
      首页
    </mt-tab-item>
    <mt-tab-item id="group">
      <img slot="icon" src="./img/tab.jpg">
      党群
    </mt-tab-item>
    <mt-tab-item id="user">
      <img slot="icon" src="./img/tab.jpg">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
  name: 'bottom',
  data() {
    return {
      selected: 'index',
      fixed: false
    }
  },
  watch: {
    selected(val) {
      this.$router.push({ name: val })
    }
  },
  created() {
    this.selected = this.$route.name
  }
}
</script>
<style>
</style>

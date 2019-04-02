<template>
  <div>
    <div class="tab-bar">
      <div :key="index" class="tab" v-for="(item, index) in tabList">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'information',
  data() {
    return {
      tabList: [
        '我的我的',
        '我的我的',
        '我的我的',
        '我的我的',
        '我的我的',
        '我的我的',
        '我的我的',
        '我的我的',
        '我的我的'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@r: 50rem;
.tab-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  font-size: 26 / @r;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
      display: none;
    }
  .tab {
    padding: 12 / @r;
  }
}
</style>


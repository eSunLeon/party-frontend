<template>
  <router-link class="notice" to="/notice">
    <img class="left" src="./img/sound.png">
    {{publicNew.title}}
    <img class="right" src="../../../assets/img/more.png">
  </router-link>
</template>

<script>
import { publicList } from '@/api/notice'
export default {
  name: 'notice',
  data() {
    return {
      publicNew: {}
    }
  },
  created() {
    publicList().then(res => {
      if (res.returnCode === '200') {
        this.publicNew = res.data[0]
      }
    })
  }
}
</script>

<style lang="less" scoped>
@r: 50rem;
.notice {
  display: block;
  padding: 23 / @r 94 / @r;
  position: relative;
  color: #333;
  font-size: 26 / @r;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 18 / @r;
  min-height: 70/@r;
  .left {
    position: absolute;
    left: 40 / @r;
    bottom: 20 / @r;
    width: 35 / @r;
  }
  .right {
    position: absolute;
    right: 40 / @r;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 13 / @r;
  }
}
</style>

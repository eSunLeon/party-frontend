<template>
  <div>
    <header-nav></header-nav>
    <div class="title">{{publicDetail.title}}</div>
    <div class="time">{{publicDetail.downTime | formatCustomDateTime('-')}}</div>
    <div class="border"></div>
    <div class="content">
      {{detail.content}}
    </div>
  </div>
</template>

<script>
import headerNav from './components/header'
import { publicDetail } from '@/api/notice'
import { getLocal } from '@/utils/storage'
export default {
  name: 'publicDetail',
  components: {
    headerNav
  },
  data() {
    return {
      detail: {},
      publicDetail: {}
    }
  },
  created() {
    this.publicDetail = JSON.parse(getLocal('public'))
    publicDetail(this.$route.params.id).then(res => {
      if (res.returnCode === '200') {
        this.detail = res.data
      }
    })
  }
}
</script>

<style lang="less" scoped>
@r: 50rem;
.title {
  padding: 21 / @r 26 / @r 8 / @r;
  color: #333;
  font-weight: bold;
  font-size: 44 / @r;
  line-height: 64 / @r;
}
.time {
  color: #999;
  font-size: 26 / @r;
  padding-left: 29 / @r;
}
.border {
  margin: 40 / @r 20 / @r 0;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: 0px 1 / @r 0px 0px rgba(230, 230, 230, 1);
  box-shadow: 0px 1 / @r 0px 0px rgba(230, 230, 230, 1);
}
.content {
  padding: 20 / @r 30 / @r;
  font-size: 34 / @r;
  line-height: 54 / @r;
  color: #505050;
}
</style>

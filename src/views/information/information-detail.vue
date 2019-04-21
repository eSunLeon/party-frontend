<template>
  <div>
    <header-nav></header-nav>
    <div class="title">
      {{content.title}}
    </div>
    <div class="time">
      发布时间：{{content.createTime * 1000 | formatCustomDate('-')}}
      <div class="view">
        <img src="../../assets/img/view.png" class="view-icon"/>
        {{content.readTotal}}
      </div>
    </div>
    <div class="border"></div>
    <div class="content" v-html="content.content">
      <!-- {{content.content}} 有标签-->
    </div>
  </div>
</template>

<script>
  import headerNav from './components/header'
  import { newDetail } from '@/api/information'
  export default {
    name: 'publicDetail',
    components: {
      headerNav
    },
    data() {
      return {
        content: {}
      }
    },
    created() {
      newDetail(this.$route.params.id).then(res => {
        if (res.returnCode === '200') {
          this.content = res.data
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .title {
    padding: 21/@r 26/@r 18/@r;
    color: #333;
    font-weight: bold;
    font-size: 44/@r;
    line-height: 64/@r;
  }
  .time {
    color: #999;
    font-size: 26/@r;
    padding-left: 20/@r;
    position: relative;
  }
  .border{
    margin: 29/@r 20/@r 0;
    border-bottom: 1px solid transparent;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0 rgba(230,230,230,1);
  }
  .content {
    padding: 20/@r 30/@r;
    font-size:34/@r;
    line-height:54/@r;
    color: #505050;
  }
  .view {
    position: absolute;
    left: 604/@r;
    top: 0;
    font-size: 26/@r;
    color: #999;
    padding-left: 52/@r;
  }
</style>

<template>
    <div class="tab">
      <van-row>
        <van-col span="12">
          <div class="tab-tittle" :class="{'active': active === 1}" @click="active =1">社区资讯</div>
        </van-col>
        <van-col span="12">
          <div class="tab-tittle" :class="{'active': active === 2}" @click="active =2">推荐活动</div>
        </van-col>
      </van-row>
      <div class="list">
        <div class="item">
          <div class>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'tab',
      data() {
        return {
          active: 1
        }
      }
    }
</script>

<style lang="less" scoped>
@r:50rem;
.tab {
  background-color: #fff;
}
  .tab-tittle {
    padding-top: 22/@r;
    padding-bottom: 20/@r;
    text-align: center;
    font-size: 26/@r;
    font-weight: bold;
    color: #474747;
    border-bottom: 4/@r solid #F0F0F0;
    &.active{
      color: #DF3031;
      border-bottom-color: #DF3031;
    }
  }
</style>

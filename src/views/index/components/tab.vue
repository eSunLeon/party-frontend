<template>
    <div class="tab">
      <van-row>
        <van-col span="12">
          <div class="tab-title" :class="{'active': active === 1}" @click="active =1">社区资讯</div>
        </van-col>
        <van-col span="12">
          <div class="tab-title" :class="{'active': active === 2}" @click="active =2">推荐活动</div>
        </van-col>
      </van-row>
      <div class="list">
        <div class="item">
          <img src="../../../assets/img/banner.png" class="img"/>
          <div class="detail">
            小支部大作为 党建引领凝聚前进力量引
            领凝聚前进力量
            <div class="bottom">
              2019-03-11
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../../../assets/img/banner.png" class="img"/>
          <div class="detail">
            小支部大作为 党建引领凝聚前进力量引
            领凝聚前进力量
            <div class="bottom">
              2019-03-11
            </div>
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
  box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
}
  .tab-title {
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
.list {
  padding: 9/@r 20/@r 2px;
}
.item {
  padding: 30/@r 0;
  padding-left: 278/@r;
  position: relative;
  &+.item {
    border-top: 1px solid #E6E6E6;
  }
}
.img {
  width: 261/@r;
  height: 158/@r;
  position: absolute;
  top: 30/@r;
  left: -1/@r;
}
.detail {
  padding-top: 14/@r;
  height: 159/@r;
  font-size: 26/@r;
  color: #1a1a1a;
  position: relative;
  line-height: 36/@r;
}
.bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #666;
  font-size: 22/@r;
}
</style>

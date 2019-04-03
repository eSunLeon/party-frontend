<template>
  <div>
    <header-nav title="个人资料"></header-nav>
    <div class="user">
      <div @click="show = true" class="user-img">
        头像
        <img class="img" src="./img/touxiang.png">
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="user-name">
        真实姓名
        <span>吴优秀</span>
        <img class="icon" src="../../assets/img/more.png">
      </div>
    </div>
    <div class="title">资料设置</div>
    <div class="list">
      <div class="item">
        性别
        <span>女</span>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item">
        手机号
        <span>1326599659</span>
        <img class="icon" src="../../assets/img/more.png">
      </div>
    </div>
    <van-popup position="bottom" v-model="show">
      <div class="item-popup camera">
        拍照
        <input accept="image/*" capture="camera" class="file" type="file">
      </div>
      <div class="item-popup album">
        本地相册
        <input class="file" name="file" type="file">
      </div>
      <div @click="show = false" class="item-popup">取消</div>
    </van-popup>
  </div>
</template>
<script>
import headerNav from '@/components/header'

export default {
  name: 'profile',
  components: {
    headerNav
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    var ua = navigator.userAgent.toLowerCase()
    // 判断是否是苹果手机，是则是true
    var isIos = ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1
    if (isIos) {
      // $('input:file').removeAttr('capture')
    }
  }
}
</script>

<style lang="less" scoped>
@r: 50rem;
.user {
  margin-top: 30 / @r;
  background-color: #fff;
  padding: 0 28 / @r;
  font-size: 32 / @r;
  color: #222;
}
.title {
  color: #666;
  padding-top: 42 / @r;
  padding-left: 29 / @r;
  padding-bottom: 17 / @r;
  font-size: 28 / @r;
}
.user-img {
  position: relative;
  height: 131 / @r;
  line-height: 130 / @r;
  -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
  box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
}
.user-name {
  height: 90 / @r;
  line-height: 90 / @r;
  position: relative;
}
.img {
  position: absolute;
  top: 16 / @r;
  right: 40 / @r;
  width: 99 / @r;
}
.icon {
  position: absolute;
  top: 50%;
  right: -1 / @r;
  width: 13 / @r;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.list {
  background-color: #fff;
  padding: 0 28 / @r;
  color: #222;
}
.item {
  font-size: 32 / @r;
  height: 91 / @r;
  line-height: 90 / @r;
  position: relative;
  -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
  box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
}
.user-name span,
.item span {
  position: absolute;
  top: 32 / @r;
  right: 42 / @r;
  color: #999;
  font-size: 28 / @r;
}
.van-popup {
  background-color: #f0f0f0;
}
.item-popup {
  position: relative;
  height: 88 / @r;
  line-height: 89 / @r;
  text-align: center;
  font-size: 28 / @r;
  border-top: 1 / @r solid #e8e8e8;
  border-bottom: 1 / @r solid #e8e8e8;
  background-color: #fff;
  overflow: hidden;
  .file {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
  }
}
.camera {
  margin-bottom: 10 / @r;
}
.album {
  margin-bottom: 30 / @r;
}
</style>

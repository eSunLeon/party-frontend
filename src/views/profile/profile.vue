<template>
  <div>
    <header-nav title="个人资料"></header-nav>
    <div class="user">
      <div @click="show = true" class="user-img">
        头像
        <img class="img" :src="info.headImg" v-if="info.headImg">
        <img class="img" src="../../assets/img/touxiang.png" v-else>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="user-name" @click="nameShow = true">
        真实姓名
        <span>{{info.name}}</span>
        <img class="icon" src="../../assets/img/more.png">
      </div>
    </div>
    <div class="title">资料设置</div>
    <div class="list">
      <div class="item" @click="sexShow = true">
        性别
        <span>{{info.sex | sexType}}</span>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item">
        手机号
        <span>{{info.phone}}</span>
        <img class="icon" src="../../assets/img/more.png">
      </div>
    </div>
    <van-popup position="bottom" v-model="show">
      <div class="item-popup camera">
        拍照
        <input accept="image/*" capture="camera" class="file" type="file" @change="changeImg($event)">
      </div>
      <div class="item-popup album">
        本地相册
        <input class="file" name="file" type="file" @change="changeImg($event)">
      </div>
      <div @click="show = false" class="item-popup">取消</div>
    </van-popup>
    <van-popup v-model="nameShow" class="popup-name">
      <div class="item-name">
        <input type="text" placeholder="请输入名字" v-model="name">
      </div>
      <div class="item-btn">
        <button @click="nameShow = false">取消</button>
        <button @click="update('name',name)">确定</button>
      </div>
    </van-popup>
    <van-popup position="bottom" v-model="sexShow">
      <van-picker :columns="columns"
                  @confirm="selectConfirm"
                  @cancel="cancel"
                  show-toolbar title="选择性别"/>
    </van-popup>
  </div>
</template>
<script>
import headerNav from '@/components/header'
import { mapGetters } from 'vuex'
import { updateUser } from '@/api/update'
import { uploadImg } from '@/api/activity'
export default {
  name: 'profile',
  components: {
    headerNav
  },
  computed: {
    ...mapGetters(['info'])
  },
  data() {
    return {
      show: false,
      nameShow: false,
      name: '',
      sexShow: false,
      columns: [
        {
          text: '男',
          id: 1
        },
        {
          text: '女',
          id: 0
        }
      ]
    }
  },
  created() {
    this.name = this.info.name
    var ua = navigator.userAgent.toLowerCase()
    // 判断是否是苹果手机，是则是true
    var isIos = ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1
    if (isIos) {
      // $('input:file').removeAttr('capture')
    }
  },
  methods: {
    update(key, value) {
      var data = {}
      data[key] = value
      updateUser(data).then(res => {
        if (res.returnCode === '200') {
          this.$toast.success('修改成功!')
          var user = { ...this.info }
          user[key] = value
          this.nameShow = false
          this.show = false
          this.sexShow = false
          this.$store.dispatch('setInfo', user)
        }
      }).catch(() => {
        this.$toast.fail('修改失败!')
      })
    },
    changeImg(e) {
      var file = e.target.files[0]
      if (!/image\/(png|jpg|jpeg|gif)$/i.test(file.type)) {
        return false
      }
      var formData = new FormData()
      formData.append('file', file)
      uploadImg(formData).then(res => {
        if (res.returnCode === '200') {
          this.update('headImg', res.data.imgUrl)
        }
      })
    },
    cancel() {
      this.sexShow = false
    },
    selectConfirm(value) {
      this.update('sex', value.id)
    }
  },
  filters: {
    sexType(val) {
      if (!isNaN(val)) {
        var sex = ['女', '男']
        return sex[val]
      }
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
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
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
  line-height: 88 / @r;
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
  .popup-name {
    width: 90%;
    padding: 20/@r;
    background-color: #fff;
    border-radius: 10/@r;
    .item-name {
      position: relative;
      height: 88 / @r;
      line-height: 88 / @r;
      font-size: 28 / @r;
      overflow: hidden;
      input {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: none;
        padding-left: 20/@r;
      }
    }
    .item-btn {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      border: 1px solid #e0e0e0;
      border-radius: 8/@r;
      overflow: hidden;
    }
    button {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      font-size: 28/@r;
      background-color: #fff;
      height: 60/@r;
      border: none;
      &+button {
        border-left: 1px solid #e0e0e0;
      }
    }
  }
</style>

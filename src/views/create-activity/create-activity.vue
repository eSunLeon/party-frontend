<template>
  <div id="add_activity">
    <header-nav title="发起活动"></header-nav>
    <div class="title">
      <div class="theme">
        <input placeholder="请填写活动主题" type="text">
      </div>
      <div class="add-cover">
        <div class="add" :class="{'add-no-border': baseSrc}">
          <img :src="baseSrc" v-if="baseSrc" class="base-src">
          <img class="add-icon" src="./img/add.png" v-if="!baseSrc">
          <div class="text" v-if="!baseSrc">添加活动封面</div>
          <input class="file" type="file" @change="changeImg($event)"/>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item start" @click="startShow = true">
        <van-icon name="clock"></van-icon>
        活动时间
        <div class="start-time">2019-04-06</div>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item end" @click="endShow = true">
        <van-icon name="clock"></van-icon>
        报名截止时间
        <div class="end-time">2019-04-06</div>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item address">
        <van-icon name="location"></van-icon>
        活动地点
        <input class="input" placeholder="请输入地址" type="text">
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item money">
        费用金额
        <input class="input" placeholder="请输入费用金额" type="text">
        <div class="yun">元</div>
      </div>
      <div class="item person">
        <div class="name">
          负责人:
          <input class="name-input" placeholder="请输入姓名" type="text">
        </div>
        <div class="tel">
          <input class="tel-input" placeholder="请输入手机号码" type="number">
        </div>
      </div>
      <div class="item select" @click="selectShow = true">
        活动类型：请选择活动类型
        <img class="icon-bottom" src="./img/more_bottom.png">
      </div>
      <div class="describe">
        <div class=label>
          详细说明:
        </div>
        <div class="textarea">
          <textarea v-model="message" rows="4" placeholder="请输入详细说明"></textarea>
        </div>
      </div>
      <button class="submit">确认发布</button>
    </div>
    <van-popup
      :close-on-click-overlay="false"
      :overlay="true"
      position="bottom"
      v-model="startShow"
    >
      <van-datetime-picker
        :min-date="minStartDate"
        @confirm="confirmStart"
        @cancel="cancel"
        title="开始日期"
        type="date"
        v-model="startDate"
      />
    </van-popup>
    <van-popup :close-on-click-overlay="false" :overlay="true" position="bottom" v-model="endShow">
      <van-datetime-picker
        :min-date="minEndDate"
        @confirm="confirmEnd"
        @cancel="cancel"
        title="结束日期"
        type="date"
        v-model="endDate"
      />
    </van-popup>
    <van-popup :close-on-click-overlay="false" :overlay="true" position="bottom" v-model="selectShow">
      <van-picker :columns="columns"
      @confirm="selectConfirm"
      @cancel="cancel"
      show-toolbar title="选择活动类型"/>
    </van-popup>
  </div>
</template>

<script>
import headerNav from '@/components/header'
import { formatCustomDate } from '@/utils/index'
export default {
  name: 'createActivity',
  components: {
    headerNav
  },
  data() {
    return {
      baseSrc: null,
      minStartDate: new Date(),
      startDate: new Date(),
      startShow: false,
      endShow: false,
      endDate: new Date(),
      selectShow: false,
      columns: ['Q', 'W', 'R', 'Y'],
      params: {
        startDate: '',
        endDate: ''
      },
      message: null
    }
  },
  computed: {
    minEndDate() {
      return this.startDate
    }
  },
  methods: {
    confirmStart() {
      console.log(formatCustomDate(this.startDate, '-'))
      this.startShow = false
    },
    confirmEnd() {
      console.log(formatCustomDate(this.endDate, '-'))
      this.endShow = false
    },
    cancel() {
      this.startShow = false
      this.endShow = false
      this.selectShow = false
    },
    selectConfirm(value) {
      console.log(value)
    },
    changeImg(e) {
      var file = e.target.files[0]
      if (!/image\/(png|jpg|jpeg|gif)$/i.test(file.type)) {
        this.baseSrc = null
        return false
      }
      var reader = new FileReader()
      if (file) {
        reader.readAsDataURL(file)
      } else {
        this.baseSrc = null
      }
      var _this = this
      reader.onloadend = function() {
        _this.baseSrc = reader.result
      }
    }
  }
}
</script>

<style lang="less" scoped>
@r: 50rem;
.title {
  margin: 40 / @r 20 / @r 20 / @r;
  height: 278 / @r;
  border-radius: 10 / @r;
  background-color: #fff;
  padding: 20 / @r 40 / @r 0;
}
.theme {
  padding: 20 / @r 0;
  border-bottom: 2 / @r solid #f0f0f0;
  input {
    display: block;
    font-size: 28 / @r;
    height: 100%;
    width: 100%;
    border: none;
  }
}
.add-cover {
  padding-top: 29 / @r;
  font-size: 0;
  vertical-align: top;
}
.add {
  display: inline-block;
  position: relative;
  width: 200 / @r;
  height: 120 / @r;
  text-align: center;
  border: 2 / @r dashed #ccc;
  border-radius: 10 / @r;
  padding-top: 46 / @r;
  overflow: hidden;
  .base-src {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
  }
  .add-icon {
    width: 26 / @r;
  }
  .text {
    font-size: 22 / @r;
    color: #808080;
    margin-top: 14 / @r;
  }
  .file {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    opacity: 0;
  }
}
.add-no-border{
  border: none;
}
.list {
  padding: 0 20 / @r;
}
.item {
  padding-top: 20/@r;
  padding-bottom: 20/@r;
  position: relative;
  font-size: 26/@r;
  color: #666;
  background-color: #fff;
  border-radius: 10/@r;
  .icon {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 20 / @r;
    width: 13 / @r;
  }
  .van-icon {
    position: absolute;
    top: 50%;
    left: 21/@r;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 28/@r;
  }
}
.start {
  padding-left: 61 / @r;
 border-bottom: 2/@r solid rgba(230, 230, 230, 1);
  .van-icon {
    color: #0cd71a;
  }
}
.end {
  padding-left: 61 / @r;
  .van-icon {
    color: #df3031;
  }
  border-bottom: 2/@r solid rgba(230, 230, 230, 1);
}
.address {
  padding-left: 61 / @r;
 .van-icon {
    font-size: 31/@r;
    color: #808080;
  }
  margin-bottom: 19 / @r;
  .input {
    position: absolute;
    top: 0;
    height: 100%;
    right: 52 / @r;
    font-size: 26 / @r;
    color: #212121;
    text-align: right;
    border: none;
    width: 480 / @r;
  }
}
.start-time {
  position: absolute;
  top: 50%;
  right: 52 / @r;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 26 / @r;
  color: #0cd71a;
}
.end-time {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  right: 52 / @r;
  transform: translateY(-50%);
  font-size: 26 / @r;
  color: #df3031;
}

.money {
  padding-left: 20 / @r;
  margin-bottom: 10 / @r;
  .input {
    position: absolute;
    top: 0;
    height: 100%;
    right: 50 / @r;
    font-size: 26 / @r;
    color: #212121;
    text-align: right;
    border: none;
    width: 480 / @r;
  }
  .yun {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    right: 20 / @r;
    font-size: 26 / @r;
    transform: translateY(-50%);
  }
}
.person {
  padding:13/@r 20/@r;
  font-size: 0;
  margin-bottom: 10 / @r;
  .name {
    display: inline-block;
    height: 42 / @r;
    line-height: 42 / @r;
    font-size: 28 / @r;
    position: relative;
    width: 286 / @r;
    border-right: 1 / @r solid #cccccc;
    overflow: hidden;
  }
  .name-input {
    position: absolute;
    top: 50%;
    height: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 1px;
    width: 168 / @r;
    font-size: 26 / @r;
    border: none;
    color: #212121;
  }
  .tel {
    position: relative;
    display: inline-block;
    height: 42 / @r;
    line-height: 42 / @r;
    width: 375 / @r;
    background: url('./img/mobile.png') 20 / @r center no-repeat;
    background-size: 24 / @r 32 / @r;
  }
  .tel-input {
    position: absolute;
    top: 50%;
    left: 64 / @r;
    height: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 310/@r;
    font-size: 26 / @r;
    border: none;
    color: #212121;
  }
}
.select {
  position: relative;
  padding-left: 20 / @r;
  margin-bottom: 10 / @r;
  .icon-bottom {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 28 / @r;
    width: 23 / @r;
  }
}
.describe {
  padding: 18 / @r 15 / @r 16 / @r 20 / @r;
  background-color: #fff;
  border-radius: 10 / @r;
  margin-bottom: 61 / @r;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  font-size: 28 / @r;
  color: #666;
  .label {
    padding-top: 4/@r;
    width: 166/@r;
    max-width: 166/@r;
    font-size: 26/@r;
  }
  .textarea {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1
  }
  .textarea textarea{
  border: 0;
  margin: 0;
  line-height: 36/@r;
  width: 100%;
  resize: none;
  display: block;
  box-sizing: border-box;
  background-color: transparent;
  color: #212121;
  }
}
.submit {
  display: block;
  margin: 0 auto;
  width: 361 / @r;
  height: 76 / @r;
  background: rgba(223, 48, 49, 1);
  border-radius: 38 / @r;
  font-size: 32 / @r;
  color: #fff;
  border: none;
}
</style>

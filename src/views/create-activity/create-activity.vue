<template>
  <div id="add_activity">
    <header-nav title="发起活动"></header-nav>
    <div class="title">
      <div class="theme">
        <input placeholder="请填写活动主题" type="text" v-model="params.title">
      </div>
      <div class="add-cover">
        <div :class="{'add-no-border': params.mainImg}" class="add">
          <img :src="params.mainImg" class="base-src" v-if="params.mainImg">
          <img class="add-icon" src="./img/add.png" v-if="!params.mainImg">
          <div class="text" v-if="!params.mainImg">添加活动封面</div>
          <input @change="changeImg($event)" class="file" type="file">
        </div>
      </div>
    </div>
    <div class="list">
      <div @click="startShow = true" class="item start">
        <van-icon name="clock"></van-icon>活动开始时间
        <div class="start-time">{{params.activityTime | formatCustomDate('-')}}</div>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div @click="activeEndShow = true" class="item start">
        <van-icon name="clock"></van-icon>活动结束时间
        <div class="start-time">{{params.endTime | formatCustomDate('-')}}</div>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div @click="endShow = true" class="item end">
        <van-icon name="clock"></van-icon>报名截止时间
        <div class="end-time">{{params.signEndTime | formatCustomDate('-')}}</div>
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item address">
        <van-icon name="location"></van-icon>活动地点
        <input class="input" placeholder="请输入地址" type="text" v-model="params.site">
        <img class="icon" src="../../assets/img/more.png">
      </div>
      <div class="item money">
        	活动预算
        <input class="input" placeholder="请输入活动预算" type="number" v-model="params.cost">
        <div class="yun">元</div>
      </div>
      <div class="test">
        <div class="name">
          <div>负责人:</div>
          <input class="name-input" placeholder="请输入姓名" type="text" v-model="params.dutyName">
        </div>
        <div class="tel">
          <img src="./img/mobile.png">
          <input class="tel-input" placeholder="请输入手机号码" type="number" v-model="params.dutyPhone">
        </div>
      </div>
      <div @click="selectShow = true" class="item select">
        活动类型：
        <span style="color: #212121;" v-if="selectValue">{{selectValue}}</span>
        <span v-else>请选择活动类型</span>
        <img class="icon-bottom" src="./img/more_bottom.png">
      </div>
      <div @click="selectShowGas = true" class="item select">
        资金来源：
        <span style="color: #212121;" v-if="selectValueGas">{{selectValueGas}}</span>
        <span v-else>请选择资金来源</span>
        <img class="icon-bottom" src="./img/more_bottom.png">
      </div>
      <div class="describe">
        <div class="label">详细说明:</div>
        <div class="textarea">
          <textarea placeholder="请输入详细说明" rows="3" v-model="params.details"></textarea>
        </div>
      </div>
      <button @click="submit" class="submit">确认发布</button>
    </div>
    <van-popup
      :close-on-click-overlay="false"
      :overlay="true"
      position="bottom"
      v-model="startShow"
    >
      <van-datetime-picker
        :min-date="minStartDate"
        @cancel="cancel"
        @confirm="confirmStart"
        title="活动开始日期"
        type="datetime"
        v-model="startDate"
      />
    </van-popup>
    <van-popup
      :close-on-click-overlay="false"
      :overlay="true"
      position="bottom"
      v-model="activeEndShow"
    >
      <van-datetime-picker
        :min-date="startDate"
        @cancel="cancel"
        @confirm="confirmActiveEnd"
        title="活动结束日期"
        type="datetime"
        v-model="activeEndDate"
      />
    </van-popup>
    <van-popup :close-on-click-overlay="false" :overlay="true" position="bottom" v-model="endShow">
      <van-datetime-picker
        :max-date="startDate"
        :min-date="minStartDate"
        @cancel="cancel"
        @confirm="confirmEnd"
        title="报名截止日期"
        type="datetime"
        v-model="endDate"
      />
    </van-popup>
    <van-popup
      :close-on-click-overlay="false"
      :overlay="true"
      position="bottom"
      v-model="selectShow"
    >
      <van-picker
        :columns="columns"
        @cancel="cancel"
        @change="onChange"
        @confirm="selectConfirm"
        show-toolbar
        title="选择活动类型"
      />
    </van-popup>
    
    <van-popup position="bottom" v-model="selectShowGas">
      <van-picker :columns="gasFrom"
                  @confirm="gasFromFn"
                  @cancel="cancel"
                  show-toolbar title="选择资金来源"/>
    </van-popup>
  </div>
</template>

<script>
import headerNav from '@/components/header'
import { uploadImg, createActivity, activityTypeList } from '@/api/activity'
export default {
  name: 'createActivity',
  components: {
    headerNav
  },
  data() {
    return {
      minStartDate: new Date(),
      startDate: new Date(),
      startShow: false,
      endShow: false,
      endDate: new Date(),
      activeEndShow: false,
      activeEndDate: new Date(),
      selectShow: false,
      selectShowGas: false,
      selectValue: '',
      activityClass: {
        '党建': [],
        '社区': [],
        '通知': []
      },
      gasFrom: [{
      	text: '自筹资金',
      	id: 1
      }, {
      	text: '政府资金',
      	id: 2
      }, {
      	text: 'AA资金',
      	id: 3
      }],
      selectValueGas: '',
      columns: [],
      params: {
        title: '',
        mainImg: '',
        activityTime: new Date().getTime(),
        endTime: new Date().getTime(),
        signEndTime: new Date().getTime(),
        dutyName: '',
        dutyPhone: '',
        activityType: '',
        activityClass: '',
        details: '',
        site: '',
        cost: ''
      }
    }
  },
  computed: {
    maxEndDate() {
      return this.startDate
    }
  },
  created() {
    activityTypeList(1).then(res => {
      if (res.returnCode === '200') {
        for (let j = 0; j < res.data.length; j++) {
          res.data[j].text = res.data[j].name
        }
        this.activityClass['党建'] = [...res.data]
        activityTypeList(2).then(res => {
          if (res.returnCode === '200') {
            for (let j = 0; j < res.data.length; j++) {
              res.data[j].text = res.data[j].name
            }
            this.activityClass['社区'] = [...res.data]
            activityTypeList(3).then(res => {
              if (res.returnCode === '200') {
                for (let j = 0; j < res.data.length; j++) {
                  res.data[j].text = res.data[j].name
                }
                this.activityClass['通知'] = [...res.data]
                var test = [
                  {
                    values: Object.keys(this.activityClass),
                    className: 'column1'
                  },
                  {
                    values: this.activityClass['党内'],
                    className: 'column2'
                  }
                ]
                this.columns = test
              }
            })
          }
        })
      }
    })
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, this.activityClass[values[0]])
    },
    onChangeFn(picker, values) {
      picker.setColumnValues(1, this.activityClass[values[0]])
    },
    confirmStart() {
      this.params.activityTime = this.startDate.getTime()
      this.startShow = false
    },
    confirmActiveEnd() {
    	this.params.endTime = this.activeEndDate.getTime()
      this.activeEndShow = false
    },
    confirmEnd() {
      this.params.signEndTime = this.endDate.getTime()
      this.endShow = false
    },
    cancel() {
      this.startShow = false
      this.endShow = false
      this.selectShow = false
      this.selectShowGas = false
    },
    selectConfirm(value) {
      console.log(value)
      if (value[0] === '社区') {
        this.params.activityClass = 2
      } else if (value[0] === '党建'){
        this.params.activityClass = 1
      }
      this.params.activityType = value[1].id
      this.selectValue = value[1].text
      this.selectShow = false
    },
    gasFromFn(value) {
    	this.params.gasFrom = value.id
    	this.selectValueGas = value.text
    	this.selectShowGas = false
    },
    changeImg(e) {
      var file = e.target.files[0]
      if (!/image\/(png|jpg|jpeg|gif)$/i.test(file.type)) {
        this.params.mainImg = null
        return false
      }
      var formData = new FormData()
      formData.append('file', file)
      uploadImg(formData).then(res => {
        if (res.returnCode === '200') {
          this.$toast.success({
            message: '图片上传成功!',
            duration: 1500
          })
          this.params.mainImg = res.data.imgUrl
        }
      }).catch(() => {
        this.$toast.fail('图片上传失败!')
      })
    },
    notifyMsg(msg) {
      this.$notify({
        message: msg,
        duration: 1000,
        background: '#df3031'
      })
    },
    submit() {
      if (!this.params.title) {
        this.notifyMsg('请填写活动主题')
        return
      }
      if (!this.params.mainImg) {
        this.notifyMsg('请添加活动封面')
        return
      }
      if (!this.params.site) {
        this.notifyMsg('请填写活动地点')
        return
      }
      if (!this.params.cost) {
        this.notifyMsg('请填写费用金额')
        return
      }
      if (!this.params.dutyName) {
        this.notifyMsg('请填写负责人')
        return
      }
      if (!this.params.dutyPhone) {
        this.notifyMsg('请填写手机号码')
        return
      }
      if (!this.selectValue) {
        this.notifyMsg('请选择活动类型')
        return
      }
      createActivity(this.params).then(res => {
        if (res.returnCode === '200') {
          this.$toast.success({
            message: '创建成功!!',
            duration: 1500
          })
          this.selectValue = null
          this.params = {
            title: '',
            mainImg: '',
            activityTime: new Date().getTime(),
            signEndTime: new Date().getTime(),
            dutyName: '',
            dutyPhone: '',
            activityType: '',
            activityClass: '',
            details: '',
            site: '',
            cost: ''
          }
        }
      }).catch(() => {
        this.$toast.fail('创建失败!')
      })
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
    left: 0;
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
.add-no-border {
  border: none;
}
.list {
  padding: 0 20 / @r;
}
.item {
  padding-top: 20 / @r;
  padding-bottom: 20 / @r;
  position: relative;
  font-size: 28 / @r;
  color: #666;
  background-color: #fff;
  border-radius: 10 / @r;
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
    left: 21 / @r;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 28 / @r;
  }
}
.start {
  padding-left: 61 / @r;
  border-bottom: 2 / @r solid rgba(230, 230, 230, 1);
  .van-icon {
    color: #0cd71a;
  }
}
.end {
  padding-left: 61 / @r;
  .van-icon {
    color: #df3031;
  }
  border-bottom: 2 / @r solid rgba(230, 230, 230, 1);
}
.address {
  padding-left: 61 / @r;
  .van-icon {
    font-size: 31 / @r;
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
  padding: 13 / @r 20 / @r;
  height: 68/@r;
  font-size: 0;
  margin-bottom: 10 / @r;
  .name {
    position: absolute;
    top: 13/@r;
    left: 20/@r;
    width: 306/@r;
    height: 42 / @r;
    line-height: 42 / @r;
    font-size: 28 / @r;
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
    position: absolute;
    top: 13/@r;
    left: 329/@r;
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
    width: 310 / @r;
    font-size: 26 / @r;
    border: none;
    color: #212121;
  }
}
.test {
  padding: 13/@r 20/@r;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 68/@r;
  margin-bottom: 10 / @r;
  font-size: 28/@r;
  color: #666;
  background-color: #fff;
  border-radius: 10 / @r;
  .name{
    width: 286/@r;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 42/@r;
    -webkit-align-items: center;
    align-items: center;
    border-right: 1/@r solid #cccccc;
    overflow: hidden;
    div {
      width: 116/@r;
    }
    input{
      width: 168/@r;
      border: none;
    }
  }
  .tel {
    width: 370/@r;
    height: 42/@r;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 20/@r;
    img {
      height: 32/@r;
    }
    input {
      padding-left: 20/@r;
      width: 300/@r;
      border: none;
    }
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
    padding-top: 4 / @r;
    width: 146 / @r;
    max-width: 166 / @r;
    font-size: 28 / @r;
  }
  .textarea {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .textarea textarea {
    border: 0;
    margin: 0;
    line-height: 36 / @r;
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

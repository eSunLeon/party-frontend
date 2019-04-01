<template>
  <div id="add_activity">
    <header-nav title="发起活动"></header-nav>
    <div class="title">
      <div class="theme">
        <input type="text" placeholder="请填写活动主题">
      </div>
      <div class="add-cover">
        <!--<img src="" alt="">-->
        <div class="add">
          <img src="./img/add.png" class="add-icon"/>
          <div class="text">
            添加活动封面
          </div>
          <input type="file" class="file">
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item start">
        活动时间
        <div class="start-time">2019-04-06</div>
        <img src="../../assets/img/more.png" class="icon">
      </div>
      <div class="item end">
        报名截止时间
        <div class="end-time">2019-04-06</div>
        <img src="../../assets/img/more.png" class="icon">
      </div>
      <div class="item address">
        活动地点
        <input type="text" class="input" placeholder="请输入地址">
        <img src="../../assets/img/more.png" class="icon">
      </div>
      <div class="item money">
        费用金额
        <input type="text" placeholder="请输入费用金额" class="input">
        <div class="yun">
          元
        </div>
      </div>
      <div class="item person">
        <div class="name">
          负责人:
          <input type="text" placeholder="请输入姓名" class="name-input">
        </div>
        <div class="tel">
          <input type="number" placeholder="请输入手机号码" class="tel-input">
        </div>
      </div>
      <div class="item select">
        活动类型：请选择活动类型
        <img src="./img/more_bottom.png" class="icon-bottom"/>
      </div>
      <van-cell-group>
        <van-field
          v-model="message"
          label="详细说明："
          type="textarea"
          placeholder="请输入详细说明"
          rows="4"
          autosize
        />
      </van-cell-group>
      <button class="submit">确认发布</button>
    </div>
  </div>
</template>

<script>
  import headerNav from '@/components/header'
  export default {
    name: 'createActivity',
    components: {
      headerNav
    },
    data() {
      return {
        message: null
      }
    }
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .title {
    margin: 40/@r 20/@r 20/@r;
    height: 278/@r;
    border-radius: 10/@r;
    background-color: #fff;
    padding: 20/@r 40/@r 0;
  }
  .theme {
    padding: 20/@r 0;
    border-bottom: 2/@r solid #F0F0F0;
    input {
      display: block;
      font-size:28/@r;
      height: 100%;
      width: 100%;
      border: none;
    }
  }
  .add-cover {
    padding-top: 29/@r;
    font-size: 0;
    vertical-align: top;
  }
  .add {
    display: inline-block;
    position: relative;
    width: 200/@r;
    height: 120/@r;
    text-align: center;
    border: 2/@r dashed #ccc;
    border-radius: 10/@r;
    padding-top: 46/@r;
    overflow: hidden;
    .add-icon {
      width: 26/@r;
    }
    .text {
      font-size: 22/@r;
      color: #808080;
      margin-top: 14/@r;
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
  .list {
    padding: 0 20/@r;
  }
  .item {
    height: 68/@r;
    line-height: 68/@r;
    position: relative;
    font-size: 28/@r;
    color: #666;
    background-color: #fff;
    border-radius: 10/@r;
    .icon {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 20/@r;
      width: 13/@r;
    }
  }
  .start {
    padding-left: 61/@r;
    background:#fff url("./img/faqi_time.png") 21/@r center no-repeat;
    background-size: 20/@r;
    margin-bottom: 2/@r;
  }
  .end {
    padding-left: 61/@r;
    background:#fff url("./img/clock.png") 21/@r center no-repeat;
    background-size: 20/@r;
    margin-bottom: 2/@r;
  }
  .address {
    padding-left: 61/@r;
    background: #fff url("./img/location.png") 21/@r center no-repeat;
    background-size: 20/@r 25/@r;
    margin-bottom: 19/@r;
    .input {
      position: absolute;
      top: 0;
      height: 100%;
      right: 52/@r;
      font-size: 26/@r;
      color: #212121;
      text-align: right;
      border: none;
      width: 480/@r;
    }
  }
  .start-time {
    position: absolute;
    top: 50%;
    right: 52/@r;
    transform: translateY(-50%);
    font-size: 26/@r;
    color: #0CD71A;
  }
  .end-time {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    right: 52/@r;
    transform: translateY(-50%);
    font-size: 26/@r;
    color: #DF3031;
  }

  .money {
    padding-left: 20/@r;
    margin-bottom: 10/@r;
    .input {
      position: absolute;
      top: 0;
      height: 100%;
      right: 50/@r;
      font-size: 26/@r;
      color: #212121;
      text-align: right;
      border: none;
      width: 480/@r;
    }
    .yun {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      right: 20/@r;
      font-size: 26/@r;
      transform: translateY(-50%);
    }
  }
  .person {
    padding:13/@r 20/@r;
    font-size: 0;
    margin-bottom: 10/@r;
    .name {
      display: inline-block;
      height: 42/@r;
      line-height: 42/@r;
      font-size: 28/@r;
      position: relative;
      width: 286/@r;
      border-right: 1/@r solid #CCCCCC;
      overflow: hidden;
    }
    .name-input{
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 0;
      width: 168/@r;
      font-size: 26/@r;
      border: none;
    }
    .tel{
      position: relative;
      display: inline-block;
      height: 42/@r;
      line-height: 42/@r;
      width: 375/@r;
      background: url("./img/mobile.png") 20/@r center no-repeat;
      background-size: 24/@r 32/@r;
    }
    .tel-input{
      position: absolute;
      top: 50%;
      left: 64/@r;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 0;
      font-size: 26/@r;
      border: none;
    }
  }
  .select {
    position: relative;
    padding-left: 20/@r;
    margin-bottom: 10/@r;
    .icon-bottom {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 28/@r;
      width: 23/@r;
    }
  }
  .van-cell-group {
    padding: 22/@r 15/@r 16/@r 20/@r;
    background-color: #fff;
    border-radius: 10/@r;
    margin-bottom: 61/@r;
    .van-cell{
      font-size: 28/@r;
      color: #666;
      padding: 0;
    }
  }
  .submit {
    display: block;
    margin: 0 auto;
    width:361/@r;
    height:76/@r;
    background:rgba(223,48,49,1);
    border-radius:38/@r;
    font-size:32/@r;
    color: #fff;
    border: none;
  }
</style>

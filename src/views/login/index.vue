<template>
  <div>
    <div class="top">
      <img src="./img/login-logo.png" class="logo">
    </div>
    <div class="form-box">
      <div class="form-item">
        <img src="./img/user.png" class="user-icon">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <!--<div class="form-item input-small">
        <img src="./img/password.png" class="password-icon">-->
        <!--<input type="text" placeholder="请输入验证码" v-model="msg">-->
        <!--<button v-if="!sendSign" class="disable-btn">已发送({{time}}秒)</button>-->
        <!--<button v-if="sendSign" class="active-btn" @click="sending">获取验证码</button>-->
      <!--</div>-->
    </div>
    <button class="login-btn" @click="login">登录</button>
  </div>
</template>
<script>
  import { sendPhone, login } from '@/api/login'

  export default {
    name: 'login',
    data() {
      return {
        time: 60,
        sendSign: true,
        timer: null,
        phone: '',
        msg: '123456'
      }
    },
    methods: {
      login() {
        	console.log(123)
        login(this.phone).then(res => {
          if (res.returnCode === '200') {
            this.$store.dispatch('setUser', res.data)
            this.$router.push('/')
          }
        }).catch(() => {
          this.$toast.fail('验证失败!')
        })
      },
      sending() {
        if (!this.sendSign) {
          return
        }
        sendPhone(this.phone).then(res => {
          if (res.returnCode === '200' && res.data.state === 1) {
            this.sendSign = false
            this.timer = setInterval(() => {
              this.time--
              if (this.time === 0) {
                this.timer = null
                this.sendSign = true
                this.time = 60
              }
            }, 1000)
          } else {
            this.$toast.fail('信息发送失败!')
          }
        }).catch(() => {
          this.$toast.fail('信息发送失败!')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .top {
    height: 500/@r;
    background-color: #FE0000;
    text-align: center;
    padding-top: 224/@r;
    .logo {
      width: 177/@r;
    }
  }

  .form-box {
    margin-top: 50/@r;
    padding: 0 40/@r;
    border-bottom: 3/@r solid #EBEBEB;
    background-color: #fff;
    .form-item {
      position: relative;
      padding-left: 85/@r;
      input {
        display: block;
        border: none;
        font-size: 30/@r;
        color: #212121;
        padding: 43/@r 0;
        width: 100%;
      }
    }
    .input-small {
      border-top: 1px solid #F5F5F5;
      input {
        width: 50%;
      }
      button {
        position: absolute;
        top: 31/@r;
        right: 0;
        width: 200/@r;
        height: 56/@r;
        line-height: 56/@r;
        border-radius: 13/@r;
        font-size: 29/@r;
        border: none;
        color: #fff;
      }
    }
    .disable-btn {
      background: rgba(194, 194, 194, 1);
    }
    .active-btn {
      background: #FF3B3C;
    }
    .user-icon, .password-icon {
      position: absolute;
      height: 37/@r;
    }
    .password-icon {
      bottom: 42/@r;
      left: 21/@r;
    }
    .user-icon {
      bottom: 42/@r;
      left: 15/@r;
    }
  }

  .login-btn {
    display: block;
    width: 380/@r;
    height: 86/@r;
    background: rgba(254, 0, 0, 1);
    border-radius: 8/@r;
    border: none;
    margin: 118/@r auto 0;
    color: #fff;
    font-size: 34/@r;
  }
</style>

<template>
  <div>
    <header-nav title="设置"></header-nav>
    <div class="list">
      <div class="item">
        清理缓存
<!--        <div class="number">128MB</div>-->
      </div>
    </div>
    <button class="login-out" @click="loginOut">
      退出登录
    </button>
  </div>
</template>
<script>
  import headerNav from '@/components/header'
  import { mapGetters } from 'vuex'
  import { logout } from '@/api/login'
  import { removeLocal } from '@/utils/storage'
  export default {
    name: 'setting',
    components: {
      headerNav
    },
    computed: {
      ...mapGetters(['info'])
    },
    methods: {
      loginOut() {
        logout(this.info.phone).then(res => {
          if (res.returnCode === '200') {
            this.$store.dispatch('setUser', null)
            this.$store.dispatch('setInfo', null)
            removeLocal('user')
            removeLocal('info')
            this.$router.replace('/login')
            this.$toast.success({
              message: '退出成功!',
              duration: 1500
            })
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @r:50rem;
  .list {
    padding-top: 21/@r;
  }
  .item {
    background-color: #fff;
    position: relative;
    height: 91/@r;
    line-height: 91/@r;
    color: #1a1a1a;
    font-size: 26/@r;
    padding-left: 40/@r;
  }
  .number {
    position: absolute;
    top: 33/@r;
    right: 41/@r;
    color: #999;
    font-size: 26/@r;
  }
  .login-out {
    position: fixed;
    cursor: pointer;
    bottom: 131/@r;
    width:361/@r;
    height:76/@r;
    border: none;
    background:rgba(255,59,60,1);
    border-radius:38/@r;
    font-size: 32/@r;
    color: #fff;
    -webkit-transform: translate(50%);
    transform: translate(50%)
  }
</style>

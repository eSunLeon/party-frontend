<template>
  <div id="app" :style="{'background-color': backgroundColor}">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'App',
    computed: {
      ...mapGetters(['backgroundColor'])
    }
  }
</script>

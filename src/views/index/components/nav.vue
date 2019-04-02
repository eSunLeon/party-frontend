<template>
  <div class="nav">
    <input type="text" placeholder="输入关键字搜索活动" class="search">
    <img src="./img/search.png" class="search-icon"/>
    <img src="../../../assets/img/add.png" class="add" @click="$router.push('/create-activity')"/>
  </div>
</template>

<script>
  export default {
    name: 'navHeader'
  }
</script>

<style lang="less" scoped>
@r:50rem;
.nav{
  position: relative;
  height: 92/@r;
  padding-top: 19/@r;
  padding-left: 40/@r;
  background-color: #DF3031;
  .search {
    display: block;
    height: 54/@r;
    width: 570/@r;
    font-size: 22/@r;
    border-radius: 27/@r;
    border: none;
    padding-left: 79/@r;
  }
  .add{
    position: absolute;
    right: 40/@r;
    top: 21/@r;
    width: 52/@r;
    cursor: pointer;
  }
  .search-icon {
    position: absolute;
    left: 61/@r;
    top: 29/@r;
    width: 36/@r;
  }
}
</style>

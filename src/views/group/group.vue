<template>
  <div class="container">
    <top></top>
    <tab></tab>
  </div>
</template>
<script>
  import top from './components/top'
  import tab from './components/tab'
  export default {
    name: 'group',
    components: {
      top,
      tab
    }
  }
</script>


<template>
  <div id="app">
    <g-header></g-header>
    <router-view></router-view>
    <g-footer></g-footer>
  </div>
</template>

<script>
  import Header from '@/components/header/header'
  import Footer from '@/components/footer/footer'

  export default {
    name: 'app',
    components: {
      'g-header': Header,
      'g-footer': Footer
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>

<template>
  <header class="clearfix">
    <div class="logo fl">
      <a href="#/index">
        <img src="./logo.png" alt="logo图标">
      </a>
    </div>
    <ul class="fr">
      <li v-for="item in menu">
        <router-link :to="{path:item.href, activeClass: 'active'}">{{item.name}}</router-link>
        <!--<a :href="item.href">{{item.name}}</a>-->
      </li>
    </ul>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        menu: [{
          name: '首页',
          href: '/index',
          active: true
        }, {
          name: '企业动态',
          href: '/news',
          active: false
        }, {
          name: '关于我们',
          href: '/about',
          active: false
        }]
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  header {
    padding: 5px 15px;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
    .logo {
      width: 33px;
      height: 33px;
      img {
        width: 100%;
      }
    }
    ul {
      li {
        display: inline-block;
        margin: 12px 0 0 10px;
        &.active {
          a {
            color: #ff7300;
          }
        }
        a {
          font-size: 11px;
          color: #666;
          &.active{
            color: #ff7300;
          }
        }
      }
    }
  }

</style>

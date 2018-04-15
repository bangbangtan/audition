// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/routes'
import store from './vuex/store'

require('@/style/base/reset.css')
require('@/style/base/common.less')
require('@/common/rem')

Vue.config.productionTip = false
router.afterEach(function (transition) {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

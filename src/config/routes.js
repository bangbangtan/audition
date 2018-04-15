import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/index'
    }, {
      path: '/index',
      meta: {
        title: '首页'
      },
      name: 'Index',
      component: resolve => require(['@/pages/home/index'], resolve)
    }, {
      path: '/news',
      name: 'News',
      meta: {
        title: '新闻动态'
      },
      component: resolve => require(['@/pages/news/news'], resolve)
    }, {
      path: '/detail',
      name: 'Detail',
      component: resolve => require(['@/pages/newsdetail/detail'], resolve)
    }, {
      path: '/about',
      name: 'About',
      title: '关于我们',
      component: resolve => require(['@/pages/about/about'], resolve)
    }, {
      path: '/plan',
      name: 'Plan',
      title: '财税筹划',
      component: resolve => require(['@/pages/plan/plan'], resolve)
    }, {
      path: '/accuratePlan',
      name: 'Accurateplan',
      title: '财税筹划',
      component: resolve => require(['@/pages/accurateplan/accurateplan'], resolve)
    }, {
      path: '/story',
      name: 'Story',
      title: '财税筹划',
    component: resolve => require(['@/pages/story/story'], resolve)
}
  ]
})

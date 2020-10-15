import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 定义组件
import login from '@/views/login'
Vue.use(Router)

// 定义路由映射

// 创建router实例,
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './api'



//去调vue启动时的生产提示
  // Vue.config.productionTip=true

//引入外部组件
import LyTab from 'ly-tab'
// import VueAwesomeSwiper from 'vue-awesome-swiper'


import '../public/css/reset.css'

//申明使用
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 注册全局组件


Vue.use(LyTab)

Vue.config.productionTip = false // 去掉提示输出
/* eslint-disable no-new */
new Vue({
//   el: '#app',
  render: h => h(App),
  router, // 配置路由器
  store   //全局使用$store
}).$mount('#app')  //挂载到app

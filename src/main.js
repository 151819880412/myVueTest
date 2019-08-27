import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//表单验证的vue插件
import './validate'

import './mock/mock-server'


import './api'



//去调vue启动时的生产提示
  // Vue.config.productionTip=true

//引入外部组件
import LyTab from 'ly-tab'
// console.log(aaa.aaa()())

Vue.use(LyTab)

import '../public/css/reset.css'

//申明使用
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 注册全局组件



// Vue.use(VeeValidate)    //内部定义全局指令validate

Vue.config.productionTip = false // 去掉提示输出
/* eslint-disable no-new */
new Vue({
//   el: '#app',
  render: h => h(App),
  router, // 配置路由器
  store,   //全局使用$store
  LyTab, 
}).$mount('#app')  //挂载到app

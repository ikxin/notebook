// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入插件
import plugins from './plugins'
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins)

// 创建Vue实例对象
new Vue({
  el: '#app',
  render: h => h(App)
})

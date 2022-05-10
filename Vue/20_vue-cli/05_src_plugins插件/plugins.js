export default {
  install (Vue) {
    // 全局过滤器
    Vue.filter('slice', function (value) {
      return value.slice(0, 2)
    })

    // 全局自定义指令
    Vue.directive('focus', {
      // 指令与元素成功绑定时
      bind (element, binding) {
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted (element, binding) {
        element.focus()
      },
      // 指令所在的模板被重新解析时
      update (element, binding) {
        element.value = binding.value
      }
    })

    // 全局混入
    Vue.mixin({
      data () {
        return {
          a: 1,
          b: 2
        }
      }
    })

    // 给Vue原型添加方法
    Vue.prototype.hello = () => {
      alert('hello')
    }
  }
}

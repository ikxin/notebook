<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDOM">点击输出DOM</button>
    <School ref="school" />
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎学习Vue'
    }
  },
  components: {
    School
  },
  methods: {
    showDOM () {
      console.log(this.$refs.title) // 真实DOM元素
      console.log(this.$refs.school) // School组件的实例对象
    }
  }
}
</script>

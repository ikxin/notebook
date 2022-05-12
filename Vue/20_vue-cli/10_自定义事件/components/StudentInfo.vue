<template>
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">发送名字</button>
    <button @click="unbindEvent">解绑事件</button>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',
  data () {
    return {
      name: '张三',
      age: 18
    }
  },
  methods: {
    sendStudentName () {
      // 触发Student实例对象的test事件
      this.$emit('test', this.name)
    },
    unbindEvent () {
      // 解绑一个自定义事件
      this.$off('test')

      // 解绑多个自定义事件
      this.$off(['test', 'demo'])

      // 解绑所有自定义事件
      this.$off()
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: orange;
  padding: 10px;
}
button {
  margin-right: 10px;
}
</style>

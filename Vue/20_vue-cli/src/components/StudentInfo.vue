<template>
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">发送名称</button>
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
      this.$bus.$emit('hello', this.name)
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

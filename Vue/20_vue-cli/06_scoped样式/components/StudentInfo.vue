<template>
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
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
  }
}
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>

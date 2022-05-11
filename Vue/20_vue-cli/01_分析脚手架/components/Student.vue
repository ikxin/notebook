<template>
  <!-- 组件的结构代码 -->
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 组件的交互代码
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

<style>
/* 组件的样式代码 */
.demo {
  background-color: orange;
}
</style>

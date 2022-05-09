<template>
  <!-- 组件的结构代码 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
  </div>
</template>

<script>
// 组件的交互代码
export default {
  name: "School",
  data() {
    return {
      name: "清华大学",
      address: "中国北京",
    };
  },
};
</script>

<style>
/* 组件的样式代码 */
.demo {
  background-color: orange;
}
</style>
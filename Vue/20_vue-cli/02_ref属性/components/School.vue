<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: '清华大学',
      address: '中国北京'
    }
  }
}
</script>

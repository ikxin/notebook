<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
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
  },
  mounted () {
    this.$bus.$on('hello', (data) => {
      console.log(data)
    })
  },
  beforeDestroy () {
    this.$bus.$off('hello')
  }
}
</script>

<style lang="less" scoped>
.demo {
  background-color: pink;
  padding: 10px;
}
</style>

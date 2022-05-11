<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">发送名字</button>
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
  methods: {
    sendSchoolName () {
      this.getSchoolName(this.name)
    }
  },
  props: ['getSchoolName']
}
</script>

<style lang="less" scoped>
.demo {
  background-color: pink;
  padding: 10px;
}
</style>

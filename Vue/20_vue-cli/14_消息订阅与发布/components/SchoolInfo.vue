<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: '清华大学',
      address: '中国北京'
    }
  },
  mounted () {
    // this.$bus.$on('hello', (data) => {
    //   console.log(data)
    // })
    this.pubId = pubsub.subscribe('hello', function (msgName, data) {
      console.log('收到了消息，内容是：' + data)
    })
  },
  beforeDestroy () {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style lang="less" scoped>
.demo {
  background-color: pink;
  padding: 10px;
}
</style>

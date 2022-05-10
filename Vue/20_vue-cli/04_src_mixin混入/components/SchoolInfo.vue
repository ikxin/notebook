<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import { mixin, data } from '../mixin'
export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: '清华大学',
      address: '中国北京'
    }
  },
  mixins: [mixin, data],
  mounted () {
    console.log('world')
  }
}
</script>

<template>
  <div>
    <h2>{{ msg }}</h2>
    <div>学生名称：{{ name }}</div>
    <div>学生年龄：{{ myAge }}</div>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',
  data () {
    return {
      msg: '学生信息',
      myAge: this.age
    }
  },

  // 简单声明接收
  // props: ['name', 'age']

  // 接收时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number
  // }

  // 完整写法
  props: {
    name: {
      type: String, // 类型
      require: true // 必要
    },
    age: {
      type: Number,
      default: 18 // 默认值
    }
  },
  methods: {
    updateAge () {
      this.myAge++
    }
  }
}
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <SchoolInfo :getSchoolName="getSchoolName" />
    <hr />
    <StudentInfo v-on:test="getStudentName" />
    <!-- 只执行一次 -->
    <!-- <StudentInfo v-on:test.once="getStudentName" /> -->
    <hr />
    <!-- 绑定原生DOM事件需要加native修饰符 -->
    <StudentInfo ref="student" @click.native="showInfo" />
  </div>
</template>

<script>
import SchoolInfo from './components/SchoolInfo.vue'
import StudentInfo from './components/StudentInfo.vue'
export default {
  name: 'App',
  components: { SchoolInfo, StudentInfo },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    getSchoolName (name) {
      console.log('App收到了学校名称', name)
      this.name = name
    },
    getStudentName (name) {
      console.log('App收到了学生名称', name)
      this.name = name
    },
    showInfo () {
      console.log('点击了原生DOM事件')
    }
  },
  mounted () {
    this.$refs.student.$on('test', this.getStudentName)
    // 只执行一次
    // this.$refs.student.$once('test', this.getStudentName)
  }
}
</script>

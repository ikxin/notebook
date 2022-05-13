<template>
  <div>
    <h2>{{ name }}</h2>
    <SchoolInfo />
    <StudentInfo />
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
      name: 'hello'
    }
  }
}
</script>

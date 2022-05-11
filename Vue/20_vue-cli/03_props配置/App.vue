<template>
  <div>
    <StudentInfo name="张三" :age="18" />
    <hr />
  </div>
</template>

<script>
import StudentInfo from './components/StudentInfo.vue'
export default {
  name: 'App',
  components: { StudentInfo }
}
</script>

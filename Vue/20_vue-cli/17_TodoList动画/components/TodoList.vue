<template>
  <ul class="todo-main">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInRight"
      leave-active-class="animate__backOutRight"
    >
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </transition-group>
  </ul>
</template>

<script>
import 'animate.css'
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: ['todos']
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

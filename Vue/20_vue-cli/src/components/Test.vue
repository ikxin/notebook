<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__tada"
      leave-active-class="animate__backOutUp"
    >
      <h2 v-show="isShow" key="1">Hello World</h2>
      <h2 v-show="isShow" key="2">Hello World</h2>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'TestView',
  data () {
    return {
      isShow: true
    }
  }
}
</script>
<style scoped>
h2 {
  background-color: pink;
}
.hello-enter-active {
  animation: identifier 0.5s linear;
}
.hello-leave-active {
  animation: identifier 0.5s linear reverse;
}
@keyframes identifier {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>

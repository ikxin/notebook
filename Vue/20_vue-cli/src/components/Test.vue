<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h2 v-show="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
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
</style>

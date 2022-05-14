<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h2 v-show="isShow" key="1">Hello World</h2>
      <h2 v-show="isShow" key="2">Hello World</h2>
    </transition-group>
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

/* .hello-enter-active {
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
} */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进去的起点/离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点/离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>

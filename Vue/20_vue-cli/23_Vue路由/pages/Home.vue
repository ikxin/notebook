<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            to="/home/news"
            active-class="active"
          >
            News
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            to="/home/message"
            active-class="active"
          >
            Message
          </router-link>
        </li>
      </ul>
      <!-- 缓存路由组件（include写组件名） -->
      <keep-alive :include="['NewsView','MessageView']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  beforeDestroy () {
    console.log('组件即将被销毁')
  }
}
</script>

<template>
  <div class="layout-container">
      <!-- 顶部导航 -->
      <!-- 侧边导航 -->
      <sidebar-menu></sidebar-menu>
      <!-- 主体部分 -->
      <div class="layout-content">
        <navbar-top></navbar-top>
        <!-- <keep-alive v-if='$route.meta.keepAlive'>
          <router-view></router-view>
        </keep-alive> -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidebarMenu  from './components/Sidebar.vue';
import NavbarTop from './components/NavBarTop.vue'
export default defineComponent({
  name:"Layout",
  components:{
    SidebarMenu,
    NavbarTop
  }
})
</script>
<style lang="scss" scoped>
.layout-container{
  display: flex;
  height: 100%;
  .layout-content{
    width: 100%;
    background-color: #F8F8F8;
    padding: 20px;
  }
}
</style>
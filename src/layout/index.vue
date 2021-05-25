<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-03-12 11:29:03
 * @LastEditTime: 2021-05-25 10:28:29
 * @Description: Modify here please
-->
<template>
  <div class="layout-container">
      <!-- 顶部导航 -->
      <!-- 侧边导航 -->
      <sidebar-menu></sidebar-menu>
      <!-- 主体部分 -->
      <div class="layout-content">
        <navbar-top></navbar-top>
        <router-view v-slot='{ Component  }'>
          <component :is="Component" />
        </router-view>
      </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SidebarMenu  from './components/Sidebar.vue';
import NavbarTop from './components/NavBarTop.vue';
import { useRoute } from 'vue-router'
export default defineComponent({
  name:"Layout",
  components:{
    SidebarMenu,
    NavbarTop
  },
  setup(){
    const key = computed(()=>{
      return new Date();
    })
    console.log(new Date().toTimeString())
    return{
      key
    }
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
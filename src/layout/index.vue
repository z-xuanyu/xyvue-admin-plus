<template>
  <div class="layout-container">
      <!-- 侧边导航 -->
      <!-- 顶部导航 -->
      <!-- 主体部分 -->
      <div class="layout-content">
        <keep-alive v-if='$route.meta.keepAlive'>
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>
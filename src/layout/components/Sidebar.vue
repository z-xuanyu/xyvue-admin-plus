<template>
  <div class="sidebar-container">
    <!-- 导航主体 -->
    <el-menu
      default-active="1-4-1"
      class="sidebar-menu__vertical"
      @open="handleOpenMenu"
      @close="handleCloseMenu"
      :collapse="isCollapse"
    >
      <el-row type="flex" :justify="isCollapse?'center':'space-between'" class="navbar-logo">
        <el-link type="success" :underline="false">
          <div class="logo-content">
            <div class="brand-logo"></div>
            <h2 v-if="!isCollapse">WinWin</h2>
          </div>
        </el-link>
      </el-row>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>

      <!-- 导航底部 -->
    </el-menu>
    <el-row type="flex" :justify="isCollapse?'center':'space-between'" :style="{ padding:isCollapse?'40px 0':'40px 20px' }" class="navbar-footer">
      <el-avatar
        shape="square"
        :size="40"
        src="https://vuesax.com/avatars/avatar-5.png"
      ></el-avatar>
      <el-badge :value="12" class="item" v-if="!isCollapse">
        <el-button size="medium" class="navbar-footer-btn">
          <i class="el-icon-bell"></i>
        </el-button>
      </el-badge>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore , mapGetters} from 'vuex'
export default defineComponent({
  name: "Sidebar",
  setup() {
    // vuex中，侧边栏状态
    const store = useStore();
    const isCollapse =  computed(()=>{
       return store.getters.isCollapse
    })
    // 处理打开侧边导航栏
    const handleOpenMenu = () => {
      console.log("打开");
    };
    // 处理关闭侧边导航栏
    const handleCloseMenu = () => {
      console.log('关闭')
    };
    return {
      // ...toRefs(sidebarState),
      isCollapse,
      handleOpenMenu,
      handleCloseMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: relative;
  .sidebar-menu__vertical:not(.el-menu--collapse) {
    width: 250px;
    height: 100%;
    border-right: none;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 5%);
  }
  .navbar-logo {
    padding: 30px 20px;
    align-items: center;
    .logo-content {
      display: flex;
      align-items: center;
      .brand-logo {
        background: url("../../assets/vuexy-logo.png");
        background-position: -65px -54px;
        height: 24px;
        width: 35px;
      }
      h2 {
        margin-left: 10px;
        color: #7367f0;
        font-size: 24px;
      }
    }
  }
  .navbar-footer {
    position: absolute;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    .navbar-footer-btn {
      padding: 10px;
      border-radius: 10px;
    }
  }
}
</style>
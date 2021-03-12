<template>
  <div class="navbar-container">
      <div class="navbar-left">
        <i @click="handleToggleSideBar" class="el-icon-s-unfold collapse-icon"></i>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { useStore } from "vuex";
export default defineComponent({
    name:"Navbar",
    setup(){
        const store = useStore();
        //处理切换侧边栏
        const handleToggleSideBar = ()=>{
            store.dispatch("toggleSideBar")
        }

        return {
            handleToggleSideBar
        }
    }
})
</script>

<style lang="scss" scoped>
.navbar-container{
    height: 60px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .navbar-left{
        .collapse-icon{
            font-size: 24px;
            color: #409eff;
            cursor: pointer;
        }
    }
}
</style>
<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
<style>
  #app{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
</style>
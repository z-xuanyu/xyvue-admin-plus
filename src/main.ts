import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import router from './router'
import 'reset-css'
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';

createApp(App).use(router).use(ElementPlus).mount('#app')

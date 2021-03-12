import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [

  {
    path:"/",
    component:() => import("../layout/index.vue"),
    redirect:'/home',
    meta:{
      title:"Layout",
      keepAlive:true,
    },
    children:[
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
          keepAlive: true
        },
        component: () => import('../view/home/index.vue'),
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../view/login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
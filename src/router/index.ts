import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layout/index.vue"
const routes: Array<RouteRecordRaw> = [

  // 路由说明
  {
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
          keepAlive: true,
          hideChildrenInMenu: true,
          icon: "el-icon-menu",
        },
        component: () => import('../view/home/index.vue'),
      },
    ]
  },
  {
    path: "/admin",
    component: Layout,
    redirect: '/admin/index',
    children: [
      {
        path: "/admin/index",
        name: "index",
        meta: {
          title: "管理员列表",
          keepAlive: true,
          icon: "el-icon-menu"
        },
        component: () => import('../view/admin/index.vue')
      },
      {
        path: "/admin/edit",
        name: "Edit",
        meta: {
          title: "编辑管理员",
          keepAlive: true,
          hideChildrenInMenu: false,
          icon: "el-icon-menu"
        },
        component: () => import('../view/admin/edit.vue')
      }
    ]

  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
      hidden: true
    },
    component: () => import("../view/login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HelloWorld = () => import("@/components/HelloWorld.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    meta: {
        title: "首页",
    },
    component: HelloWorld,
  },
  {
    path: "/table",
    name: "table",
    meta: {
        title: "路由页",
    },
    component: () => import ('@/views/table.vue'),
  },
  {
    path: "/helloworld",
    name: "helloworld",
    meta: {
        title: "helloworld",
    },
    component: HelloWorld,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
        title: "登陆",
    },
    component: () => import('@/components/login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;


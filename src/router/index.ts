import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { constantArray } from '@/router/module/contant'


const routes: Array<RouteRecordRaw> = constantArray

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;


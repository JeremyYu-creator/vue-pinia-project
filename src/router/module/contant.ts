const HelloWorld = () => import("@/components/HelloWorld.vue");

const constantArray = [
    {
      path: "/",
      name: "index",
      meta: {
          title: "首页",
      },
      component: HelloWorld
    },
    {
      path: "/table",
      name: "1-1",
      meta: {
          title: "路由页",
      },
      component: () => import ('@/views/table.vue'),
    },
    {
      path: "/map",
      name: "1-2",
      meta: {
          title: "map",
      },
      component: () => import ('@/views/map.vue'),
    },
    {
        path: "/chart",
        name: "2-1",
        meta: {
            title: "chart",
        },
        component: () => import ('@/views/chart.vue'),
    },
    {
        path: "/form",
        name: "3-1",
        meta: {
            title: "form",
        },
        component: () => import ('@/views/form.vue'),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
          title: "登陆",
      },
      component: () => import('@/components/login.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/components/404.vue')
      },
      {
        path: '/:pathMatch(.*)',
        redirect: '/404'
      }
  ];
export { constantArray }
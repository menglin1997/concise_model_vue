import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    redirect: "/Basics",
    component: login
  },
  {
    path: "/login",
    name: "login",
    // redirect: "/Basics",
    component: login
  },
  {
    path: "/Basics",
    name: "Basics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/Basics.vue"),
    children: [
      //首页
      {
        path: "/Basics",
        component: () => import("@/views/HomePage/HomePage"),
        name: "HomePage",
        meta: {
          title: "HomePage"
        }
      },
      // 搜索
      {
        path: "/search",
        component: () => import("@/views/HomePage/search"),
        name: "search",
        meta: {
          title: "search"
        }
      },
      //会议
      {
        path: "/meeting",
        component: () => import("@/views/meeting/main"),
        name: "main",
        meta: {
          title: "main"
        },
        children: [
          {
            path: "/meeting",
            component: () => import("@/views/meeting/meeting"),
            name: "meeting",
            meta: {
              title: "meeting"
            }
          }
        ]
      },
      //操作管理
      {
        path: "/main",
        component: () => import("@/views/system/main"),
        name: "main",
        redirect: "/system",
        meta: {
          title: "main"
        },
        children: [
          {
            path: "/system",
            component: () => import("@/views/system/system"),
            name: "system",
            meta: {
              title: "system"
            }
          }
        ]
      },
      //文件柜管理
      {
        path: "/FileCabinet",
        component: () => import("@/views/FileCabinet/FileCabinet"),
        name: "FileCabinet",
        meta: {
          title: "FileCabinet"
        }
      },
      // {
      //   path: '/FileCabinet',
      //   component: () => import('@/views/FileCabinet/main'),
      //   name: 'main',
      //   meta: {
      //     title: 'main'
      //   },
      //   children: [{
      //     path: '/FileCabinet',
      //     component: () => import('@/views/FileCabinet/FileCabinet'),
      //     name: 'FileCabinet',
      //     meta: {
      //       title: 'FileCabinet'
      //     }
      //   }]
      // },
      //通讯录
      {
        path: "/contact",
        component: () => import("@/views/contact/contact"),
        name: "contact",
        meta: {
          title: "contact"
        }
      }
      // {
      //   path: '/contact',
      //   component: () => import('@/views/contact/main'),
      //   name: 'main',
      //   meta: {
      //     title: 'main'
      //   },
      //   children: [{
      //     path: '/contact',
      //     component: () => import('@/views/contact/contact'),
      //     name: 'contact',
      //     meta: {
      //       title: 'contact'
      //     }
      //   }, {
      //     path: '/oftenGrouping',
      //     component: () => import('@/views/contact/oftenGrouping'),
      //     name: 'oftenGrouping',
      //     meta: {
      //       title: 'oftenGrouping'
      //     }
      //   }]
      // },
      //测试
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem("token");
  console.log(to, "to");
  if (to.path != "/login") {
    if (token) {
      return next();
    } else {
      return next("/login");
    }
  } else {
    return next();
  }
});
console.log(process.env.BASE_URL, " process.env.BASE_URL");

export default router;

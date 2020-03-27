import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    meta:{
      pageMsg:{
        tabbar:true,  //tabbar是否加载
        page_title: "首页", //NavBar标题
        page_search: true //是否显示search
      }
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta:{
      pageMsg:{
        tabbar:true,
        page_title: "about",
        page_search: false
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/test", 
    name:"Test", 
    meta:{
      pageMsg:{
        tabbar:true
      }
    },
    // component: () => import("../view/Test.vue")
    // component:Test
    component: resolve => require(['../views/Test.vue'], resolve)
  },
  {
    path:"/search", 
    name:"Search", 
    meta:{
      pageMsg:{
        page_title:null,
        page_search:true
      }
    },
    component: resolve => require(['../views/Search.vue'], resolve)
  },
  {
    path:"/mine", 
    name:"Mine", 
    meta:{
      pageMsg:{
        tabbar:true,
        page_title:'我的',
        page_search:false
      }
    },
    component: resolve => require(['../views/Mine.vue'], resolve)
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

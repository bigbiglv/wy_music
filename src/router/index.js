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
        page_title: "首页" //NavBar标题
      }
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta:{
      pageMsg:{
        page_title: "about"
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/artist", 
    name:"Artist", 
    meta:{
      pageMsg:{
        page_title:"歌手 "  
      }
    },
    // component: () => import("../view/Test.vue")
    // component:Test
    component: resolve => require(['../views/Artist.vue'], resolve)
  },
  {
    path:"/search", 
    name:"Search", 
    meta:{
      pageMsg:{
        page_title:null  
      }
    },
    component: resolve => require(['../views/Search.vue'], resolve)
  },
  {
    path:"/mine", 
    name:"Mine", 
    meta:{
      pageMsg:{
        page_title:"我的音乐"    
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

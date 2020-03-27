<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <NavBar  v-if="$route.meta.keepAlive" v-bind:msg=this.$options.name></NavBar> -->
    <transition mode="out-in" name="slideright">
      <router-view />
    </transition>
    <!-- v-if判断组件是否需要加载 -->
    <TabBar  v-if="tabShow" ></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
// import NavBar from "@/components/NavBar.vue";
export default {
  name: "Home",
  data(){
    return{
      tabShow: true
    }
  },
  components: {
    TabBar,
    // NavBar
  },
  methods:{
  },
  created(){
  },
  watch:{
    '$route' (){ 
      //监听路由路径判断是否加载TabbBar
      if(this.$route.path=="/" || this.$route.path=="/about" || 
         this.$route.path=="/test" ||this.$route.path=="/mine"){
        this.tabShow=true
        }else{
        this.tabShow=false
        }
    }
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  .app{
    position: relative;
    top: 60px;
  }
  #app{
    .slideright-enter-active, .slideright-leave-active{
      transition: all 0.1s;
    }
    .slideright-enter, .slideright-leave-to{
      opacity: 0.4;
    }
  }
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

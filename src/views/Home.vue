<template>
  <div class="home">
    <NavBar></NavBar>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="app">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <p>{{s1}}</p>
      <router-link to="test1" tag="h1">test1</router-link>
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
      <h1>我是home</h1> 
    </div>
    <!-- <TabBar></TabBar> -->
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Home",
  data(){
    return{
      s1:this.$route.meta.pageMsg.tabbar
    }
  },
  methods:{
  },
  components: {
    // HelloWorld,
    // TabBar,
    NavBar
  }
};
</script>
<style lang="scss" scoped>
  .home{
    .app{
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
      }
    }
  }
</style>

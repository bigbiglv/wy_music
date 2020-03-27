<template>
  <div class="about">
    <NavBar></NavBar>
    <div class="app">
      <h1>这里是about</h1>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "About",
  data(){
    return{
    }
  },
  components: {
    NavBar
  }
};
</script>
<style lang="scss" scoped>
  .about{
    .app{
      position: relative;
      top:80px;
    }
  }
</style>

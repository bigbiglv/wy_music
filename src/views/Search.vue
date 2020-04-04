<template>
  <div>
   <!-- <NavBar></NavBar> -->
    <h1 @click="f1">我是search</h1>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
export default {
  name:"Search",
  data(){
    return{
      value:""
    }
  },
  components:{
    // NavBar
  },
  methods:{
    f1(){console.log("我是search的"+this.value);
      console.log(1)
    }
  },
  created(){
    this.f1()
  }
}
</script>

<style>

</style>
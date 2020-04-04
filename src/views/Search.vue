<template>
  <div>
   <!-- <NavBar></NavBar> -->
    <h1 @click="getSearch">我是search</h1>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
export default {
  name:"Search",
  data(){
    return{
      value:"",
      searchMsg:[]
    }
  },
  components:{
  },
  methods:{
    getSearch(){
      //获取NAvBar的serach的值
      this.$eventBus.on(
        "searchMsg", 
        function(data){ 
          this.value=data;
          console.log("11212"+this.value);
          //调用接口获取search的数据
          var url="http://localhost:3000/search?keywords="+this.value;
          this.axios(url).then(result=>{
          // this.searchMsg=result.data.banners;
          console.log(result)
			    });
        }
      );
    }
  },
  created(){
    this.getSearch()
    // this.getSearch()
  },
  watch:{
    
  }
}
</script>

<style>

</style>
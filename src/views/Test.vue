<template>
  <!-- <router-view></router-view> -->
  <div class="test">
		
		我是test{{s1}}
	</div>
</template>

<script>
export default {
	name: "Test",
  data(){
    return{
			value:"",
			s1:this.$route.meta.pageMsg.tabbar
    }
  }
};
</script>

<style scoped>
	.test{
		width: 100%;
		height: 60px;
		background-color: #fff;
	}
</style>
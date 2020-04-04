<template>
	<van-tabbar route v-model="active">
  	<van-tabbar-item replace to="/" icon="home-o">home</van-tabbar-item>
  	<van-tabbar-item replace to="/about" icon="search">about</van-tabbar-item>
  	<van-tabbar-item replace to="/test" icon="search">标签</van-tabbar-item>
  	<van-tabbar-item replace to="/mine" icon="contact">我</van-tabbar-item>
	</van-tabbar>
</template>

<script>
export default {
	data(){
		return{
			active:""
		}
	},
  methods:{
  },
  created(){
  }
}
</script>

<style>

</style>

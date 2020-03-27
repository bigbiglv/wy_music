<template>
	<div class="nav">
		<p class="a1">{{this.$route.meta.pageMsg.page_title}}</p>
		<!-- <input type="text" v-if=isshow> -->
		<van-search 
			placeholder="请输入搜索关键词" 
			background="#ddd" 
			style="flex-grow: 10;"
			shape="round"
			maxlength=10
			input-align="center"
			v-model="value" 
			v-if="this.$route.meta.pageMsg.page_search"
			@focus="onFocus" 
			@search="onSearch"
			@cancel="onCancel"
			/>

  </div>
</template>

<script>
export default {
	name:'Navbar',
	data(){
		return{
			value:""
		}
	},
	props: {
		
	},
	methods:{
		//获取搜索框跳转到seach组件
		onFocus(){
			this.$router.push({path:'/search'});
		},
		onSearch(val){
			console.log("搜索了"+val)
		},
		onCancel(){
			console.log("触发了取消按钮")
		},
		isShow1(){
			// if(this.$route.name=="Home" || this.$route.name=="Home")
		}
		

	},
	created(){
		this.isShow1();
	}
}
</script>

<style lang="scss" scoped>

.nav {
	display: flex;
	width: 100%;
	height: 60px;
	font-size: 22px;
	background-color: #ddd;
	position: fixed;
	align-items: center;
	justify-content: space-around;
	z-index: 100;
	p{
		flex-grow: 1;
		padding-left: 10px;
		font-weight: 600;
	}
	// .van-search{
		// flex-grow: 8;
	// }
	
}
</style>
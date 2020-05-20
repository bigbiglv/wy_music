<template>
    <div class="test">
      <audio controls>
        <source src="https://music.163.com/song/media/outer/url?id=405998841.mp3" type="audio/ogg">
        您的浏览器不支持 audio 元素。
      </audio>
    </div>
  
</template>

<script>
export default {
  name:'Play',
  data(){
    return{
      
    }
  },
  methods:{
    //传入音乐id获取音乐播放链接
    // getUrl(){
    //   var url='http://localhost:3000/'
    // }
  }
}
</script>

<style lang="scss" scoped>
  
    .test{
      width: 100%;
      height: 60px;
      border: 1px solid #333;
      box-sizing: border-box;
    }
</style>
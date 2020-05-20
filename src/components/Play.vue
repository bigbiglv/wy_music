<template>
  <div class="play">
    <audio controls id="audio">
      <source :src="url" type="audio/ogg">
      您的浏览器不支持 audio 元素。
    </audio>
    <div class="btn" @click="status">
     {{text}}
    </div>
    <div class="btn" @click="setId(1446235247)">
      1446235247
    </div>
    <div class="btn" @click="setId(1440443944)">
      1440443944
    </div>
    <div class="btn" @click="bowan">
      完了？
    </div>
    <p>{{id}}</p>  
  </div>
</template>

<script>
export default {
  name:'Play',
  data(){
    return{
      text:'播放',
      audio:'',
      id:'',
      playList:[1436709403,1442508316,1446764662]  //,,
    }
  },
  methods:{
    //获取音乐url
    // getUrl(){
    //   var url=`http://localhost:3000/song/url?id=${this.id}`;
    //   this.axios(url).then(result=>{
    //     this.url=result.data.data[0].url;
    //     console.log(result)
    //     console.log(this.url)
    //   });

    // },
    getId(){
      //输出有没有播放完毕
      // setInterval(function(){
      //   console.log(document.getElementById('audio').ended)
      // },1000);
      console.log(document.getElementById('audio')+'1')
      var j=0;
      for(var i=0;i<this.playList.length;i++){
        // this.id=this.playList[j];
        //如果播放完毕就切换id
        if(document.getElementById('audio').ended){
          this.id=this.playList[j+1];
          console.log('博文')
        }else{
        this.id=this.playList[j];

        }
      }

    },
    //点击改变this.id
    setId(val){
      this.id=val;
    },
    //控制暂停播放
    status(){
      if(document.getElementById('audio').paused){
        document.getElementById('audio').play();
        this.text='暂停';
      }else{
        document.getElementById('audio').pause();
        this.text='播放'
      }
    },
    bowan(){
      console.log(document.getElementById('audio').ended)
    }
  },
  created(){
    // this.getUrl();
    this.getId()
  },
  watch:{
    id(){
      console.log('id改变了');
      document.getElementById('audio').load();
    }
  },
  computed:{
    url(){
      return `https://music.163.com/song/media/outer/url?id=${this.id}.mp3 `
    }
  }
}
</script>

<style lang="scss" scoped>
.play{
  width: 100%;
  height: 100px;
  border: 1px solid #333;
  background-color: #fff;
  box-sizing: border-box;
  position: fixed;
  bottom: 60px;
  .btn{
    display: inline;
    border: 1px solid #333;
    background-color: #fff;
  }

}
</style>
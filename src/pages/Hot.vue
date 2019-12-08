
<template>
  <div class="hot-con">
    <div class="hotopct">
      <div class="mask"></div>
      <div class="hoticon"></div>
      <div class="hot-time">更新日期：{{data|dateFormat}}</div>
    </div>
<div v-for="(h,index) in hotList" :key="index">
  <router-link :to="{name:'play',params:{id:h.id}}" class="new-song clearfix">
      <div class="num" v-if="index<9">0{{index+1}}</div>
      <div class="num" v-else>{{index+1}}</div>
      <div class="song-con">
        <p class="name">{{h.name}}<span v-if="h.alia[0]">({{h.alia[0]}})</span></p>
        <div class="actor">
          <span></span>
          <p>{{h.ar[0].name}}-{{h.al.name}}</p>
        </div>
      </div>
      <div class="play-icon">
        <span></span>
      </div>
    </router-link>
</div>
    

    <router-view></router-view>
  </div>
</template>

<script >
/*eslint-disable */
export default {
  data() {
    return {
      data: new Date().getTime(),
      hotList: []
    };
  },
  filters: {
    dateFormat(val) {
      let date = new Date(val);
      let m = date.getMonth() + 1;
      let d = date.getDate();
      if (d < 10) {
        d = "0" + d;
      }
      return m + "月" + d + "日";
    }
  },
  mounted() {
    this.axios.get("http://localhost:3000/top/list?idx=1").then(res => {
      this.hotList = res.data.playlist.tracks.slice(0, 20);
      console.log(this.hotList);
    });
  }
};
</script>

<style scoped>
.hotopct {
  position: relative;
  width: 100%;
  height: 2.49rem;
  background: url(../assets/images/hot-bg.jpg) no-repeat;
  background-size: 100%;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}
.hotopct .hoticon {
  position: absolute;
  top: 0.77rem;
  left: 0.2rem;
  width: 1.42rem;
  height: 0.67rem;
  z-index: 2;
  background: url(../assets/images/index-tj.png) -0.24rem -0.3rem no-repeat;
  background-size: 1.66rem 0.97rem;
}
.hot-time {
  position: absolute;
  top: 1.55rem;
  left: 0.2rem;
  z-index: 2;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.12rem;
}
.new-song .num {
  float: left;
  width: 0.45rem;
  height: 100%;
  text-align: center;
  line-height: 0.42rem;

  color: #999;
  font-size: 0.17rem;
}
.new-song {
  width: 100%;
  padding: 0.06rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.song-con {
  float: left;
  font-size: 0.17rem;
}
.song-con .name {
  height: 0.25rem;
  line-height: 0.25rem;
}
.song-con .actor {
  font-size: 0.12rem;
  color: #888;
}
.actor span {
  display: inline-block;
  width: 0.12rem;
  height: 0.08rem;
  background: url(../assets/images/index-tj.png) no-repeat;
  margin-right: 0.04rem;
  background-size: 1.66rem 0.97rem;
}
.actor p {
  display: inline-block;
  height: 0.18rem;
  line-height: 0.18rem;
}
.play-icon {
  float: right;
  height: 100%;
  width: 0.22rem;
  padding: 0 0.1rem;
}
.play-icon span {
  display: inline-block;
  width: 0.22rem;
  height: 0.22rem;
  margin-top: 0.085rem;
  background: url(../assets/images/index-tj.png) -0.24rem 0 no-repeat;
  background-size: 1.66rem 0.97rem;
}
.name span{
    color: #888;
    margin-left: .04rem;
}

.new-song:nth-child(2) .num{
  color: #df3436;
}
.new-song:nth-child(3) .num{
  color: #df3436;
}
.new-song:nth-child(4) .num{
  color: #df3436;
}
</style>

<template>
  <div class="tj-con">
    <h2 class="title">推荐歌单</h2>
    <div class="list clearfix">
      <router-link to="/index/tuijian/detail" class="list-item" v-for="tj in tjlist" :key="tj.id">
        <div class="img-box">
          <img :src="tj.picUrl" alt />
          <div class="num">
            <span class="iconfont icon-erji"></span>134.9万
          </div>
        </div>
        <p class="txt">{{tj.name}}</p>
      </router-link>
    </div>

    <h2 class="title1">最新音乐</h2>
    <div class="new-song-list clearfix">
      <div v-for="ns in newSong" :key="ns.id">
        <router-link :to="{name:'play',params:{id:ns.id}}" class="new-song clearfix">
          <div class="song-con">
            <p class="name">{{ns.name}}</p>
            <div class="actor">
              <span></span>
              <p>{{ns.song.artists[0].name}}-{{ns.song.album.name}}</p>
            </div>
          </div>
          <div class="play-icon">
            <span></span>
          </div>
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script >
/*eslint-disable*/
export default {
  data() {
    return {
      tjlist: [],
      newSong: []
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/personalized?limit=6").then(res => {
      //   console.log(res);
      this.tjlist = res.data.result;
    });
    this.axios.get("http://localhost:3000/personalized/newsong").then(res => {
      console.log(res);
      this.newSong = res.data.result;
    });
  }
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_1206177_dlg976yox8r.css");

.title {
  position: relative;
  font-size: 0.17rem;
  padding-left: 0.09rem;
  height: 0.2rem;
  line-height: 0.2rem;
  margin-bottom: 0.14rem;
  padding-top: 0.2rem;
}
.title1 {
  position: relative;
  font-size: 0.17rem;
  padding-left: 0.09rem;
  height: 0.2rem;
  line-height: 0.2rem;
  margin-bottom: 0.14rem;
}
.title1::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.07rem;
  width: 0.02rem;
  height: 0.16rem;
  background-color: #d33a31;
}
.title::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: 0.03rem;
  width: 0.02rem;
  height: 0.16rem;
  background-color: #d33a31;
}
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 0.24rem;
}
.list-item {
  /* float: left; */
  width: 2.11rem;
  margin-bottom: 0.16rem;
}
.list-item .img-box {
  position: relative;
  width: 2.11rem;
  height: 2.11rem;
}
.img-box .num {
  position: absolute;
  top: 0.02rem;
  right: 0.05rem;
  z-index: 10;
  color: #fff;
  font-size: 0.12rem;
  font-weight: 500;
}
.num span {
  font-size: 0.12rem;
}
.list-item .img-box img {
  width: 100%;
  height: 100%;
}
.list-item .txt {
  padding: 0.06rem 0.02rem 0 0.06rem;
  color: #333;
  font-size: 0.13rem;
}
.new-song {
  width: 100%;
  /* height: .42rem; */
  padding: 0.06rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.song-con {
  /* width: 4rem; */
  padding-left: 0.1rem;
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
</style>

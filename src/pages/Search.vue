<template>
  <div>
    <div class="search-con">
      <div class="input-box">
        <span class="search-icon iconfont icon-sousuo"></span>
        <input type="text" v-model="txt" placeholder="搜索歌曲、歌手、专辑" @keyup="getFn()" />
        <span class="cha iconfont icon-cha-" v-show="showCha" @click="clearFn"></span>
      </div>
    </div>

    <div class="key-word">
      <div class="hot-search" v-show="searchShow">
        <p class="title">热门搜索</p>
        <router-link
          to="/index/search/searchList"
          class="item-list"
          v-for="(s,index) in searchList"
          :key="index"
        >{{s.first}}</router-link>
      </div>

      <div class="result" v-show="resShow">
        <div class="ss-txt">
          <span>搜索"{{txt}}"</span>
        </div>
        <div v-for="k in keywords" :key="k.id"  class="list">
          <router-link to="/search/searCon">
              <div class="list-item">
                  <span class="sicon iconfont icon-sousuo"></span>
                  <span class="ss-con">{{k.name}}</span>
              </div>
          </router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  data() {
    return {
      searchList: [],
      keywords:[],
      txt: "",
      showCha: false,
      searchShow: true,
      resShow: false
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/search/hot").then(res => {
      this.searchList = res.data.result.hots;
      console.log(this.searchList);
    });
  },
  methods: {
    getFn() {
      if (this.txt) {
        this.axios.get('http://localhost:3000/search?keywords='+this.txt)
        .then(res=>{
          this.keywords=res.data.result.songs;
          console.log(this.keywords);
          
        })
        this.showCha = true;
        this.searchShow = false;
        this.resShow = true;
      } else {
        this.showCha = false;
        this.searchShow = true;
        this.resShow = false;
      }
    },
    clearFn() {
      this.txt = "";
      this.showCha = false;
      this.searchShow = true;
      this.resShow = false;
    }
  }
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_1206177_j6rtwzpz6j.css");
.search-con {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.15rem 0;
}
.input-box {
  width: 6.2rem;
  height: 0.3rem;
  background: #ebecec;
  margin: 0 auto;
  border-radius: 0.3rem;
}
.cha {
  float: right;
  width: 0.3rem;
  height: 100%;
  line-height: 0.3rem;
  color: #ccc;
  font-size: 0.14rem;
  text-align: center;
}
.search-icon {
  width: 0.13rem;
  line-height: 0.3rem;
  margin: 0 0.08rem;
  font-size: 0.16rem;
  color: #ccc;
}
input {
  background: transparent;
  width: 4rem;
  height: 100%;
  vertical-align: top;
}
.hot-search {
  padding: 0.15rem 0.1rem 0;
}
.title {
  font-size: 0.12rem;
  color: #666;
  margin-bottom: 0.1rem;
}
.list{
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.item-list {
  display: inline-block;
  margin-right: 0.08rem;
  margin-bottom: 0.08rem;
  padding: 0 0.14rem;
  font-size: 0.14rem;
  line-height: 0.32rem;
  color: #333;
  border: 1px solid #d3d4da;
  border-radius: 0.32rem;
}
.ss-txt {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.ss-txt span {
  margin-left: 0.1rem;
  padding-right: 0.1rem;
  font-size: 0.15rem;
  line-height: 0.5rem;
  color: #507daf;
}
.list-item{
  padding-left: .1rem;
  line-height: .45rem;
}
.sicon{
  font-size: .18rem;
  font-weight: 600;
  color: #ccc;
  margin-right: .07rem;
}
.ss-con{
  font-size: .15rem;
  color: #333;
}
</style>

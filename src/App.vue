<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "app"
};
</script>

<style lang="stylus">
@import url("./assets/css/reset.css");
#app {
  max-width: 6.4rem;
  margin: 0 auto;
  background #fff;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration none
  color #333
  display block
  
}
</style>

<template>
  <div id="app">
    <router-view />
    <div class="navigate">
      <span>
        <router-link to="/sameCity">同城</router-link>
      </span>
      <span class="active">
        <router-link to="/">首页</router-link>
      </span>
      <span>
        <router-link to="/my">我</router-link>
      </span>
    </div>
  </div>
</template>

<style scoped>
#app {
  height: 100%;
}
.navigate {
  position: fixed;
  bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 30px;
  text-align: center;
  font-size: 17px;
  font-weight: 700
}

.navigate span:nth-child(2) {
  margin: 0 20%;
}

.navigate a {
  color: #c3c0c0;
}

.navigate .router-link-exact-active {
  color: white;
  font-size: 18px;
  font-weight: bold;
}
</style>

<template>
  <div id="app">
    <!--   <img src="./assets/logo.png"> -->
    <p>
      <router-link to="/count">cout页</router-link>
      <router-link to="/count/hi1">count1页</router-link>
      <router-link to="/count/hi2">count2页</router-link>
    </p>
    <!-- <count1></count1>
    <count2></count2> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
}

</style>

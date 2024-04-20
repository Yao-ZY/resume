<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/less/theme_color.less';
@import './assets/less/theme_text.less';

#app {
  font-family: @text-style;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @theme-background-color;
}
</style>

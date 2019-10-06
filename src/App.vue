<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,//comoponent등록했을 때 pascal case 를 kebab-case로 자동바꾸어줌

  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

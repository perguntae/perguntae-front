<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli');

html, body {
  font-family: 'Muli', sans-serif !important;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
}
</style>

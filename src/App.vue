<template>
  <div id="app" v-loading.fullscreen.lock="fullscreenLoading">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      fullscreenLoading: false,
    };
  },
  created() {
    this.eventHub.$on('showFullscreenLoading', () => {
      this.fullscreenLoading = true;
    });

    this.eventHub.$on('hideFullscreenLoading', () => {
      this.fullscreenLoading = false;
    });
  },
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

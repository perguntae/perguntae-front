<template>
  <div id="app">
    <div class="header">
      <el-menu :router="true" theme="dark" :default-active="activeIndex" class="header__menu" mode="horizontal">
        <el-menu-item index="CreateClass">{{ $t("menu.createClass") }}</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
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

.content {
  padding: 20px;
}
</style>

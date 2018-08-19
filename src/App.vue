<template lang="pug">

  #app
    el-container
      el-header
        router-link(to="/room/create") Criar sala
        span  | 
        router-link(to="/room/list") Salas
      el-main
        router-view
      el-footer Footer

</template>

<style scoped lang="scss">
@import './style/style.scss';

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

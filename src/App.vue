<template lang="pug">

  #app
    el-container
      el-header
        //- router-link(to="/room/create") Criar sala
        //- span |
        //- router-link(to="/room/list") Salas
        .header-logo
          p Pergunt
            span ae
      el-main
        router-view
      el-footer Footer

</template>

<style lang="scss">
@import './style/style.scss';

#app {
  height: 100%;
}

.header-logo {
  float: left;

  p {
    margin: 0;

  }

  span {
    color: #409EFF;
  }
}

.el-footer, .el-header {
  color: #303133;
  line-height: 60px;
  overflow: hidden;
}

.el-header {
  border-bottom: 1px solid #DCDFE6;
}

.el-footer {
  border-top: 1px solid #DCDFE6;
}

.el-main {
  padding: 0 !important;
  height: 100%;
}

.el-container {
  height: 100%;
}
</style>

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

        .header-configs
          a(@click="dialogFormVisible = true") {{ this.form.userName || 'Anônimo' }}
      el-main
        router-view
      el-footer Footer

    el-dialog(title="Você ainda não tem um nome cadastrdo" :visible.sync="dialogFormVisible")
      el-form(:model="form")
        el-form-item(label="Nome" :label-width="formLabelWidth")
          el-input(v-model="form.userName" autocomplete="off" placeholder="Anônimo")
      span.dialog-footer(slot="footer")
        el-button(@click="dialogFormVisible = false") Adicionar depois
        el-button(type="primary" @click="saveUserName") Confirmar

</template>

<script>
import localForage from 'localforage';
import { Message } from 'element-ui';

import { havePermission } from './Notifications';

export default {
  name: 'App',
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        userName: '',
      },
    };
  },
  created() {
    localForage.getItem('user-name').then((value) => {
      if (value) {
        this.form.userName = value;
      } else {
        this.dialogFormVisible = true;
      }
    });

    if (!havePermission()) {
      Message({
        message: 'Para receber notificações por favor ative na barra de pesquisa.',
        type: 'warning',
        showClose: true,
      });
    }
  },
  methods: {
    saveUserName() {
      localForage.setItem('user-name', this.form.userName).then((value) => {
        this.dialogFormVisible = false;
      });
    },
  },
};
</script>

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

.header-configs {
  float: right;

  a:hover {
    color: #409EFF;
    text-decoration: underline;
    cursor: pointer;
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

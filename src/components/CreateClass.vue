<template>
  <div class="create-class">
    <div class="create-class__form">
      <el-form :model="createClassForm" ref="createClassForm" label-position="rigth" label-width="70px">
        <el-form-item :label="$t('pages.createClass.form.name')" prop="name">
          <el-input type="text" v-model="createClassForm.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('pages.createClass.form.pass')" prop="pass">
          <el-input type="password" v-model="createClassForm.pass"></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" class="create-class__submit-button" @click="submitForm('createClassForm')">{{ $t('pages.createClass.form.create') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Http from '../Http';

const http = new Http();

export default {
  name: 'create-class',
  data() {
    return {
      createClassForm: {
        pass: '',
        name: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(() => {
        http.post('class', this.createClassForm)
          .then((res) => {
            this.$router.push({
              name: 'Room',
              params: {
                hash: res.data.hash,
              },
            });
          })
          .catch();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.create-class__submit-button {
  float: right;
}
</style>

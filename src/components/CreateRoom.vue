<template>
  <div class="create-class">
    <div class="create-class__form">
      <el-form :model="createRoomForm" ref="createRoomForm" label-position="rigth" label-width="70px">
        <el-form-item :label="$t('pages.createRoom.form.name')" prop="name">
          <el-input type="text" v-model="createRoomForm.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('pages.createRoom.form.desc')" prop="desc">
          <el-input type="textarea" v-model="createRoomForm.desc"></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" class="create-room__submit-button" @click="submitForm('createRoomForm')">{{ $t('pages.createRoom.form.create') }}</el-button>
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
      createRoomForm: {
        desc: '',
        name: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(() => {
        http.post('room', this.createRoomForm)
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
.create-room__submit-button {
  float: right;
}
</style>

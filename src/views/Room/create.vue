<template lang="pug">

  #create-container
    el-form(label-position="right" label-width="100px" :model="formRoom")
      el-form-item(:label="$t('room.create.label.name')")
        el-input(v-model="formRoom.title")
      el-form-item(:label="$t('room.create.label.description')")
        el-input(v-model="formRoom.description")
      el-form-item
        el-button(type="primary" @click="createClass") {{ $t('room.create.button.create') }}

</template>

<script>
import RoomMixin from '../../mixin/room';

export default {
  name: 'CreateRoom',
  mixins: [RoomMixin],
  methods: {
    createClass() {
      this.createRoom();
    },
  },
};
</script>

<style scoped lang="scss"></style>

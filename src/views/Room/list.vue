<template lang="pug">

  #list-container
    el-button(@click="dialogNewRoomVisible = true") Criar sala

    el-table(:data="rooms" style="width: 100%")
      el-table-column(prop="name" :label="$t('room.list.table.header.name')" width="180")
      el-table-column(prop="description" :label="$t('room.list.table.header.description')" width="180")
      el-table-column(prop="hash" :label="$t('room.list.table.header.hash')")
      el-table-column(fixed="right" :label="$t('room.list.table.header.actions')" width="120")
        template(slot-scope="scope")
          el-button(
            @click="sendToRoom(scope.row.hash);"
            type="text"
            size="small"
          ) {{ $t('room.list.table.body.getIn') }}

    el-dialog(title="Criar nova sala" :visible.sync="dialogNewRoomVisible")
      el-form(label-position="right" label-width="100px" :model="formRoom")
        el-form-item(:label="$t('room.create.label.name')")
          el-input(v-model="formRoom.title")
        el-form-item(:label="$t('room.create.label.description')")
          el-input(v-model="formRoom.description")
        el-form-item
          el-button(type="primary" @click="createClass") {{ $t('room.create.button.create') }}

</template>

<script>
import localForage from 'localforage';

import RoomMixin from '../../mixin/room';

export default {
  name: 'ListRoom',
  mixins: [RoomMixin],
  data() {
    return {
      dialogNewRoomVisible: false,
    };
  },
  created() {
    this.listRoom();
  },
  methods: {
    sendToRoom(hash) {
      this.$router.push({
        path: `/room/${hash}`,
      });
    },
    createClass() {
      this.dialogNewRoomVisible = false;

      this.createRoom()
        .then(({ hash }) => {
          localForage.getItem('user-rooms').then((value) => {
            value = value || [];
            value.push(hash);
            localForage.setItem('user-rooms', value);
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
#list-container {
  padding: 20px;
}
</style>

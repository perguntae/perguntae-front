<template lang="pug">

  #list-container
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

</template>

<script>
import RoomMixin from '../../mixin/room';

export default {
  name: 'ListRoom',
  mixins: [RoomMixin],
  created() {
    this.listRoom();
  },
  methods: {
    sendToRoom(hash) {
      this.$router.push({
        path: `/room/${hash}`,
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>

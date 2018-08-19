<template lang="pug">

  #list-container
    el-table(:data="rooms" style="width: 100%")
      el-table-column(prop="name" label="Name" width="180")
      el-table-column(prop="description" label="Description" width="180")
      el-table-column(prop="hash" label="Hash")

</template>

<script>
import RoomMixin from '../../mixin/room';

export default {
  name: 'ListRoom',
  mixins: [RoomMixin],
  created() {
    this.listRoom();
  },
};
</script>

<style lang="scss" scoped></style>

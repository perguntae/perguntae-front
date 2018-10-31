<template lang="pug">

  #inside-container
    .question-list
      el-card.question-list__card(v-for="q in questions" :key="q.hash")
        .question-list__question-title {{ q.title }}
        .question-list__question-description {{ q.description }}

    .question-send
      el-form(:model="questionForm")
        el-form-item
          el-input(:placeholder="$t('room.inside.label.title')" v-model="questionForm.title")
        el-form-item
          el-input(
            :placeholder="$t('room.inside.label.description')"
            type="textarea"
            v-model="questionForm.description"
          )
        el-form-item
          el-button(type="primary" @click="sendQuestionToRoom") {{ $t('room.inside.button.sendQuestion') }}

</template>

<script>
import RoomMixin from '../../mixin/room';

export default {
  name: 'InsideRoom',
  mixins: [RoomMixin],
  created() {
    if (this.$route.params && this.$route.params.hash) {
      this.setRoomHash(this.$route.params.hash);
      this.getQuestionsFromRoom();
    }
  },
};
</script>

<style scoped lang="scss">
.question-list__question-title {
  margin-bottom: 10px;
  font-weight: 700;
}

.question-list__card {
  margin-bottom: 20px;
}
</style>

<template lang="pug">

  el-row#inside-container
    el-col(:span="12").questions
      .questions-list
        el-card.question-list__card
          .question-list__question-title Não vai ter?
          .question-list__question-description Como assim não teremos sopa?

        el-card.question-list__card
          .question-list__question-title Alex? Que Alex?
          .question-list__question-description Não me lembro de ninguém chamado Alex..

      el-row.questions-form
        el-col(:span="21")
          el-input.teste
            div(slot="placeholder")
              | Vamos lá, Perguntae!

        el-col(:span="3")
          el-button.questions-form__btn-enviar
            font-awesome-icon(icon="paper-plane")

    el-col(:span="12").qr-code-details
      p Leia o QRcode para entrar na sala
      img.qr-code-detailt__qr-code-img(src="https://www.unitag.io/images/generator/templates/facebook.png")

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
#inside-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.questions, .qr-code-details {
  height: 100%;
  box-sizing: border-box;
}

.questions {
  float: left;
  border-right: 1px solid #DCDFE6;
  position: relative;
}

.qr-code-details {
  float: right;
  text-align: center;
  border-left: 1px solid #DCDFE6;
}

.qr-code-detailt__qr-code-img {
  width: 128px;
}

.questions-list {
  height: 100%;
  overflow: auto;
  padding: 20px;
}

.questions-form {
  height: 60px;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  border-top: 1px solid #DCDFE6;
}

.questions-form__btn-enviar {
  float: right;
}

.question-list__question-title {
  margin-bottom: 10px;
  font-weight: 700;
}

.question-list__card {
  margin-bottom: 20px;
}
</style>

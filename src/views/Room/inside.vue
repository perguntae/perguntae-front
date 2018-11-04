<template lang="pug">

  el-row#inside-container
    el-col(:span="16").questions
      .questions-list
        el-card.question-list__card(v-for="q in questions" :key="q.hash")
          .question-list__question-title {{ q.userName }}
          .question-list__question-description {{ q.description }}

      el-row.questions-form
        el-col(:span="21")
          el-input.questions-form__question-input(placeholder="Vamos lá, Perguntae!" :value="questionForm.description" @input="updateQuestionDescription")

        el-col(:span="3")
          el-button.questions-form__btn-enviar(@click="sendQuestionToRoom")
            font-awesome-icon(icon="paper-plane")

    el-col(:span="8").qr-code-details
      p Leia o QRcode para entrar na sala
      img.qr-code-detailt__qr-code-img(src="https://www.unitag.io/images/generator/templates/facebook.png")

</template>

<script>
import localForage from 'localforage';

import request from '../../request';
import RoomMixin from '../../mixin/room';
import { showNotification } from '../../Notifications';

export default {
  name: 'InsideRoom',
  mixins: [RoomMixin],
  created() {
    if (this.$route.params && this.$route.params.hash) {
      this.setRoomHash(this.$route.params.hash);
      this.getQuestionsFromRoom();
    }

    localForage.getItem('user-rooms').then((value) => {
      value = value || [];

      setInterval(() => {
        this.askForNewQuestions()
          .then((newQuestionsSize) => {
            if (value.indexOf(this.$route.params.hash) > -1 && newQuestionsSize > 0) {
              showNotification({
                title: `Você tem ${newQuestionsSize} novas perguntas.`,
              });
            }
          });
      }, 10000);
    });
  },
  methods: {
    showQuestionNotification() {
      showNotification({
        title: 'teste',
      });
    },
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

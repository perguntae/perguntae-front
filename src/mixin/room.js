import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters('room', [
    'rooms',
    'formRoom',
    'questions',
    'questionForm',
  ]),
  methods: {
    ...mapActions('room', [
      'createRoom',
      'listRoom',
      'setRoomHash',
      'getQuestionsFromRoom',
      'sendQuestionToRoom',
      'updateQuestionDescription',
    ]),
  },
};

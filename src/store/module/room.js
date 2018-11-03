import localForage from 'localforage';
import request from '../../request';

export default {
  namespaced: true,

  state: {
    rooms: [],
    formRoom: {
      title: '',
      description: '',
    },
    room: {
      hash: '',
      questions: [],
      questionForm: {
        title: '',
        description: '',
      },
    },
  },

  getters: {
    rooms: state => state.rooms,
    formRoom: state => state.formRoom,
    questions: state => state.room.questions,
    questionForm: state => state.room.questionForm,
  },

  actions: {
    createRoom({ commit, state }) {
      return request.post('/room/new', {
        name: state.formRoom.title,
        description: state.formRoom.description,
      })
        .then(({ data }) => {
          commit('RESET_FORM_ROOM');
          return data.room;
        })
        .catch(console.log);
    },
    listRoom({ commit }) {
      request.get('/room/all')
        .then(({ data }) => {
          commit('SET_ROOMS', data.rooms);
        })
        .catch(console.log);
    },
    getQuestionsFromRoom({ commit, state }) {
      request.get(`/room/${state.room.hash}/questions`)
        .then(({ data }) => {
          commit('SET_ROOM_QUESTIONS', data.room.questions);
        })
        .catch(console.log);
    },
    setRoomHash({ commit }, hash) {
      commit('SET_ROOM_HASH', hash);
    },
    sendQuestionToRoom({ commit, state }) {
      localForage.getItem('user-name').then((value) => {
        request.post(`/room/${state.room.hash}/questions/new`, {
          userName: value || 'Anônimo',
          question: state.room.questionForm.title,
          description: state.room.questionForm.description,
        })
          .then(({ data }) => {
            const { hash, title, description } = data.question;

            commit('RESET_QUESTION_FORM');

            commit('SET_NEW_QUESTION', {
              hash,
              title,
              description,
            });
          })
          .catch(console.log);
      });
    },
    updateQuestionDescription({ commit }, questionDescription) {
      commit('UPDATE_QUESTION_DESCRIPTION', questionDescription);
    },
    askForNewQuestions({ state, commit }) {
      return request.get(`/room/${state.room.hash}/questions`)
        .then(({ data }) => {
          const newQuestionsSize = data.room.questions.length - state.room.questions.length;

          if (newQuestionsSize > 0) {
            commit('SET_ROOM_QUESTIONS', data.room.questions);
          }

          return newQuestionsSize;
        })
        .catch(console.log);
    },
  },

  mutations: {
    'RESET_FORM_ROOM'(state) {
      Object.assign(state, {
        formRoom: {
          title: '',
          description: '',
        },
      });
    },
    'SET_ROOMS'(state, rooms) {
      Object.assign(state, {
        rooms,
      });
    },
    'SET_ROOM_QUESTIONS'(state, questions) {
      Object.assign(state.room, {
        questions,
      });
    },
    'SET_ROOM_HASH'(state, hash) {
      Object.assign(state.room, {
        hash,
      });
    },
    'SET_NEW_QUESTION'(state, question) {
      state.room.questions.push(question);
    },
    'RESET_QUESTION_FORM'(state) {
      Object.assign(state.room, {
        questionForm: {
          title: '',
          description: '',
        },
      });
    },
    'UPDATE_QUESTION_DESCRIPTION'(state, questionDescription) {
      Object.assign(state.room.questionForm, {
        description: questionDescription,
      });
    },
  },
};

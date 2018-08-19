import axios from 'axios';

// MOVER PARA A ABSTRACAO
export const httpApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export default {
  namespaced: true,

  state: {
    rooms: [],
    formRoom: {
      title: '',
      description: '',
    },
  },

  getters: {
    rooms: state => state.rooms,
    formRoom: state => state.formRoom,
  },

  actions: {
    createRoom({ commit, state }) {
      httpApi.post('/room/new', {
        name: state.formRoom.title,
        description: state.formRoom.description,
      })
        .then(() => {
          commit('RESET_FORM_ROOM');
        })
        .catch(console.log);
    },
    listRoom({ commit }) {
      httpApi.get('/room/all')
        .then(({ data }) => {
          commit('SET_ROOMS', data.data);
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
  },
};

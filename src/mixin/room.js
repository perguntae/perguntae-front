import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters('room', [
    'rooms',
    'formRoom',
  ]),
  methods: {
    ...mapActions('room', [
      'createRoom',
      'listRoom',
    ]),
  },
};

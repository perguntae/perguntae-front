import Vue from 'vue';
import VueI18n from 'vue-i18n';

import brMessages from './brMessages';

Vue.use(VueI18n);

const messages = Object.assign({}, brMessages);

const i18n = new VueI18n({
  locale: 'br',
  messages,
});

export default i18n;

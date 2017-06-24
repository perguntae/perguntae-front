import Vue from 'vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-default/index.css';

import App from './App';
import router from './router';
import i18n from './i18n';

Vue.use(ElementUI);

Vue.config.productionTip = false;

const eventHub = new Vue();

Vue.mixin({
  data() {
    return {
      eventHub,
    };
  },
});

window.$app = new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App),
});

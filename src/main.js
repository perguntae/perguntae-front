import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,
  Card,
} from 'element-ui';

import App from './App';

import router from './router';
import store from './store';
import messages from './i18n';
import lang from '../node_modules/element-ui/lib/locale/lang/pt-br';
import locale from '../node_modules/element-ui/lib/locale';

import './registerServiceWorker';
import './style/element-variables.scss';

Vue.config.productionTip = false;

Vue.component(Button.name, Button);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Card.name, Card);

locale.use(lang);

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pt-br',
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

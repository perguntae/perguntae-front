import Vue from 'vue';
import Router from 'vue-router';
import CreateClass from '@/components/CreateClass';
import Room from '@/components/Room';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'CreateClass',
    },
    {
      path: '/CreateClass',
      name: 'CreateClass',
      component: CreateClass,
    },
    {
      path: '/Room',
      name: 'Room',
      component: Room,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

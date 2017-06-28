import Vue from 'vue';
import Router from 'vue-router';
import CreateRoom from '@/components/CreateRoom';
import Room from '@/components/Room';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'CreateRoom',
    },
    {
      path: '/CreateRoom',
      name: 'CreateRoom',
      component: CreateRoom,
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

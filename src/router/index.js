import Vue from 'vue';
import Router from 'vue-router';

import Room from '@/views/Room';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/room',
      name: 'room',
      component: Room,
      children: [
        {
          path: 'create',
          name: 'CreateRoom',
          component: () => import(/* webpackChunkName: "create" */ '@/views/Room/create'),
        },
        {
          path: 'list',
          name: 'ListRoom',
          component: () => import(/* webpackChunkName: "list" */ '@/views/Room/list'),
        },
      ],
    },
  ],
});

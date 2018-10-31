import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/room',
      name: 'Room',
      component: () => import(/* webpackChunkName: "room" */ '@/views/Room'),
      children: [
        {
          path: 'create',
          name: 'CreateRoom',
          component: () => import(/* webpackChunkName: "room-create" */ '@/views/Room/create'),
        },
        {
          path: 'list',
          name: 'ListRoom',
          component: () => import(/* webpackChunkName: "room-list" */ '@/views/Room/list'),
        },
        {
          path: ':hash',
          name: 'InsideRoom',
          component: () => import(/* webpackChunkName: "room-inside" */ '@/views/Room/inside'),
        },
      ],
    },
  ],
});

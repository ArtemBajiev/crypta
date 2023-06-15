import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import TestPage from '@/views/TestPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

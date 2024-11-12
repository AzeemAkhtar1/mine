import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import NextPage from '@/components/NextPage.vue'; 
import YesPage from '@/components/YesPage.vue';
import NoPage from '@/components/NoPage.vue';
import ThankyouPage from '@/components/ThankyouPage.vue';
import YesLove from '@/components/YesLove.vue';
import DatePage from '@/components/DatePage.vue';
import NoDatePage from '@/components/NoDatePage.vue';
import YesDatePage from '@/components/YesDatePage.vue';
import GiftPage from '@/components/GiftPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/next',
    name: 'NextPage',
    component: NextPage,
  },
  {
    path: '/yes',
    name: 'YesPage',
    component: YesPage,
  },
  {
    path: '/no',
    name: 'NoPage',
    component: NoPage,
  },
  {
    path: '/Thankyou',
    name: 'ThankyouPage',
    component: ThankyouPage,
  },
  {
    path: '/yesLove',
    name: 'YesLove',
    component: YesLove,
  },
  {
    path: '/datePage',
    name: 'DatePage',
    component: DatePage,
  },
  {
    path: '/YesdatePage',
    name: 'YesDatePage',
    component: YesDatePage,
  },
  {
    path: '/NodatePage',
    name: 'NoDatePage',
    component: NoDatePage,
  },
  {
    path: '/GiftPage',
    name: 'GiftPage',
    component: GiftPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


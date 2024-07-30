import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import ForgetPassword from '@/components/ForgetPassword.vue';
import SignIn from '@/components/SignIn.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Home',
    name: 'home',
    component: Home,
  },
  {
    path:"/ForgetPassword",
    name:"forgetpassword",
    component:ForgetPassword,
  },
  {
    path:"/SignIn",
    name:"SignIn",
    component:SignIn,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL || '/'),
  routes,
});

export default router;
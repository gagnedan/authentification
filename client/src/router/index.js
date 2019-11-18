import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'login',
  component: Login,
  beforeEnter: (to, from, next) => {
    if (localStorage.token) {
      next('/dashboard');
    } else {
      next();
    }
  },
},
{
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  beforeEnter: (to, from, next) => {
    if (localStorage.token) {
      next();
    } else {
      next('/login');
    }
  },
},

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

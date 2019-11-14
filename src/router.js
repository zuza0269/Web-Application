import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lessons from './views/lessons.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Lesson from './components/lesson.vue'
import Admin from './Admin/Admin.vue'
import Login from './Admin/Login.vue'
import AddNewItems from './components/AddNewItems.vue'
import Cart from './views/Cart.vue'
import Orders from './Admin/Orders.vue'
import Staff from './views/Staff.vue'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/add',
      name: 'add',
      component: AddNewItems,
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: {
        requiresAuth: true
      } 
    },
    {
    path: '*',
    redirect: '/'
   },
  ]
});

  router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth && !currentUser) next('login');
    else next();
  });
  export default router
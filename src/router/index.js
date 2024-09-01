import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import {userAuthentication} from '../router/loginCheck'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const {isAuthenticated} = userAuthentication()

router.beforeEach((to, from, next) => {
    // Perform logic before every route change
    if (to.name == 'About') {
        if(isAuthenticated.value){
            next();
        }else{
            alert("Please Login before explore 'About' page")
            next({ name: 'Login' });
        }
    } else {
      next();
    }
  });

export default router
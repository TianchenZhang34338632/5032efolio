import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import EditBookView from '../views/EditBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import {userAuthentication} from '../router/loginCheck'
import WeatherView from '../views/WeatherView.vue'
import GetAllBooksAPI from '../views/GetAllBooksAPI.vue'

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
  },
  {
    path: '/Firelogin',
    name: 'Firelogin',
    component: FirebaseSigninView
  },
  {
    path: '/Fireregister',
    name: 'Fireregister',
    component: FirebaseRegisterView
  },
  {
    path: '/Addbook',
    name: 'Addbook',
    component: AddBookView
  }
  ,
  {
    path: '/Editbook',
    name: 'Editbook',
    component: EditBookView
  }
  ,
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  }
  ,
  {
    path: '/GetAllBooksAPI',
    name: 'GetAllBooksAPI',
    component: GetAllBooksAPI
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
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
    },
    {
      path: '/Firelogin',
      name: 'Firelogin',
      component: FirebaseSigninView
    },
    {
      path: '/Fireregister',
      name: 'Fireregister',
      component: FirebaseRegisterView
    },
    {
      path: '/Addbook',
      name: 'Addbook',
      component: AddBookView
    }
    ,
    {
      path: '/Editbook',
      name: 'Editbook',
      component: EditBookView
    }
    ,
    {
      path: '/GetBookCount',
      name: 'GetBookCount',
      component: GetBookCountView
    },
    {
      path: '/CountBookAPI',
      name: 'CountBookAPI',
      component: CountBookAPI
    },
    {
      path: '/WeatherCheck',
      name: 'WeatherCheck',
      component: WeatherView
    }
    ,
    {
      path: '/GetAllBooksAPI',
      name: 'GetAllBooksAPI',
      component: GetAllBooksAPI
    }
  ]
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
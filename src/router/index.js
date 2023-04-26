import { createRouter, createWebHistory } from 'vue-router'
import store         from '../store'
import HomeView      from '../views/HomeView.vue'
import DetailView    from '../views/DetailView.vue'
import AboutView     from '../views/AboutView.vue'
import ProfileView   from '../views/ProfileView.vue'
import LoginView     from '../views/LoginView.vue'
import LogoutView    from '../views/LogoutView.vue'
import RegisterView  from '../views/RegisterView.vue'
import AddView       from '../views/AddView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:slug',
    name: 'Detail',
    component: DetailView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: { loginRequired: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { loginRedirect: true }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
    meta: { loginRequired: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { loginRequired: true }
  },
  {
    path: '/add',
    name: 'Add',
    component: AddView,
    meta: { loginRequired: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.loginRequired && !store.state.isAuthenticate) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  } else if (to.meta.loginRedirect && store.state.isAuthenticate) {
    return {
      path: '/profile',
      query: { redirect: to.fullPath },
    }
  }
})

export default router

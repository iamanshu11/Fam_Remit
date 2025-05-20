import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import ThankYou from '../views/ThankYou.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/thank-you', name: 'ThankYou', component: ThankYou }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

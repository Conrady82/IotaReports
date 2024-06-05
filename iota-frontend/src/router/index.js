import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import UploadReport from '../views/Observer/UploadReport.vue'
import ViewEvents from '../views/Observer/ViewEvents.vue'
import ReviewReports from '../views/Reviewer/ReviewReports.vue'
import ManageEvents from '../views/Reviewer/ManageEvents.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/upload-report',
    name: 'UploadReport',
    component: UploadReport,
    meta: { requiresAuth: true }
  },
  {
    path: '/view-events',
    name: 'ViewEvents',
    component: ViewEvents,
    meta: { requiresAuth: true }
  },
  {
    path: '/review-reports',
    name: 'ReviewReports',
    component: ReviewReports,
    meta: { requiresAuth: true }
  },
  {
    path: '/manage-events',
    name: 'ManageEvents',
    component: ManageEvents,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/' // Redirect to home if no route matches
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router

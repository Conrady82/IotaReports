import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import UploadReport from '../views/Observer/UploadReport.vue';
import ViewEvents from '../views/Observer/ViewEvents.vue';
import ReviewReports from '../views/Reviewer/ReviewReports.vue';
import ManageEvents from '../views/Reviewer/ManageEvents.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/upload-report',
    name: 'UploadReport',
    component: UploadReport
  },
  {
    path: '/view-events',
    name: 'ViewEvents',
    component: ViewEvents
  },
  {
    path: '/review-reports',
    name: 'ReviewReports',
    component: ReviewReports
  },
  {
    path: '/manage-events',
    name: 'ManageEvents',
    component: ManageEvents
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/' // Redirect to home if no route matches
  }
];

const router = createRouter({
  history: createWebHistory('/')
  routes
});

export default router;


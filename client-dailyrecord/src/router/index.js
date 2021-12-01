import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue') // Import components
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/projectCreation',
    name: 'ProjectCreation',
    component: () => import('../views/ProjectCreation.vue')
  },
  {
    path: '/project/:projectId',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/project/:projectId/setting',
    name: 'ProjectSetting',
    component: () => import('../views/ProjectSetting.vue')
  },
  {
    path: '/project/:projectId/meetingCreation',
    name: 'MeetingCreation',
    component: () => import('../views/MeetingCreation.vue')
  },
  {
    path: '/project/:projectId/meeting/:meetingId',
    name: 'Meeting',
    component: () => import('../views/Meeting.vue')
  },
  {
    path: '*',
    name: 'Teapot',
    component: () => import('../views/Teapot.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path:'/profile',
        name:'profile',
        component: () => import('@/views/Profile.vue'),
      },
      {
        path:'/contact',
        name:'contact',
        component:() => import('@/views/Contact.vue'),
      },
      {
        path:'/works',
        name:'works',
        component:() => import('@/views/Works.vue')
      },
      {
        path:'/products',
        name:'products',
        component:() => import('@/views/Products.vue'),
      },
      {
        path:'/hobby',
        name:'hobby',
        component:() => import('@/views/Hobby.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

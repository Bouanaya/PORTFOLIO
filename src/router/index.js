import { createRouter, createWebHistory } from 'vue-router'
 

const router = createRouter({
   linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      
    },
    {
      path: '/About',
      name: 'About',
   
    },
    {
      path: '/Skills',
      name: 'Skills',
      
    },
    {
      path: '/Service',
      name: 'Service',
     
    },
     {
      path: '/PortFolio',
      name: 'PortFolio',
      
    },
        {
      path: '/Contact',
      name: 'Contact',
     
    },
     
  ]
})

export default router

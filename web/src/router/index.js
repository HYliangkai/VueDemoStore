import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import('../views/Login')
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../views/Home'),
    children:[
      {
        path:'/',
        name:'homer',
        component:()=>import('../views/homer')
      },
      {
        path:'/category',
        name:'category',
        component:()=>import('../views/category')
      },
      {
        path:'/info',
        name:'info',
        component:()=>import('../views/info')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

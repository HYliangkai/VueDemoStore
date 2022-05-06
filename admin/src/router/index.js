import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import('../views/Login'),
    meta:{Publish:true}
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../views/Home'),
    children:[
      {path:'/categories',
        name: 'categories',
        component:()=>import('../views/categories'),},
      {path:'/categorieslist',
        name:'categorieslist',
        component: () => import('../views/categoriselist')},
        
      {path:'/items',
          name:'items',
        component: () => import('../views/items')},
      {path:'/itemslist',
          name:'itemslist',
        component: () => import('../views/itemslist')},

      {path:'/peoplelist',
          name:'people',
        component: () => import('../views/peoplelist')},
      {path:'/addadmin',
        name:'ad',
        component:()=>import('../views/addadmin')},

      {path:'/swiper',
        name:'swiper',
        component: () => import('../views/swiper')},
      {path:'/swiperlist',
          name:'swiperlist',
        component: () => import('../views/swiperList')}
        
    ]
  }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.Publish&&!sessionStorage.token){
    next('/')
  }
  else next()
})

export default router

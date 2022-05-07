import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/second.scss'
import axios from './http.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import card from './components/card'
Vue.component('card',card)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(element)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

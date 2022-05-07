import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/second.scss'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './http.js'
import store from './store'

Vue.prototype.$http=axios
Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

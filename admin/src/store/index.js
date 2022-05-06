import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //还得把数据存储在storage里面不然属性还会消失
    username:sessionStorage.getItem('username') || ' '
  },
  getters: {
  },
  mutations: {
    setusername(state,s){          //在mutatios必须要传入一个state对象来具体修改stats里面的数据,在函数外面不外显
      sessionStorage.setItem('username',s)
      state.username=s
    }
  },
  actions: {
  },
  modules: {
  }
})

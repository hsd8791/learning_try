// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */


const store = new Vuex.Store({
  state: {
    a:0,
    b:1,
    count: 0,
    count1: 10,
    count2:2,
    count3:3,
    count4:4,
  },
  getters: {// 约等于 computed
      doneTodos: state => {
        return 'from getters'
      },
      doneTodosCount:(s,g)=>{
        return g.doneTodos.length
      },
      sum:s=>s.a+s.b,
    },
  // getters:{
  //   square:(state)=>{ß
  //     return state.count*state.count
  //   },
  // },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementBy(state,cfg){
      state.count+=cfg.step
    },
    aIncrement(s){
      s.a++
    },
    bIncrement(s,cfg){
      s.b+=cfg.step
    },
  },
  actions:{
    increment(context){
      context.commit('increment')
    }
  },
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
store.commit('increment')
store.commit('increment')
store.commit('increment')
console.log(store.state.count) // -> 1
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import branchRouter from './router/test'
import router from './router/index'

// console.log('router', router)
// console.log('branchRouter', branchRouter)
Vue.config.productionTip = false // !!important 待学习
	// Vue.config.performace = true // !!important 待学习

/* eslint-disable no-new */
var appVue = new Vue({
	el: '#app',
	// branchRouter,
	router,
	name: 'app',
	template: '<App></App>',
	components: {
		App
	}
	// ,
	// watch: {
	// 	'$route' (to, from) {
	// 		console.log('to', to)
	// 		console.log('from', from)
	// 	}
	// }
})

router.beforeEach((to, from, next) => {
	console.log('to,beforeEach', to)
	next()
})
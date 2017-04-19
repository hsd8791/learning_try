import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '@/components/Hello'
import Test from '../components/test'
import Test2 from '../components/test2'

Vue.use(VueRouter)
	// console.log('Hello', Hello)

export default new VueRouter({
	routes: [{
		path: '/',
		name: 'Hello',
		component: Hello
			// ,//usable
			// beforeEnter: function(to, from, next) {
			// 	console.log('to', to.path)
			// 	console.log('from', from.path)
			// 	next()
			// }
	}, {
		path: '/test',
		name: 'test',
		components: {
			default: Test,
			a: Test2
		}
	}]
})

// .beforeEach((to, from, next) => {  //不能使用~~
// 	console.log('to', to.path)
// 	console.log('from', from.path)
// 	next()
// })
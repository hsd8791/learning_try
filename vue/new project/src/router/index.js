import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '@/components/Hello'
import Test from '../components/test'
// import Test2 from '../components/test2'
// import Foo from '../components/foo'
const Test2 = resolve => require(['../components/test2.vue'], resolve)
const Foo = function(res) {
	require(['../components/foo.vue'], res)
}


Vue.use(VueRouter)
	// console.log('Hello', Hello)

export default new VueRouter({
	mode: 'history',
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
	}, {
		path: '/foo',
		name: 'foo',
		component: Foo
	}, {
		path: '/test2',
		name: "test2",
		components: {
			default: Test2
		}
	}]
})

// .beforeEach((to, from, next) => {  //不能使用~~
// 	console.log('to', to.path)
// 	console.log('from', from.path)
// 	next()
// })
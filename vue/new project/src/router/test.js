import Vue from 'vue'
import VueRouter from 'vue-router'

import TestBranch from '../components/branch_test_component'

Vue.use(VueRouter)
	// 尼玛(｡･∀･)ﾉﾞ嗨  好像不行啊。。。
export default new VueRouter({
	routes: [{
		path: '/branch/test',
		name: TestBranch,
		component: TestBranch
			// ,
			// beforeEnter: function(to, from, next) {
			// 	console.log('to', to.path)
			// 	console.log('from', from.path)
			// 	next()
			// }
	}]
})
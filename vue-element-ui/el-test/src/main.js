// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
	Button,
	Input,

} from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)
// Vue.component(Button.name, Button)
Vue.use(Button)

Vue.config.productionTip = false

// eslint-disable no-new 
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	},
	render: h => h(App)
})